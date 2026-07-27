import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loading.css";
import { useEffect } from "react";


export default function Loading() {
  const [loadingVisible, setLoadingVisible] = useState(true);


  return (
    <AnimatePresence>
      {loadingVisible && (
        <motion.div
          className="loading-title"
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
          <div className="loading-title">loading...</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}