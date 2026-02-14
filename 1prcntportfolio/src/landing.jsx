import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./landing.css";
import { loadHero } from "./main.jsx";

function Landing() {

  const [landingVisible, setLandingVisible] = useState(true);

  return (
    <AnimatePresence>
      {landingVisible && (
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
          <motion.div
            className="one"
            initial={{ top: "50%", left: "50%", opacity: 0, scale: 0 }}
            animate={{ top: "22%", left: "10%", opacity: 1, scale: 0.8 }}
            transition={{ duration: 2.5, type: "spring", stiffness: 70 }}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
            }}
          >
            <img src="/public/one.svg"></img>
          </motion.div>
          <motion.div
            className="circle-percent-1"
            initial={{ top: "50%", left: "50%", opacity: 0, scale: 0 }}
            animate={{
              top: "calc(22% - 30px)",
              left: "calc(10% + 115px)",
              opacity: 1,
              scale: 0.8,
            }}
            transition={{ duration: 2.5, type: "spring", stiffness: 80 }}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
            }}
          >
            <img src="/public/circlepercent.svg"></img>
          </motion.div>
          <motion.div
            className="rect-percent"
            initial={{ top: "50%", left: "50%", opacity: 0, scale: 0 }}
            animate={{
              top: "calc(22% - 28px)",
              left: "calc(10% + 137px)",
              opacity: 1,
              scale: 0.8,
            }}
            transition={{ duration: 2.5, type: "spring", stiffness: 90 }}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
            }}
          >
            <img src="/public/rectpercent.svg"></img>
          </motion.div>
          <motion.div
            className="circle-percent-2"
            initial={{ top: "50%", left: "50%", opacity: 0, scale: 0 }}
            animate={{
              top: "calc(22% + 98px)",
              left: "calc(10% + 206px)",
              opacity: 1,
              scale: 0.8,
            }}
            transition={{ duration: 2.5, type: "spring", stiffness: 110 }}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
            }}
          >
            <img src="/public/circlepercent.svg"></img>
          </motion.div>
          <motion.div
            className="name"
            initial={{ top: "50%", right: "50%", opacity: 0, scale: 0 }}
            animate={{ top: "20%", right: "13%", opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, type: "spring", stiffness: 70 }}
            style={{
              textShadow:
                "0px 0px 16px rgb(255,255,255), 0px 0px 32px rgb(255,255,255)",
            }}
          >
            ethan tay
          </motion.div>
          <motion.div
            className="go"
            initial={{ top: "50%", left: "50%", opacity: 0, scale: 0 }}
            animate={{ top: "60%", left: "67%", opacity: 1, scale: 1 }}
            transition={{
              duration: 2.5,
              type: "spring",
              stiffness: 110,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
            }}
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0px 0px 12px rgba(255, 255, 255, 1))",
              cursor: "pointer",
            }}
            onClick={() => {
                loadHero();
                setLandingVisible(false)
            }}
          >
            <img src="/go.svg"></img>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const domNode = document.getElementById("landing");
const root = createRoot(domNode);
root.render(<Landing />);
