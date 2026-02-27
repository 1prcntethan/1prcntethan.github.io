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
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#0b0b0b",
            zIndex: 10,
            color: "white",
          }}
        >
          portfolio page
        </motion.div>
      )}
    </AnimatePresence>
  );
}
