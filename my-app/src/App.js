import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import { Homepage } from './pages/home';
import { Training } from './pages/training';
import { Tutorials } from './pages/tutorials';
import { Terminology } from './pages/terminology';
import { PlancheLean } from './pages/tutorials/planchelean';
import { Pushup } from './pages/tutorials/pushup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/terminology" element={<Terminology/>}/>


        <Route path="/tutorials/planchelean" element={<PlancheLean/>}/>

        <Route path="/tutorials/pushup" element={<Pushup/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
