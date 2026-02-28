import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            position: "absolute",
            width: "100%",
            height: "100vh",
            background: "#0b0b0b",
            zIndex: 10,
            display: "flex",
          }}
        >
          <motion.div className="portfolio-section">
            <motion.div className="section-title">
              a designing, developing chameleon.
            </motion.div>
            <motion.div className="section-content">
              I build functional, efficient systems that adapt to users and
              streamline their digital experience. My work mirrors my skill,
              changing styles, functionality, and aesthetic to fit the
              environment, blending intuitive design and technical expertise.
            </motion.div>
          </motion.div>
          <motion.div className="portfolio-section">
            <motion.div className="section-title">
              skills & expertise
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
              <motion.div className="skills-column">
                <div className="skill-title">concepts & strengths</div>
                <ul className="skill-list">
                  <li>design-first development</li>
                  <li>systems thinking</li>
                  <li>clean, scale-able code</li>
                  <li>problem solving through iterative experimentaion</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
