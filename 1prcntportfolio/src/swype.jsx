import React, { useEffect, useRef, useState } from "react";
import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";

const GESTURES = ["idle", "pointer", "scroll", "pinch", "palm"];
const SAMPLE_RATE_MS = 100; // capture 10 samples/sec while holding

export default function Swype() {
  const [active, setActive] = useState(false);
  const [gestureLabel, setGestureLabel] = useState("idle");
  const [mode, setMode] = useState("preview"); // "preview" | "collect"

  const [selectedGesture, setSelectedGesture] = useState(GESTURES[0]);
  const [recording, setRecording] = useState(false);
  const [counts, setCounts] = useState(
    Object.fromEntries(GESTURES.map((g) => [g, 0]))
  );

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const handLandmarkerRef = useRef(null);
  const animationRef = useRef(null);

  // stored samples: [{ landmarks: [63 floats], label: string }]
  const samplesRef = useRef([]);
  const recordingRef = useRef(false);
  const lastSampleTime = useRef(0);
  const currentLandmarksRef = useRef(null); // latest frame's landmarks

  // keep recordingRef in sync with state (accessible inside rAF loop)
  useEffect(() => {
    recordingRef.current = recording;
  }, [recording]);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animationRef.current);
      const stream = videoRef.current?.srcObject;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      handLandmarkerRef.current = null;
      return;
    }

    async function start() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );

      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });

      handLandmarkerRef.current = handLandmarker;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 220, height: 160 },
      });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = 220;
      canvas.height = 160;
      canvas.style.width = "220px";
      canvas.style.height = "160px";

      const drawingUtils = new DrawingUtils(ctx);

      function renderLoop() {
        const now = performance.now();
        const results = handLandmarker.detectForVideo(videoRef.current, now);

        const displayW = 220;
        const displayH = 160;

        ctx.clearRect(0, 0, displayW, displayH);

        // mirrored video
        ctx.save();
        ctx.translate(displayW, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoRef.current, 0, 0, displayW, displayH);
        ctx.restore();

        if (results.landmarks.length > 0) {
          const raw = results.landmarks[0];

          // flip x for display
          const flipped = raw.map((lm) => ({ ...lm, x: 1 - lm.x }));
          drawingUtils.drawConnectors(flipped, HandLandmarker.HAND_CONNECTIONS, {
            color: "rgb(72, 255, 224)",
            lineWidth: 1,
          });
          drawingUtils.drawLandmarks(flipped, {
            color: "#ffffff",
            lineWidth: 1,
            radius: 2,
          });

          setGestureLabel("tracking");

          // store latest raw landmarks for recording
          // we use RAW (not flipped) — model doesn't care about display orientation
          currentLandmarksRef.current = raw;

          // capture sample if holding record
          if (recordingRef.current && now - lastSampleTime.current > SAMPLE_RATE_MS) {
            lastSampleTime.current = now;

            // flatten 21 landmarks × 3 coords into 63 numbers
            const vector = raw.flatMap((lm) => [lm.x, lm.y, lm.z]);

            // get current selected gesture from DOM to avoid stale closure
            const label = document.getElementById("gesture-select")?.value;
            if (label) {
              samplesRef.current.push({ vector, label });
              setCounts((prev) => ({ ...prev, [label]: prev[label] + 1 }));
            }
          }
        } else {
          setGestureLabel("idle");
          currentLandmarksRef.current = null;
        }

        animationRef.current = requestAnimationFrame(renderLoop);
      }

      renderLoop();
    }

    start();

    return () => {
      cancelAnimationFrame(animationRef.current);
      const stream = videoRef.current?.srcObject;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      handLandmarkerRef.current = null;
    };
  }, [active]);

  function downloadCSV() {
    if (samplesRef.current.length === 0) return;

    // header: x0,y0,z0,x1,y1,z1,...,x20,y20,z20,label
    const header = [
      ...Array.from({ length: 21 }, (_, i) => [`x${i}`, `y${i}`, `z${i}`]).flat(),
      "label",
    ].join(",");

    const rows = samplesRef.current.map(
      ({ vector, label }) => [...vector, label].join(",")
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "gesture_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearData() {
    samplesRef.current = [];
    setCounts(Object.fromEntries(GESTURES.map((g) => [g, 0])));
  }

  const totalSamples = Object.values(counts).reduce((a, b) => a + b, 0);

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
          <video ref={videoRef} style={{ display: "none" }} playsInline muted />
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
                color: gestureLabel === "idle" ? "rgba(255,255,255,0.3)" : "#50dfa6",
              }}
            >
              ⬤ {gestureLabel}
            </span>
            <span
              style={{ cursor: "pointer", opacity: 0.5 }}
              onClick={() => setMode(mode === "preview" ? "collect" : "preview")}
            >
              {mode === "preview" ? "collect →" : "← preview"}
            </span>
          </div>

          {/* collect mode panel */}
          {mode === "collect" && (
            <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>

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

              {/* hold to record button */}
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

              {/* counts per gesture */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {GESTURES.map((g) => (
                  <div
                    key={g}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                      color: counts[g] >= 200 ? "#50dfa6" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    <span>{g}</span>
                    <span>{counts[g]} {counts[g] >= 200 ? "✓" : `/ 200`}</span>
                  </div>
                ))}
              </div>

              {/* actions */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={downloadCSV}
                  disabled={totalSamples === 0}
                  style={{
                    flex: 1,
                    background: totalSamples > 0 ? "rgba(80, 223, 166, 0.1)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${totalSamples > 0 ? "rgba(80,223,166,0.3)" : "rgba(255,255,255,0.08)"}`,
                    color: totalSamples > 0 ? "#50dfa6" : "rgba(255,255,255,0.2)",
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

      <button
        onClick={() => setActive((a) => !a)}
        style={{
          background: active ? "rgba(0, 255, 213, 0.07)" : "rgba(255, 255, 255, 0.06)",
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
      >
        {active ? "Swype ON" : "Swype OFF"}
      </button>
    </div>
  );
}