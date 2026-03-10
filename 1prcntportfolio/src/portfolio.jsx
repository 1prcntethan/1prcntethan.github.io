import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const [portfolioVisible, setPortfolioVisible] = useState(true);

  return (
    <AnimatePresence>
      {portfolioVisible && (
        <motion.div
          className="portfolio-container"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            zIndex: 10,
            color: "white",
          }}
        >
          <motion.div className="fixed-visual">
            <div class="scroll-progress"></div>
            <div class="visual-container">
              <svg
                width="479"
                height="479"
                viewBox="0 0 479 479"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="rotate-svg"
              >
                <circle
                  cx="239.5"
                  cy="239.5"
                  r="20"
                  className="draw-circle center1"
                />
                <circle
                  cx="239.5"
                  cy="239.5"
                  r="28"
                  className="draw-circle center1"
                />
                <circle
                  cx="240"
                  cy="239"
                  r="76.5"
                  className="draw-circle center1"
                />
                <circle
                  cx="240"
                  cy="239"
                  r="85.5"
                  className="draw-circle center1"
                />

                <line
                  y1="-1.5"
                  x2="149"
                  y2="-1.5"
                  transform="matrix(1 0 0 -1 238 238)"
                  className="draw-line group1"
                />
                <circle
                  cx="386.5"
                  cy="239.5"
                  r="27"
                  className="draw-circle group1"
                />
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="20"
                  transform="matrix(1 0 0 -1 365 261)"
                  className="draw-circle group1"
                />

                <line
                  y1="-1.5"
                  x2="149"
                  y2="-1.5"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 239.709 237.588)"
                  className="draw-line group2"
                />
                <circle
                  cx="344"
                  cy="344"
                  r="26.5"
                  className="draw-circle group2"
                />
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="20"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 313.248 343.654)"
                  className="draw-circle group2"
                />

                <line
                  x1="239.5"
                  y1="239"
                  x2="239.5"
                  y2="388"
                  className="draw-line group3"
                />
                <circle
                  cx="239.5"
                  cy="387.5"
                  r="27"
                  className="draw-circle group3"
                />
                <circle
                  cx="239.5"
                  cy="387.5"
                  r="20"
                  transform="rotate(90 239.5 387.5)"
                  className="draw-circle group3"
                />

                <line
                  x1="240.063"
                  y1="239.356"
                  x2="134.704"
                  y2="344.714"
                  className="draw-line group4"
                />
                <circle
                  cx="135"
                  cy="344"
                  r="26.5"
                  className="draw-circle group4"
                />
                <circle
                  cx="135.057"
                  cy="344.361"
                  r="20"
                  transform="rotate(135 135.057 344.361)"
                  className="draw-circle group4"
                />

                <line
                  x1="240"
                  y1="239.5"
                  x2="91"
                  y2="239.5"
                  className="draw-line group5"
                />
                <circle
                  cx="91.5"
                  cy="239.5"
                  r="27"
                  className="draw-circle group5"
                />
                <circle
                  cx="91.5"
                  cy="239.5"
                  r="20"
                  transform="rotate(180 91.5 239.5)"
                  className="draw-circle group5"
                />

                <line
                  x1="240.063"
                  y1="240.063"
                  x2="134.704"
                  y2="134.704"
                  className="draw-line group6"
                />
                <circle
                  cx="135"
                  cy="135"
                  r="26.5"
                  className="draw-circle group6"
                />
                <circle
                  cx="135.057"
                  cy="135.057"
                  r="20"
                  transform="rotate(-135 135.057 135.057)"
                  className="draw-circle group6"
                />

                <line
                  y1="-1.5"
                  x2="149"
                  y2="-1.5"
                  transform="matrix(0 -1 -1 0 238 240)"
                  className="draw-line group7"
                />
                <circle
                  cx="239.5"
                  cy="91.5"
                  r="27"
                  className="draw-circle group7"
                />
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="20"
                  transform="matrix(0 -1 -1 0 261 113)"
                  className="draw-circle group7"
                />

                <line
                  y1="-1.5"
                  x2="149"
                  y2="-1.5"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 238.295 239.002)"
                  className="draw-line group8"
                />
                <circle
                  cx="344"
                  cy="135"
                  r="26.5"
                  transform="rotate(90 344 135)"
                  className="draw-circle group8"
                />
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="20"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 344.361 165.463)"
                  className="draw-circle group8"
                />
              </svg>
            </div>
          </motion.div>
          <motion.section className="intro-section">
            <div className="sixty-div">
              <motion.div
                className="section-title fade-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                a designing, developing{" "}
                <span className="rainbow-text">chameleon</span>.
              </motion.div>
              <motion.div
                className="section-content fade-right"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <div>
                  In the constantly evolving world of tech,{" "}
                  <span className="accent-text">adaptability</span> is key.
                </div>
                <div>
                  Thus, I strive for the ability to meld styles, functionality,
                  and aesthetic to the environment, blending{" "}
                  <span className="accent-text">intuitive design</span> and{" "}
                  <span className="accent-text">technical expertise</span>.
                </div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section className="portfolio-section">
            <motion.div className="sixty-div">
              <motion.div className="section-title">
                skills & expertise (more witty)
              </motion.div>
              <motion.div className="section-content">
                <motion.div className="skills-column">
                  <div className="skill-title">core technologies</div>
                  <ul className="skill-list">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </motion.div>
                <motion.div className="skills-column">
                  <div className="skill-title">tools</div>
                  <ul className="skill-list">
                    <li>Tailwind</li>
                    <li>Firebase</li>
                    <li>Three.js</li>
                    <li>Vite</li>
                    <li>Git/Github</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
          <motion.section className="portfolio-section">
            <motion.div className="section-title">projects</motion.div>
            <motion.div className="section-content">
              WINGS, adaptstudy, school lost & found?
            </motion.div>
          </motion.section>
          <motion.section className="portfolio-section">
            <motion.div className="section-title">experience</motion.div>
            <motion.div className="section-content">
              mtv, clark, bellevue
            </motion.div>
          </motion.section>
          <motion.section className="portfolio-section">contact</motion.section>
        </motion.div>
        // <div class="portfolio-container">
        //   <section class="portfolio-section">Intro</section>
        //   <section class="portfolio-section">Skills</section>
        //   <section class="portfolio-section">Projects</section>
        //   <section class="portfolio-section">Education</section>
        //   <section class="portfolio-section">Contact</section>
        // </div>
      )}
    </AnimatePresence>
  );
}
