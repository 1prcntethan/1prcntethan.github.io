import React, { useEffect, useRef, useState } from "react";
import {
  HandLandmarker, // the MediaPipe class that detects hand landmarks
  FilesetResolver, // loads the WASM files MediaPipe needs to run
  DrawingUtils, // helper to draw landmarks and connections onto a canvas
} from "@mediapipe/tasks-vision";
import * as ort from "onnxruntime-web"; // runs our trained ONNX model in the browser

// The gesture labels in the order sklearn assigned them during training.
// sklearn always sorts class names ALPHABETICALLY internally, regardless of
// what order you collected them. So even though we collected in order
// [idle, pointer, scroll, pinch, palm], sklearn sorted them to:
// 0:idle, 1:palm, 2:pinch, 3:pointer, 4:scroll
// The probability array from the model maps index → gesture using THIS order.
// If this is wrong, gestures will be mislabeled (e.g. "pinch" shows as "palm").
const GESTURE_CLASSES = ["idle", "palm", "pinch", "pointer", "scroll"];

// The gesture list for the data collection UI (order doesn't matter here,
// this is just what appears in the dropdown)
const GESTURES = ["idle", "pointer", "scroll", "pinch", "palm"];

// How often to capture a sample while holding the record button.
// 100ms = 10 samples per second.
const SAMPLE_RATE_MS = 100;

// ── NORMALIZATION ─────────────────────────────────────────────────────────────
// This function must match EXACTLY what train.py did to the data before training.
// The model learned patterns from normalized data — if we feed it raw data at
// inference time, the input distribution is different and predictions break.
//
// What normalization does and WHY:
// MediaPipe gives us absolute coordinates: x=0.6 means 60% across the frame.
// The problem: if you hold your hand on the left vs right side of the screen,
// all 63 numbers shift by a fixed offset. The model would think these are
// completely different hand shapes, even though the fingers look the same.
//
// Fix: subtract the wrist position from every landmark. Now every coordinate
// is relative to the wrist. "Index finger tip" becomes "index finger tip is
// 0.3 units above and 0.1 units right of the wrist" regardless of where in
// the frame your hand is. This is called wrist-centering.
//
// We also divide by the distance from wrist to middle finger base (landmark 9).
// This accounts for distance from camera — a hand closer to the camera has
// larger raw coordinates. After dividing, all hands are the same "size".
function normalizeLandmarks(landmarks) {
  const wrist = landmarks[0]; // landmark 0 is always the wrist

  // subtract wrist from every point so everything is wrist-relative
  const centered = landmarks.map((lm) => ({
    x: lm.x - wrist.x,
    y: lm.y - wrist.y,
    z: lm.z - wrist.z,
  }));

  // landmark 9 = base of middle finger, good reference for overall hand scale
  const ref = centered[9];
  // Euclidean distance from wrist to middle finger base
  const scale = Math.sqrt(ref.x ** 2 + ref.y ** 2 + ref.z ** 2);

  // divide every coordinate by hand scale — now hand size is normalized too
  const normalized =
    scale > 0
      ? centered.map((lm) => ({
          x: lm.x / scale,
          y: lm.y / scale,
          z: lm.z / scale,
        }))
      : centered; // if scale is 0 somehow, skip division to avoid NaN

  // flatten 21 {x,y,z} objects into a single array of 63 numbers:
  // [x0,y0,z0, x1,y1,z1, ..., x20,y20,z20]
  // this is the format the model expects
  return normalized.flatMap((lm) => [lm.x, lm.y, lm.z]);
}

