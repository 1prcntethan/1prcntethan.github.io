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
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", stiffness: 100 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          portfolio page
        </motion.div>
      )}
    </AnimatePresence>
  );
}
