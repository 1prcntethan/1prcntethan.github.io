import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import { Homepage } from './pages/home';
import { Training } from './pages/training';
import { Tutorials } from './pages/tutorials';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
      </Routes>
    </Router>
  );
}

export default App;
