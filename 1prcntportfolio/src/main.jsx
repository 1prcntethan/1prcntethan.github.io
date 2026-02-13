import { createRoot } from "react-dom/client";
import React from "react";
import { motion } from "framer-motion";
function MotionDiv() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
      style={{
        position: "absolute",
        top: 30,
        left: 30,
        width: 100,
        height: 100,
        backgroundColor: "gray",
        borderRadius: 20,
        color: "white",
      }}
      whileHover={{
        boxShadow: "0px 0px 10px 2px rgba(255,255,255,0.5)",
      }}
    >
      hello world!
    </motion.div>
  );
}

const domNode = document.getElementById("motion-div");
const root = createRoot(domNode);
root.render(<MotionDiv />);
