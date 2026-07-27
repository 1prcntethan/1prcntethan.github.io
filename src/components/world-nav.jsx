import React from "react";
import "./world-nav.css";

export default function WorldNav({ onExit, visible = true }) {
  return (
    <button
      className="world-nav-home"
      onClick={onExit}
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      aria-label="Back to home"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6 10v9h5v-5.5h2V19h5v-9" />
      </svg>
      <span>home</span>
    </button>
  );
}