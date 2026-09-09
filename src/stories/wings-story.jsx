import "./wings-story.css"; // scoped to this page only
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WingsStory({ onExit }) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="wings-story-container" // styled entirely in wings-story.css
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="wings-navbar">
            <button
              className="wings-story-close"
              onClick={() => {
                setVisible(false);
                onExit();
              }}
            >
              back
            </button>
            <div className="wings-nav-right">
              <a
                href="https://github.com/wings"
                className="wings-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                href="https://wings.live"
                className="wings-live"
                target="_blank"
                rel="noopener noreferrer"
              >
                live
              </a>
            </div>
          </div>
          <div className="wings-beta-disc">
            <div className="scroll">
              <div className="beta-disclaimer-text">
                welcome to the wings project page where you can see the entire
                build process of wings. (wip) welcome to the wings project page
                where you can see the entire build process of wings. (wip)
                welcome to the wings project page where you can see the entire
                build process of wings. (wip)
              </div>
            </div>
          </div>

          <div className="wings-landing">
            welcome to <span className="wings-title">wings.</span>
          </div>

          <div className="wings-content-twocol wings-image-right">
            <div className="wings-text">
              {/* <div className="wings-section-label">origins_</div> */}
              <p>
                WINGS started before I could really call myself a developer. I
                was teaching myself HTML and CSS from scratch, fighting with
                flexbox until layouts stopped breaking every time I resized the
                window. I didn't set out to build an app — I wanted a
                calisthenics resource that didn't exist yet, something that
                actually laid out skill progressions the way I wished someone
                had shown me.
              </p>
              <p>
                Before writing a line of the real thing, I mocked up pages in
                Figma — partly to plan the UI, partly because I didn't trust
                myself to design and code at the same time yet. Calisthenics
                itself came first, though: training at home, chasing skills I
                saw online with no real structure, which is exactly the gap
                WINGS was built to fill.
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wings-origin-mockup.png"
                alt="Early WINGS Figma mockup"
              />
            </div>
          </div>

          <div className="wings-content-twocol wings-image-left">
            <div className="wings-image">
              <img src="/wings-origin-2.png" alt="" />
            </div>
            <div className="wings-text">
              <div className="wings-section-label">next section_</div>
              <p>Next paragraph goes here.</p>
            </div>
          </div>

          <div className="wings-content-center">
            <p>Text-only section — no image, so it's centered.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
