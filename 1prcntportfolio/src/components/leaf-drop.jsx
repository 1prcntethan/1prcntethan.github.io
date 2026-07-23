// leaf-drop.jsx
import React from "react";
import "./leaf-drop.css";

export default function LeafDrop() {
  return (
    <div className="leaf-drop-visual">
      <svg viewBox="0 0 320 480" className="leaf-drop-svg" aria-hidden="true">
        <g transform="translate(20 0)">
          {/* Move the entire leaf system */}
          <g className="leaf-system" transform="translate(40 -105)">
            {/* stem */}{" "}
            <path d="M238,168 Q286,182 326,212" className="leaf-stem" />
            {/* leaf */}
            <path
              d="M111,270
            C135,209 194,175 238,168
            C213,225 181,277 111,270 Z"
              className="leaf-blade"
            />
            {/* midrib */}
            <line x1="111" y1="270" x2="238" y2="168" className="leaf-midrib" />
            {/* droplet */}
            <g className="droplet-group">
              <path
                d="M0,-7 C4,-2 4.5,3 0,7 C-4.5,3 -4,-2 0,-7 Z"
                className="droplet"
              />
            </g>
          </g>

          {/* still water */}
          {/* <ellipse cx="151" cy="428" rx="95" ry="13" className="pond-outline" /> */}
          <ellipse
            cx="151"
            cy="428"
            rx="14"
            ry="1"
            className="ripple ripple-1"
          />
          <ellipse
            cx="151"
            cy="428"
            rx="56"
            ry="4"
            className="ripple ripple-2"
          />
          <ellipse
            cx="151"
            cy="428"
            rx="112"
            ry="8"
            className="ripple ripple-3"
          />
        </g>
      </svg>
    </div>
  );
}
