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

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.4,
  });

  const y = useTransform(smoothProgress, [0, 1], ["10%", "-10%"]);
  const scale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(smoothProgress, [0, 1], [0.4, 1]);

  const y1 = useTransform(smoothProgress, [0, 0.2], ["0%", "-50%"]);
  const scale1 = useTransform(smoothProgress, [0, 0.2], [0.96, 1]);
  const opacity1 = useTransform(smoothProgress, [0, 0.2], [1, 0.4]);

  const y2 = useTransform(smoothProgress, [0.2, 0.4], ["50%", "-50%"]);
  const scale2 = useTransform(smoothProgress, [0.2, 0.4], [0.96, 1]);
  const opacity2 = useTransform(smoothProgress, [0.2, 0.4], [1, 0.4]);
  
  return (
    <AnimatePresence>
      {portfolioVisible && (
        <motion.div
          className="portfolio-container"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          ref={containerRef}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            zIndex: 10,
          }}
        >
          <motion.div
            className="portfolio-section"
            style={{
              y: y1,
              scale: scale1,
              opacity: opacity1,
            }}
          >
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
          <motion.div
            className="portfolio-section"
            style={{
              y: y2,
              scale: scale2,
              opacity: opacity2,
            }}
          >
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
          <motion.div className="portfolio-section">projects</motion.div>
          <motion.div className="portfolio-section">
            experience education
          </motion.div>
          <motion.div className="portfolio-section">contact</motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
