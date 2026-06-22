// GithubContributions.jsx
import React from "react";
import { useEffect, useState } from "react";

export default function GithubContributions({ username }) {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );

        const data = await res.json();

        // Flatten contribution days
        const days = data.contributions.flatMap(
          (week) => week.contributionDays
        );

        setContributions(days.slice(-140)); // last ~20 weeks
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [username]);

  return (
    <div className="github-container">
      <div className="github-header">
        <span>Github Activity</span>
      </div>

      <div className="github-grid">
        {contributions.map((day, i) => (
          <div
            key={i}
            className="contribution-box"
            style={{
              opacity:
                day.contributionCount === 0
                  ? 0.15
                  : Math.min(
                      0.3 + day.contributionCount / 15,
                      1
                    ),
            }}
          />
        ))}
      </div>
    </div>
  );
}