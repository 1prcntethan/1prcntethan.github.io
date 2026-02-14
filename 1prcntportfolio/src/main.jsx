import { createRoot } from "react-dom/client";
import React from "react";
import { motion } from "framer-motion";

function getElements() {
  const hero = document.getElementById("hero");
  const landing = document.getElementById("landing");
  const loading = document.getElementById("loading");
}

getElements();
hero.style.visibility = "hidden";
loading.style.visibility = "hidden";

export function loadHero() {

  getElements();

  const timeout1 = setTimeout(() => {
    loading.style.visibility = "visible";
  }, 1600);

  console.log("loading hero...");

  const timeout2 = setTimeout(() => {
    landing.style.visibility = "hidden";
    loading.style.visibility = "hidden";
    hero.style.visibility = "visible";
    hero.style.opacity = 0;
    fadeInHero();
  }, 4500);
}

function fadeInHero() {
  let opacity = 0;
  hero.style.opacity = opacity;

  const heroOpacityInterval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(heroOpacityInterval); // Stop the interval when opacity reaches 1
    } else {
      opacity += 0.05; // Increment by a small value for smoothness
      hero.style.opacity = opacity;
    }
  }, 50);
}
