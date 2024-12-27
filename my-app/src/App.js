import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import { Homepage } from './pages/home';
import { Training } from './pages/training';
import { Tutorials } from './pages/tutorials';
import { Terminology } from './pages/terminology';
import { AssistPu } from './pages/tutorials/assistpu';
import { Pushup } from './pages/tutorials/pushup';
import { Dip } from './pages/tutorials/dip';
import { ElbowLever } from './pages/tutorials/elbowlever';
import { PlancheLean } from './pages/tutorials/planchelean';
import { PsuedoPU } from './pages/tutorials/psuedopu';
import { TuckPL } from './pages/tutorials/tuckpl';
import { AdvTuckPL } from './pages/tutorials/advtuckpl';
import { TuckPLPU } from './pages/tutorials/tuckplpu';
import { PikePU } from './pages/tutorials/pikepu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/terminology" element={<Terminology/>}/>


        <Route path="/tutorials/pushup" element={<Pushup/>}/>
        <Route path="/tutorials/assistedpu" element={<AssistPu/>}/>
        <Route path="/tutorials/dip" element={<Dip/>}/>
        <Route path="/tutorials/elbowlever" element={<ElbowLever/>}/>
        <Route path="/tutorials/planchelean" element={<PlancheLean/>}/>
        <Route path="/tutorials/psuedopu" element={<PsuedoPU/>}/>
        <Route path="/tutorials/tuckpl" element={<TuckPL/>}/>
        <Route path="/tutorials/tuckplpu" element={<TuckPLPU/>}/>
        <Route path="/tutorials/advtuckpl" element={<AdvTuckPL/>}/>


        <Route path="/tutorials/pikepu" element={<PikePU/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;
