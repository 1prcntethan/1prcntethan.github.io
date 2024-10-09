import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "./components/navbar"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
