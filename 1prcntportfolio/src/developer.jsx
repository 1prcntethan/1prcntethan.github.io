import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./developer.css";

export default function Developer() {

  const [developerVisible, setDeveloperVisible] = useState(true);

  return (
    <AnimatePresence>
      {developerVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", stiffness: 100 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0b0b0b",
            color: "white",
          }}
        >
          hello world
        </motion.div>
      )}
    </AnimatePresence>
  );
}
