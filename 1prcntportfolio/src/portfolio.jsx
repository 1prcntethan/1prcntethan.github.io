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
        // <motion.div
        //   className="portfolio-container"
        //   initial={{ y: "100%" }}
        //   animate={{ y: "0%" }}
        //   exit={{ y: "100%" }}
        //   transition={{ duration: 1.5, ease: "easeInOut" }}
        //   style={{
        //     zIndex: 10,
        //     color: "white",
        //   }}
        // >
        //   <motion.section className="portfolio-section">hero</motion.section>
        //   <motion.section className="portfolio-section">skills</motion.section>
        //   <motion.section className="portfolio-section">
        //     projects
        //   </motion.section>
        //   <motion.section className="portfolio-section">
        //     expereince
        //   </motion.section>
        //   {/* <motion.section className="portfolio-section">contact</motion.section> */}
        // </motion.div>
        <div class="portfolio-container">
          <section class="portfolio-section">Intro</section>
          <section class="portfolio-section">Skills</section>
          <section class="portfolio-section">Projects</section>
          <section class="portfolio-section">Education</section>
          <section class="portfolio-section">Contact</section>
        </div>
      )}
    </AnimatePresence>
  );
}

// <motion.div className="section-title">
//               a designing, developing chameleon.
//             </motion.div>
//             <motion.div className="section-content">
//               In the constantly evolving world of tech, I believe adaptability is key.
//               <br />
//               <br />
//               Thus, I strive for the ability to meld styles, functionality,
//               and aesthetic to the environment, blending intuitive design
//               and technical expertise.
//               <br />
//               <br />
//               idk
//             </motion.div>

// <motion.div className="section-title">
//               skills & expertise
//             </motion.div>
//             <motion.div className="section-content">
//               <motion.div className="skills-column">
//                 <div className="skill-title">core technologies</div>
//                 <ul className="skill-list">
//                   <li>React</li>
//                   <li>JavaScript</li>
//                   <li>HTML/CSS</li>
//                   <li>Java</li>
//                   <li>Python</li>
//                 </ul>
//               </motion.div>
//               <motion.div className="skills-column">
//                 <div className="skill-title">tools</div>
//                 <ul className="skill-list">
//                   <li>Tailwind</li>
//                   <li>Firebase</li>
//                   <li>Three.js</li>
//                   <li>Vite</li>
//                   <li>Git/Github</li>
//                 </ul>
//               </motion.div>
//               <motion.div className="skills-column">
//                 <div className="skill-title">concepts & strengths</div>
//                 <ul className="skill-list">
//                   <li>design-first development</li>
//                   <li>systems thinking</li>
//                   <li>clean, scale-able code</li>
//                   <li>problem solving through iterative experimentaion</li>
//                 </ul>
//               </motion.div>
//             </motion.div>

// <div className="section-title">projects</div>
// <div className="section-title">experience & education</div>
// <div className="section-title">contact</div>
