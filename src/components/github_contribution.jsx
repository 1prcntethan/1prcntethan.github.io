import React from "react";
import { useEffect, useState } from "react";
import "./github_contribution.css";

const MONTH_LABELS = [
  { label: "Jan", weekIndex: 0 },
  { label: "Apr", weekIndex: 13 },
  { label: "Jul", weekIndex: 26 },
  { label: "Oct", weekIndex: 39 },
];

export default function GitHubHeatmap({ username = "1prcntethan" }) {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setWeeks(d?.contributions ?? []);
      })
      .catch((err) => console.error("Heatmap fetch failed:", err));
  }, [username]);

  const getLevel = (count) => {
    if (count === 0) return "level-0";
    if (count <= 3) return "level-1";
    if (count <= 7) return "level-2";
    if (count <= 12) return "level-3";
    return "level-4";
  };

  const groupedWeeks = [];
  for (let i = 0; i < weeks.length; i += 7) {
    groupedWeeks.push(weeks.slice(i, i + 7));
  }

  const monthLabels = [0, 13, 26, 39]
    .map((wi) => {
      const week = groupedWeeks[wi];
      const firstDay = week?.find((d) => d);
      if (!firstDay) return null;
      const label = new Date(firstDay.date).toLocaleString("default", { month: "short" });
      return { label, weekIndex: wi };
    })
    .filter(Boolean);

  return (
    <div className="heatmap-wrapper">
      <p className="heatmap-label">github activity_</p>

      <div className="heatmap-body">
        <div className="heatmap-months">
          {groupedWeeks.map((_, wi) => {
            const month = monthLabels.find((m) => m.weekIndex === wi);
            return (
              <div key={wi} className="month-slot">
                {month ? (
                  <span className="month-text">{month.label}</span>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="heatmap-grid">
          {groupedWeeks.map((week, wi) => (
            <div key={wi} className="heatmap-week">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`heatmap-cell ${getLevel(day.count)}`}
                  title={`${day.date}: ${day.count} contributions`}
                  onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove("hovered")
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="heatmap-legend">
        <span className="legend-label">less</span>
        <div className="legend-cell level-0" />
        <div className="legend-cell level-1" />
        <div className="legend-cell level-2" />
        <div className="legend-cell level-3" />
        <div className="legend-cell level-4" />
        <span className="legend-label">more</span>
      </div>
    </div>
  );
}
