import { useEffect, useRef } from "react";
import React from "react";

export default function Cursor({ controlRef, pinchProgressRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // resize canvas to fill window
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // actual mouse position — updates instantly on every mousemove
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    if (controlRef) controlRef.current = mouse;

    // ball position — lags behind mouse, this is what gets drawn
    // the gap between mouse and ball creates the elastic stretch effect
    const ball = { x: mouse.x, y: mouse.y };
    let isHovering = false;

    // trail is an array of recent ball positions
    // each entry: { x, y, age } where age counts up each frame
    const trail = [];
    const TRAIL_LENGTH = 38; // how many trail dots
    const LERP = 0.08; // how fast ball follows mouse (0=no movement, 1=instant)
    // lower = more elastic lag, higher = tighter follow

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    // hide the default cursor globally
    document.body.style.cursor = "none";

    let animId;

    function draw() {
      // clear canvas each frame — we want a clean draw not accumulation
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── LERP BALL TOWARD MOUSE ──────────────────────────────────────────
      // lerp = linear interpolation: move LERP% of the remaining distance each frame
      // this creates the springy follow — ball accelerates toward mouse and
      // decelerates as it gets close, creating natural-feeling lag
      ball.x += (mouse.x - ball.x) * LERP;
      ball.y += (mouse.y - ball.y) * LERP;

      // ── UPDATE TRAIL ────────────────────────────────────────────────────
      // push current ball position to front of trail
      trail.unshift({ x: ball.x, y: ball.y });
      // trim to max length — oldest positions fall off the end
      if (trail.length > TRAIL_LENGTH) trail.pop();

      // ── DRAW TRAIL ──────────────────────────────────────────────────────
      if (trail.length > 1) {
        // ── SHARP LINE (tapered) ─────────────────────────────────────────────
        // draw segment by segment so each can have its own width
        for (let i = 0; i < trail.length - 1; i++) {
          const progress = i / trail.length; // 0 at head, 1 at tail

          // ↓ ADJUST LINE WIDTH HERE — first number is max width at cursor head
          const lineWidth = 8 * (1 - progress);

          // ↓ ADJUST LINE OPACITY HERE — trail brightness falloff
          const opacity = 0.8 * (1 - progress);

          ctx.beginPath();
          ctx.moveTo(trail[i].x, trail[i].y);

          // curve toward midpoint of next segment for smoothness
          if (i < trail.length - 2) {
            const midX = (trail[i + 1].x + trail[i + 2].x) / 2;
            const midY = (trail[i + 1].y + trail[i + 2].y) / 2;
            ctx.quadraticCurveTo(trail[i + 1].x, trail[i + 1].y, midX, midY);
          } else {
            ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
          }

          ctx.strokeStyle = `rgba(198, 250, 240, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }
        

        // ── GLOW LAYER (tapered) ─────────────────────────────────────────────
        // second pass, same segments, wider + softer for the bloom effect
        for (let i = 0; i < trail.length - 1; i++) {
          const progress = i / trail.length;

          // ↓ ADJUST GLOW WIDTH HERE — first number is max glow spread at head
          const glowWidth = 14 * (1 - progress);

          // ↓ ADJUST GLOW OPACITY HERE — lower = subtler bloom
          const glowOpacity = 0.12 * (1 - progress);

          ctx.beginPath();
          ctx.moveTo(trail[i].x, trail[i].y);

          if (i < trail.length - 2) {
            const midX = (trail[i + 1].x + trail[i + 2].x) / 2;
            const midY = (trail[i + 1].y + trail[i + 2].y) / 2;
            ctx.quadraticCurveTo(trail[i + 1].x, trail[i + 1].y, midX, midY);
          } else {
            ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
          }

          ctx.strokeStyle = `rgba(72, 255, 224, ${glowOpacity})`;
          ctx.lineWidth = glowWidth;
          ctx.stroke();
        }
      }

      const elementUnder = document.elementFromPoint(mouse.x, mouse.y);
      const isHovering = elementUnder;
      // ── CALCULATE STRETCH ───────────────────────────────────────────────
      // distance between ball (lagged) and mouse (actual)
      // when moving fast, this gap is large → stretch more
      // when still, gap is ~0 → draw a perfect circle
      const dx = mouse.x - ball.x;
      const dy = mouse.y - ball.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // angle of movement direction — we rotate the ellipse to align with this
      const angle = Math.atan2(dy, dx);
      let BASE_RADIUS = 9;
      // stretch amount: longer axis grows with distance, capped at 2.5x
      const TARGET_RADIUS = isHovering ? 25 : 9; // ← adjust hover size here
      BASE_RADIUS += (TARGET_RADIUS - BASE_RADIUS) * 0.12; // smooth transition
      const stretchX = BASE_RADIUS + Math.min(dist * 0.55, BASE_RADIUS * 1.5);
      const stretchY = BASE_RADIUS * Math.max(0.4, 1 - dist * 0.018);
      // stretchX = length along movement direction
      // stretchY = width perpendicular to movement (squishes as it stretches)

      // ── DRAW STRETCHED BALL ─────────────────────────────────────────────
      // we draw at the ball position (lagged), elongated toward the mouse
      // ctx.ellipse needs center, radiusX, radiusY, rotation, start, end angles
      ctx.save();
      ctx.translate(ball.x, ball.y);
      ctx.rotate(angle);

      // outer glow — large soft gradient
      const glowRadius = stretchX * 1;
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
      glow.addColorStop(0, "rgba(155, 245, 230, 0.25)");
      glow.addColorStop(0.4, "rgba(72, 255, 224, 0.08)");
      glow.addColorStop(1, "rgba(72, 255, 224, 0)");

      ctx.beginPath();
      ctx.ellipse(0, 0, glowRadius, glowRadius * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // inner bright core — the actual stretched ellipse
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, stretchX);
      core.addColorStop(0, "rgb(217, 255, 247)"); // bright white-teal center
      core.addColorStop(0.4, "rgb(170, 255, 238)");
      core.addColorStop(1, "rgba(72, 255, 224, 0)");

      ctx.beginPath();
      ctx.ellipse(0, 0, stretchX, stretchY, 0, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();

      ctx.restore();
      animId = requestAnimationFrame(draw);
    }

    draw();

    const progress = pinchProgressRef?.current;
    if (progress !== null && progress !== undefined) {
      const MAX_RING = 40;
      const MIN_RING = BASE_RADIUS + 4;

      const ringRadius = MAX_RING - (MAX_RING - MIN_RING) * progress
      const ringOpacity = 0.3 + (progress * 0.6)

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(72, 255, 224, ${ringOpacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.body.style.cursor = ""; // restore default cursor on unmount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", 
        zIndex: 99999, 
      }}
    />
  );
}
