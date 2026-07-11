import React, { useEffect, useState } from "react";
import Window from "./window.jsx";
import { APPS } from "./apps.jsx";
import "./desktop.css";

function formatTime() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${suffix}`;
}

export default function Desktop({ onBack }) {
  const [openApps, setOpenApps] = useState([]);
  const [clock, setClock] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setClock(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  function openApp(id) {
    setOpenApps((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }
  function closeApp(id) {
    setOpenApps((prev) => prev.filter((a) => a !== id));
  }
  function focusApp(id) {
    setOpenApps((prev) => [...prev.filter((a) => a !== id), id]);
  }

  return (
    <div className="desktop">
      <div className="menu-bar">
        <button className="back-pill" onClick={onBack}>
          ← laptop
        </button>
        <span className="menu-wordmark">1% / developer.world</span>
        <span className="menu-clock">{clock}</span>
      </div>

      <div className="icon-grid">
        {APPS.map((app) => (
          <button
            key={app.id}
            className="app-icon"
            onClick={() => openApp(app.id)}
          >
            <span className="app-icon-glyph">{app.icon}</span>
            <span className="app-icon-label">{app.name}</span>
          </button>
        ))}
      </div>

      {openApps.map((id, i) => {
        const app = APPS.find((a) => a.id === id);
        if (!app) return null;
        return (
          <Window
            key={id}
            app={app}
            zIndex={20 + i}
            onClose={() => closeApp(id)}
            onFocus={() => focusApp(id)}
          />
        );
      })}
    </div>
  );
}