export default function Swype({ cursorControlRef, pinchProgressRef }) {
  // whether the overlay is active (camera on, model running)
  const [active, setActive] = useState(false);
  // current predicted gesture label shown in the UI
  const [gestureLabel, setGestureLabel] = useState("idle");
  // confidence percentage of the current prediction (0-100)
  const [confidence, setConfidence] = useState(0);
  // which panel is showing: preview (just camera) or collect (data collection)
  const [mode, setMode] = useState("preview");

  // data collection state
  const [selectedGesture, setSelectedGesture] = useState(GESTURES[0]);
  const [recording, setRecording] = useState(false);
  const [counts, setCounts] = useState(
    Object.fromEntries(GESTURES.map((g) => [g, 0])),
  );

  // ── REFS ────────────────────────────────────────────────────────────────────
  // Refs hold values that persist across renders without triggering re-renders.
  // We use refs for anything that lives inside the animation loop, because
  // state updates inside rAF cause React re-renders which tank performance.

  const videoRef = useRef(null); // the hidden <video> element (webcam feed)
  const canvasRef = useRef(null); // the <canvas> we draw video + landmarks on
  const handLandmarkerRef = useRef(null); // MediaPipe HandLandmarker instance
  const onnxSessionRef = useRef(null); // loaded ONNX inference session
  const animationRef = useRef(null); // requestAnimationFrame ID (for cleanup)
  const samplesRef = useRef([]); // collected training samples (array of {vector, label})
  const recordingRef = useRef(false); // mirror of `recording` state, readable inside rAF
  const lastSampleTime = useRef(0); // timestamp of last recorded sample
  const gestureStateRef = useRef("idle"); // "idle" | "pointer" | "scroll" | "palm"
  const smoothedPos = useRef({ x: 0.5, y: 0.5 }); // smoothed wrist position — average over last N frames to reduce jitter
  const prevPos = useRef({ x: 0.5, y: 0.5 }); // previous wrist position — used to calculate delta (how much hand moved for scroll/pan speed)
  const pinchStartTime = useRef(null);

  // Keep recordingRef in sync with recording state.
  // We can't read `recording` directly inside renderLoop because of stale closures —
  // the function captures the value of `recording` when it's first created (false)
  // and never sees updates. Reading recordingRef.current always gets the latest value.
  useEffect(() => {
    recordingRef.current = recording;
  }, [recording]);

  // ── MAIN EFFECT ─────────────────────────────────────────────────────────────
  // This runs whenever `active` changes.
  // When active=true: load MediaPipe + ONNX, start webcam, start render loop.
  // When active=false: the cleanup function (return () => {}) tears everything down.
  useEffect(() => {
    if (!active) {
      // cleanup: cancel the animation loop and stop the webcam stream
      cancelAnimationFrame(animationRef.current);
      const stream = videoRef.current?.srcObject;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      handLandmarkerRef.current = null;
      onnxSessionRef.current = null;
      return;
    }

    async function start() {
      // ── LOAD MEDIAPIPE ────────────────────────────────────────────────────
      // MediaPipe Tasks runs on WebAssembly (WASM) — compiled C++ code that
      // runs in the browser at near-native speed. FilesetResolver downloads
      // the WASM binary from the CDN and sets it up before we can use it.
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",
      );
      console.log("MediaPipe vision files loaded");
      // HandLandmarker is the actual model — it takes a video frame and returns
      // 21 landmark points representing the hand skeleton.
      // The .task file is a pre-trained Google model, downloaded from their CDN.
      // delegate: "GPU" runs it on the graphics card for better performance.
      // try GPU first, fall back to CPU if WebGL context unavailable
      let handLandmarker;
      try {
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numHands: 1,
        });
        console.log("MediaPipe HandLandmarker loaded on GPU");
      } catch {
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
            delegate: "CPU",
          },
          runningMode: "VIDEO",
          numHands: 1,
        });
        console.log("MediaPipe HandLandmarker loaded on CPU");
      }

      handLandmarkerRef.current = handLandmarker;

      // ── LOAD ONNX MODEL ───────────────────────────────────────────────────
      // Tell onnxruntime-web where to find its own internal WASM files.
      // By default it looks in the same folder as the page, but Vite doesn't
      // copy those files there automatically. Pointing to the CDN avoids
      // needing to configure anything locally.
      // The version must match exactly what's in package.json.
      ort.env.wasm.wasmPaths =
        "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.24.3/dist/";

      // Load our trained gesture model from the public/ folder.
      // InferenceSession.create() fetches the .onnx file, parses the
      // computation graph, and compiles it to run on this machine.
      // After this, session.run() executes the model on new inputs.
      const session = await ort.InferenceSession.create("/swype_model.onnx");
      onnxSessionRef.current = session;
      console.log(
        "ONNX model loaded - created Inference session using pre-trained onnx model file",
      );
      console.log(
        "ONNX model can be retrained by collecting data and using swype_train.py to get a pkl file.",
      );
      console.log(
        "Then use convertupdated.py to convert to onnx file, and move to public folder.",
      );

      // ── WEBCAM ────────────────────────────────────────────────────────────
      // getUserMedia() asks the browser for camera access.
      // The stream goes into the hidden <video> element — we don't display
      // the video directly, we draw it onto the canvas each frame.
      console.log("Requesting webcam access...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 220, height: 160 },
      });
      console.log("Webcam stream obtained");
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      // Set canvas dimensions to match. These are the actual pixel dimensions
      // the canvas draws at. canvas.style.width/height controls display size.
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d"); // 2D drawing context
      canvas.width = 220;
      canvas.height = 160;
      canvas.style.width = "220px";
      canvas.style.height = "160px";

      // DrawingUtils is a MediaPipe helper that knows how to draw hand skeleton
      // connections and landmark dots onto a canvas context.
      const drawingUtils = new DrawingUtils(ctx);

      // ── RENDER LOOP ───────────────────────────────────────────────────────
      // requestAnimationFrame (rAF) calls this function before every screen repaint,
      // typically 60 times per second. Each call:
      //   1. runs MediaPipe on the current video frame → get 21 landmarks
      //   2. draws the mirrored video + skeleton onto the canvas
      //   3. normalizes the landmarks → runs ONNX model → get gesture + confidence
      //   4. schedules itself again via rAF
      // This is the core loop that makes everything real-time.
      async function renderLoop() {
        
        const now = performance.now(); // high-resolution timestamp in milliseconds

        // ── PERFORMANCE MONITOR ───────────────────────────────────────────────
        // logs actual FPS every second so you can see impact of each feature
        if (!renderLoop.lastLog) renderLoop.lastLog = now;
        if (!renderLoop.frameCount) renderLoop.frameCount = 0;
        renderLoop.frameCount++;
        if (now - renderLoop.lastLog >= 1000) {
          console.log(`FPS: ${renderLoop.frameCount}`);
          renderLoop.frameCount = 0;
          renderLoop.lastLog = now;
        }

        // Feed the current video frame to MediaPipe.
        // detectForVideo() is synchronous — it returns results immediately.
        // The timestamp is required for the video running mode so MediaPipe
        // can optimize tracking between frames.
        const results = handLandmarker.detectForVideo(videoRef.current, now);

        // clear the canvas before drawing this frame
        ctx.clearRect(0, 0, 220, 160);

        // ── DRAW MIRRORED VIDEO ──────────────────────────────────────────
        // ctx.save() / ctx.restore() isolates transform changes.
        // Without save/restore, the flip would affect everything drawn after.
        ctx.save();
        ctx.translate(220, 0); // move origin to right edge
        ctx.scale(-1, 1); // flip horizontally (mirror)
        // now draw the video — it comes out mirrored, which feels natural
        // like looking in a mirror rather than at a camera
        ctx.drawImage(videoRef.current, 0, 0, 220, 160);
        ctx.restore(); // undo the transform so landmark drawing isn't affected

        if (results.landmarks.length > 0) {
          // results.landmarks is an array of hands, each hand is 21 {x,y,z} points
          // x and y are normalized 0-1 across the image width/height
          // z is depth relative to wrist (negative = closer to camera)
          const raw = results.landmarks[0]; // first (and only) hand

          // ── DRAW LANDMARKS ─────────────────────────────────────────────
          // MediaPipe coordinates are in the original (unflipped) video space.
          // We flipped the video display with ctx.scale(-1,1) above, so if we
          // drew landmarks using raw coordinates they'd appear on the wrong side.
          // Fix: manually mirror x by doing (1 - x) before drawing.
          // This is ONLY for display — we use raw coordinates for the model.
          const flipped = raw.map((lm) => ({ ...lm, x: 1 - lm.x }));
          drawingUtils.drawConnectors(
            flipped,
            HandLandmarker.HAND_CONNECTIONS, // which landmark pairs to connect
            { color: "rgb(72, 255, 224)", lineWidth: 1 },
          );
          drawingUtils.drawLandmarks(flipped, {
            color: "#ffffff",
            lineWidth: 1,
            radius: 2,
          });

          // ── GESTURE INFERENCE ───────────────────────────────────────────
          if (onnxSessionRef.current) {
            // Step 1: normalize landmarks (same as training preprocessing)
            // This converts absolute coordinates → wrist-relative, scale-normalized
            const vector = normalizeLandmarks(raw); // returns 63 numbers

            // Step 2: wrap in a typed array with explicit shape.
            // onnxruntime-web requires Float32Array, not a plain JS array.
            // Shape [1, 63] = 1 sample with 63 features.
            // The model processes batches, so even single samples need the batch dim.
            const tensor = new ort.Tensor(
              "float32",
              Float32Array.from(vector),
              [1, 63],
            );

            // Step 3: run the model.
            // feeds maps input name → tensor. The input name comes from
            // the ONNX export — we logged session.inputNames above to verify.
            const feeds = { [session.inputNames[0]]: tensor };
            const outputData = await onnxSessionRef.current.run(feeds);

            // Step 4: extract probabilities.
            // The model has two outputs (from convert.py with zipmap:False):
            //   outputNames[0]: int64 tensor — predicted class index
            //   outputNames[1]: float tensor — 5 probabilities, one per gesture
            // We use the probabilities because they give us confidence too.
            const probs = Array.from(outputData[session.outputNames[1]].data);
            // probs = [0.97, 0.01, 0.01, 0.005, 0.005] for example
            // each index corresponds to a gesture in GESTURE_CLASSES (alphabetical)

            // find which gesture has the highest probability
            const maxIdx = probs.indexOf(Math.max(...probs));
            const maxProb = probs[maxIdx];
            const label = GESTURE_CLASSES[maxIdx]; // map index → name

            // only show confident predictions — below 75% show "uncertain"
            // this prevents flickering when the model is between two gestures
            if (maxProb > 0.75) {
              setGestureLabel(label);
              setConfidence(Math.round(maxProb * 100));
              handleGestureAction(label, raw, now);
            } else {
              setGestureLabel("uncertain");
              setConfidence(Math.round(maxProb * 100));
              handleGestureAction("idle", raw, now); // treat uncertain as idle
            }
          }

          // ── DATA COLLECTION ─────────────────────────────────────────────
          // If the user is holding the record button, capture a sample.
          // We throttle to SAMPLE_RATE_MS so we don't collect too fast.
          if (
            recordingRef.current &&
            now - lastSampleTime.current > SAMPLE_RATE_MS
          ) {
            lastSampleTime.current = now;
            // store RAW (unflipped) landmarks — model doesn't care about display
            const vector = raw.flatMap((lm) => [lm.x, lm.y, lm.z]);
            // read selected gesture from DOM to avoid stale closure
            const label = document.getElementById("gesture-select")?.value;
            if (label) {
              samplesRef.current.push({ vector, label });
              // update counts display (the only state update in the loop)
              setCounts((prev) => ({ ...prev, [label]: prev[label] + 1 }));
            }
          }
        } else {
          // no hand detected — reset to idle
          setGestureLabel("idle");
          setConfidence(0);
          pinchStartTime.current = null;
          pinchProgressRef.current = null;
          gestureStateRef.current = "idle";
          gestureBuffer.current = [];
        }

        // schedule next frame — this is what makes the loop continuous
        animationRef.current = requestAnimationFrame(renderLoop);
      }
      console.log("Starting render loop...");
      renderLoop(); // kick off the loop
      console.log("Swype overlay is active.");
      console.log(
        "pointer = move cursor",
        "\n",
        "pinch = click (hold for 1.5s)",
        "\n",
        "two fingers = scroll",
        "\n",
        "palm = zoom (move hand to pan)",
      );
    }

    start();

    // cleanup function — runs when active becomes false or component unmounts
    return () => {
      console.log("Stopping Swype overlay and releasing resources...");
      cancelAnimationFrame(animationRef.current); // stop the loop
      const stream = videoRef.current?.srcObject;
      if (stream) stream.getTracks().forEach((t) => t.stop()); // release camera
      handLandmarkerRef.current = null;
      onnxSessionRef.current = null;
      console.log("Resources released.");
    };
  }, [active]); // only re-run this effect when active changes

  // ── GESTURE ACTION HANDLER ───────────────────────────────────────────────────
  // Called every frame with the current gesture label and raw landmarks.
  // Implements the state machine: gesture label → state → action.
  //
  // State machine diagram:
  //   idle    → (pointer detected) → pointer mode → move cursor
  //   idle    → (scroll detected)  → scroll mode  → track Δy → fire scroll
  //   idle    → (palm detected)    → palm mode    → track Δx/Δy → pan
  //   any     → (idle detected)    → idle         → stop all actions
  //
  // Why a state machine instead of just acting directly on the label?
  // Raw predictions flicker — the model might say "scroll" for 2 frames then
  // "pointer" then "scroll" again. Acting directly on each frame would cause
  // erratic behavior. The state machine adds inertia: you have to hold a gesture
  // for HOLD_FRAMES frames before it switches mode, preventing flicker.

  const HOLD_FRAMES = 6; // frames a gesture must be stable before state switches
  const gestureBuffer = useRef([]); // rolling window of recent predictions

  function handleGestureAction(label, rawLandmarks, now) {
    // ── SMOOTHING ──────────────────────────────────────────────────────────
    // Exponential moving average on wrist position.
    // Instead of jumping to the new position each frame, we blend:
    // newSmoothed = 0.8 * oldSmoothed + 0.2 * newRaw
    // Higher first number = more smoothing but more lag.
    // Lower first number = more responsive but jitterier.
    const wrist = rawLandmarks[8];
    const ALPHA = 0.2;
    smoothedPos.current = {
      x: smoothedPos.current.x * (1 - ALPHA) + wrist.x * ALPHA,
      y: smoothedPos.current.y * (1 - ALPHA) + wrist.y * ALPHA,
    };

    // ── STATE MACHINE ──────────────────────────────────────────────────────
    // Add current label to buffer, keep only last HOLD_FRAMES entries
    gestureBuffer.current.push(label);
    if (gestureBuffer.current.length > HOLD_FRAMES) {
      gestureBuffer.current.shift(); // remove oldest
    }

    // only switch state if ALL recent frames agree on the same gesture
    // this is the stability filter — prevents rapid state flipping
    const allSame = gestureBuffer.current.every((l) => l === label);
    if (allSame && gestureBuffer.current.length === HOLD_FRAMES) {
      gestureStateRef.current = label;
    }

    const state = gestureStateRef.current;
    const pos = smoothedPos.current;

    // ── POINTER MODE ───────────────────────────────────────────────────────
    // Map wrist position in camera space (0-1) to screen coordinates.
    // Camera x is mirrored (1 - x) to match the flipped display.
    // We add padding on edges (10% each side) so you don't need to move
    // your hand to the very edge of frame to reach screen edges.
    if (state === "pointer") {
      const PADDING = 0.1;
      const screenX =
        ((1 - pos.x - PADDING) / (1 - PADDING * 2)) * window.innerWidth;
      const screenY =
        ((pos.y - PADDING) / (1 - PADDING * 2)) * window.innerHeight;

      // move the cursor div
      if (cursorControlRef?.current) {
        cursorControlRef.current.x = Math.max(
          0,
          Math.min(window.innerWidth, screenX),
        );
        cursorControlRef.current.y = Math.max(
          0,
          Math.min(window.innerHeight, screenY),
        );
      }
    }

    if (state === "pinch") {
      if (pinchStartTime.current === null) {
        pinchStartTime.current = now;
      } else {
        const elapsed = now - pinchStartTime.current;
        const CLICK_DELAY = 1500; // hold for 1.5 sec before click fires

        if (elapsed >= CLICK_DELAY) {
          const cx = cursorControlRef?.current?.x ?? mouse.x;
          const cy = cursorControlRef?.current?.y ?? mouse.y;
          const target = document.elementFromPoint(cx, cy);
          if (target) target.click();

          pinchStartTime.current = null;
          pinchProgressRef.current = null;
          return;
        }

        if (pinchProgressRef?.current !== undefined) {
          pinchProgressRef.current = elapsed / CLICK_DELAY;
        }
      }
    } else {
      pinchStartTime.current = null;
      pinchProgressRef.current = null;
    }

    // ── SCROLL MODE ────────────────────────────────────────────────────────
    // Track how much the wrist moved vertically since last frame (delta).
    // Moving hand UP = negative delta = scroll up (page goes down, content goes up)
    // Moving hand DOWN = positive delta = scroll down
    // Multiply by sensitivity to control scroll speed.
    if (state === "scroll") {
      const deltaY = pos.y - prevPos.current.y;
      const SCROLL_SENSITIVITY = 1200;

      // find the element currently under the cursor
      const cx = cursorControlRef?.current?.x ?? window.innerWidth / 2;
      const cy = cursorControlRef?.current?.y ?? window.innerHeight / 2;

      // walk up the DOM from the element under cursor until we find
      // something that can actually scroll — this works on any page/component
      let el = document.elementFromPoint(cx, cy);
      while (el && el !== document.body) {
        const { overflowY } = getComputedStyle(el);
        const canScroll =
          (overflowY === "auto" || overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight;
        if (canScroll) break;
        el = el.parentElement;
      }

      // scroll whichever element we found, fall back to window
      const target = el && el !== document.body ? el : window;
      target.scrollBy({
        top: deltaY * SCROLL_SENSITIVITY,
        behavior: "auto",
      });
    }

    // ── PALM MODE (pan) ────────────────────────────────────────────────────
    // Similar to scroll but fires both X and Y.
    // For now this scrolls the page in both axes — later you can hook this
    // into the Three.js camera for actual viewport panning.
    if (state === "palm") {
      const deltaX = pos.x - prevPos.current.x;
      const deltaY = pos.y - prevPos.current.y;
      const PAN_SENSITIVITY = 1000;

      window.scrollBy({
        left: deltaX * PAN_SENSITIVITY,
        top: deltaY * PAN_SENSITIVITY,
        behavior: "auto",
      });
    }

    // store position for next frame's delta calculation
    prevPos.current = { x: pos.x, y: pos.y };
  }

  // ── CSV EXPORT ─────────────────────────────────────────────────────────────
  // Converts collected samples to CSV format and triggers a file download.
  // The CSV has 64 columns: x0,y0,z0,...,x20,y20,z20,label
  // This is the training data format expected by train.py
  function downloadCSV() {
    if (samplesRef.current.length === 0) return;
    const header = [
      ...Array.from({ length: 21 }, (_, i) => [
        `x${i}`,
        `y${i}`,
        `z${i}`,
      ]).flat(),
      "label",
    ].join(",");
    const rows = samplesRef.current.map(({ vector, label }) =>
      [...vector, label].join(","),
    );
    const csv = [header, ...rows].join("\n");
    // Blob creates an in-memory file, createObjectURL gives it a temporary URL
    // so we can trigger a download by clicking a programmatically created link
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "swype_training_data1.csv";
    a.click();
    URL.revokeObjectURL(url); // free the memory
    console.log(
      "CSV downloaded. Use this file to retrain a model with swype_train.py",
    );
  }

  function clearData() {
    samplesRef.current = [];
    setCounts(Object.fromEntries(GESTURES.map((g) => [g, 0])));
  }

  const totalSamples = Object.values(counts).reduce((a, b) => a + b, 0);

  // ── RENDER ─────────────────────────────────────────────────────────────────
  // The overlay is a fixed-position div in the bottom-right corner with
  // zIndex: 9999 so it floats above everything including the Three.js canvas.
  // It contains:
  //   - a hidden <video> element receiving the webcam stream
  //   - a <canvas> displaying the mirrored video + landmark skeleton
  //   - a status bar showing current gesture label + confidence
  //   - optionally the data collection panel (select + record + counts + export)
  //   - a toggle button to activate/deactivate the whole system
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        fontFamily: "monospace",
      }}
    >
      {active && (
        <div
          style={{
            background: "rgba(11, 11, 11, 0.92)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            width: "220px",
          }}
        >
          {/* hidden video — receives webcam stream, used as input by MediaPipe */}
          <video ref={videoRef} style={{ display: "none" }} playsInline muted />

          {/* canvas — what the user actually sees: mirrored video + skeleton */}
          <canvas
            ref={canvasRef}
            style={{ display: "block", width: "220px", height: "160px" }}
          />

          {/* status bar */}
          <div
            style={{
              padding: "6px 10px",
              display: "flex",
              justifyContent: "space-between",
              color: "rgba(255,255,255,0.35)",
              fontSize: "11px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              style={{
                color:
                  gestureLabel === "idle" || gestureLabel === "uncertain"
                    ? "rgba(255,255,255,0.3)"
                    : "#50dfa6",
                filter:
                  gestureLabel !== "idle" && gestureLabel !== "uncertain"
                    ? "drop-shadow(0px 0px 4px rgb(107, 196, 181))"
                    : "none",
              }}
            >
              ⬤ {gestureLabel}
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>
              {confidence > 0 ? `${confidence}%` : ""}
            </span>
            {/* toggle between preview and data collection modes ---- remove and switch modes by comment code below */}
            {/* <span
              style={{ cursor: "pointer", opacity: 0.5 }}
              onClick={() =>
                setMode(mode === "preview" ? "collect" : "preview")
              }
            >
              {mode === "preview" ? "collect →" : "← preview"}
            </span> */}
          </div>

          {/* data collection panel — only visible in collect mode */}
          {mode === "collect" && (
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* gesture selector */}
              <select
                id="gesture-select"
                value={selectedGesture}
                onChange={(e) => setSelectedGesture(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  borderRadius: "6px",
                  padding: "5px 8px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  width: "100%",
                }}
              >
                {GESTURES.map((g) => (
                  <option key={g} value={g} style={{ background: "#1a1a1a" }}>
                    {g} ({counts[g]})
                  </option>
                ))}
              </select>

              {/* hold to record — uses mouse/touch down+up to toggle recording */}
              <button
                onMouseDown={() => setRecording(true)}
                onMouseUp={() => setRecording(false)}
                onMouseLeave={() => setRecording(false)}
                onTouchStart={() => setRecording(true)}
                onTouchEnd={() => setRecording(false)}
                style={{
                  background: recording
                    ? "rgba(255, 80, 80, 0.2)"
                    : "rgba(255,255,255,0.05)",
                  border: `1px solid ${recording ? "rgba(255,80,80,0.5)" : "rgba(255,255,255,0.12)"}`,
                  color: recording ? "#ff5050" : "rgba(255,255,255,0.6)",
                  borderRadius: "6px",
                  padding: "7px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                  userSelect: "none",
                }}
              >
                {recording ? "● recording..." : "hold to record"}
              </button>

              {/* sample counts per gesture — turns green at 200 */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                {GESTURES.map((g) => (
                  <div
                    key={g}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                      color:
                        counts[g] >= 200 ? "#50dfa6" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    <span>{g}</span>
                    <span>
                      {counts[g]} {counts[g] >= 200 ? "✓" : `/ 200`}
                    </span>
                  </div>
                ))}
              </div>

              {/* export and clear buttons */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={downloadCSV}
                  disabled={totalSamples === 0}
                  style={{
                    flex: 1,
                    background:
                      totalSamples > 0
                        ? "rgba(80, 223, 166, 0.1)"
                        : "rgba(255,255,255,0.03)",
                    border: `1px solid ${totalSamples > 0 ? "rgba(80,223,166,0.3)" : "rgba(255,255,255,0.08)"}`,
                    color:
                      totalSamples > 0 ? "#50dfa6" : "rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    padding: "6px",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    cursor: totalSamples > 0 ? "pointer" : "default",
                  }}
                >
                  export {totalSamples > 0 ? `(${totalSamples})` : ""}
                </button>
                <button
                  onClick={clearData}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.25)",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    cursor: "pointer",
                  }}
                >
                  clear
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* main toggle button */}
      <button
        onClick={() => setActive((a) => !a)}
        style={{
          background: active
            ? "rgba(0, 255, 213, 0.07)"
            : "rgba(255, 255, 255, 0.06)",
          border: `1px solid ${active ? "rgba(0, 255, 234, 0.21)" : "rgba(255,255,255,0.12)"}`,
          color: active ? "#00ffbfd7" : "rgba(255,255,255,0.5)",
          borderRadius: "8px",
          padding: "8px 18px",
          fontSize: "12px",
          fontFamily: "monospace",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = active
            ? "rgba(0, 255, 213, 0.1)"
            : "rgba(255, 255, 255, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = active
            ? "rgba(0, 255, 213, 0.07)"
            : "rgba(255, 255, 255, 0.06)";
        }}
      >
        {active ? "Swype ON" : "Swype OFF"}
      </button>
    </div>
  );
}
