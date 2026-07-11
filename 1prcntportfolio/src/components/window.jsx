import React from "react";

export default function Window({ app, zIndex, onClose, onFocus }) {
  return (
    <div className="app-overlay" style={{ zIndex }} onMouseDown={onFocus}>
      <div className="app-overlay-scrim" onClick={onClose} />

      <div className="app-detail">
        <div className="app-detail-topbar">
          <button className="app-detail-close" onClick={onClose}>
            ← back
          </button>
          <div className="app-detail-heading">
            <span className="app-detail-name">{app.name}</span>
            <span className="app-detail-tagline">{app.tagline}</span>
          </div>
          <div className="app-detail-stack-inline">
            {app.stack.map((tech) => (
              <span className="stack-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="app-detail-scroll">
          <div className="app-detail-body">
            <div className="app-detail-media">
              {app.media ? (
                <img src={app.media} alt={`${app.name} preview`} />
              ) : (
                <div className="app-detail-media-placeholder">
                  <span>media coming soon</span>
                </div>
              )}
            </div>

            <div className="app-detail-info">
              <p className="app-detail-description">{app.description}</p>

              {app.stats.length > 0 && (
                <div className="os-window-stats">
                  {app.stats.map((s) => (
                    <div className="stat-box" key={s.label}>
                      <span className="stat-value">{s.value}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {(app.github || app.live) && (
                <div className="os-window-links">
                  {app.github && (
                    <a href={app.github} target="_blank" rel="noreferrer">
                      github ↗
                    </a>
                  )}
                  {app.live && (
                    <a href={app.live} target="_blank" rel="noreferrer">
                      live ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {app.journey?.length > 0 && (
            <div className="app-detail-journey">
              <h3>the build</h3>
              <div className="journey-list">
                {app.journey.map((step, i) => (
                  <div className="journey-step" key={i}>
                    <span className="journey-stage">{step.stage}</span>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
