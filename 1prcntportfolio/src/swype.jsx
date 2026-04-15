import React, { useEffect, useRef, useState } from "react";
import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";

export default function Swype() {
  const [active, setActive] = useState(false);
  const [gestureLabel, setGestureLabel] = useState("idle");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handLandmarkerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animationRef.current);
      handLandmarkerRef.current = null;
      return;
    }

    async function start() {
      // Load WASM + model
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
      );

      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });

      handLandmarkerRef.current = handLandmarker;

      // Start webcam
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 220, height: 160 },
      });

      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const dpr = window.devicePixelRatio || 1;

      canvas.width = 220 * dpr;
      canvas.height = 160 * dpr;

      canvas.style.width = "220px";
      canvas.style.height = "160px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const drawingUtils = new DrawingUtils(ctx);

      async function renderLoop() {
        const now = performance.now();

        const results = handLandmarker.detectForVideo(videoRef.current, now);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Mirror video
        ctx.save();
        // flip
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);

        // draw video
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        if (results.landmarks.length > 0) {
          for (const landmarks of results.landmarks) {
            drawingUtils.drawConnectors(
              landmarks,
              HandLandmarker.HAND_CONNECTIONS,
              {
                color: "rgb(72, 255, 224)",
                lineWidth: 1,
              },
            );
            drawingUtils.drawLandmarks(landmarks, {
              color: "#ffffff",
              lineWidth: 1,
              radius: 2,
            });
          }
          setGestureLabel("tracking");
        } else {
          setGestureLabel("idle");
        }
        ctx.restore();

        animationRef.current = requestAnimationFrame(renderLoop);
      }

      renderLoop();
    }

    start();

    return () => {
      cancelAnimationFrame(animationRef.current);

      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      handLandmarkerRef.current = null;
    };
  }, [active]);

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
            background: "rgba(11, 11, 11, 0.88)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            width: "220px",
            position: "relative",
          }}
        >
          <video ref={videoRef} style={{ display: "none" }} playsInline muted />

          <canvas
            ref={canvasRef}
            width={220}
            height={160}
            style={{ display: "block", width: "220px", height: "160px" }}
          />

          <div
            style={{
              padding: "8px 10px",
              display: "flex",
              justifyContent: "space-between",
              color: "rgba(255,255,255,0.45)",
              fontSize: "11px",
              filter:
                gestureLabel === "idle"
                  ? "none"
                  : "drop-shadow(0px 0px 4px rgb(107, 196, 181))",
            }}
          >
            <span>67%</span>
            <span
              style={{
                color:
                  gestureLabel === "idle" ? "rgba(255,255,255,0.3)" : "#50dfa6",
              }}
            >
              {gestureLabel}
            </span>
          </div>
        </div>
      )}

      <button
        onClick={() => setActive((a) => !a)}
        style={{
          background: active
            ? "rgba(0, 255, 213, 0.07)"
            : "rgba(255, 255, 255, 0.06)",
          border: `1px solid ${
            active ? "rgba(0, 255, 234, 0.21)" : "rgba(255,255,255,0.12)"
          }`,
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
