import { createRoot } from "react-dom/client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";import { useState } from "react";
import Landing from "./landing.jsx";
import Loading from "./loading.jsx";
import Hero from "./hero.jsx";
import Developer from "./developer.jsx";

function App() {
  const [page, setPage] = useState("landing");

  function loadHero() {
    setPage("loading");

    setTimeout(() => {
      setPage("hero");
    }, 2000);
  }

  function showDeveloper() {
    setTimeout(() => {
      setPage("developer");
    }, 1000);
  }

  function renderPage() {
    switch (page) {
      case "landing":
        return <Landing onStart={loadHero} />;
      case "loading":
        return <Loading />;
      case "hero":
        return <Hero onDeveloper={showDeveloper} />;
      case "developer":
        return <Developer />;
      default:
        return null;
    }
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(<App />);
