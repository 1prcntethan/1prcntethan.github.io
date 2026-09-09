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
          <button
            className="wings-story-close"
            onClick={() => { setVisible(false); onExit(); }}
          >
            back
          </button>

          {/* WINGS-flavored build story content */}
          <div className="wings-navbar">
            <div className="wings-logo">logo</div>
            <div className="wings-github">github</div>
            <div className="wings-live">live</div>
          </div>

          <div className="wings-landing">welcome to WINGS</div>

          <div className="wings-content"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}