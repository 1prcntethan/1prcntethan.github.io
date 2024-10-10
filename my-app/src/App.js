import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "./components/navbar"
import HomepageHero from "./components/homepage-hero"
import LineDivider from "./components/line-divider"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomepageHero />
      <LineDivider />
    </div>
  );
}

export default App;
