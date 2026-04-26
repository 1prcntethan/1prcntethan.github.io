import { createRoot } from "react-dom/client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Landing from "./landing.jsx";
import Loading from "./loading.jsx";
import Hero from "./hero.jsx";
import Developer from "./developer.jsx";
import Portfolio from "./portfolio.jsx";
import Swype from "./swype.jsx";
import Cursor from "./cursor.jsx";

function App() {
  const [page, setPage] = useState("landing");
  const prevPage = useRef(page);
  const cursorControlRef = useRef(null);

  useEffect(() => {
    prevPage.current = page;
  }, [page]);

  function loadHero() {
    setPage("loading");

    setTimeout(() => {
      setPage("hero");
    }, 2000);
  }

  function showHero() {
    setTimeout(() => {
      setPage("hero");
    }, 500);
  }


  function showDeveloper() {
    setTimeout(() => {
      setPage("developer");
    }, 1000);
  }

  function showPortfolio() {
    setPage("portfolio");
  }

  function TransitionVariants() {
    if (page === "portfolio") {
      return {
        initial: { y: "100%" },
        animate: { y: "0%" },
        exit: { y: "100%" },
        transition: { duration: 1, ease: "easeInOut" },
      };
    }

    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1, ease: "easeInOut" },
    };
  }

  const animation = TransitionVariants();

  function renderPage() {
    switch (page) {
      case "landing":
        return <Landing onStart={loadHero} />;
      case "loading":
        return <Loading />;
      case "hero":
        return <Hero onDeveloper={showDeveloper} onPortfolio={showPortfolio} />;
      case "developer":
        return <Developer />;
      case "portfolio":
        return <Portfolio onHero={showHero} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Cursor controlRef={cursorControlRef}/>
      <Swype cursorControlRef={cursorControlRef}/>
      <AnimatePresence>
        <motion.div
          key={page}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
