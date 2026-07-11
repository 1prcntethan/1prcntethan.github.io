import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Laptop from "./components/laptop.jsx";
import "./developer.css";

export default function Developer() {
  const [developerVisible] = useState(true);

  return (
    <AnimatePresence>
      {developerVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
          }}
        >
          <Laptop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}