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
import { CrowPose } from './pages/tutorials/crowpose';
import { AssistedHS } from './pages/tutorials/assistedhs';
import { Handstand } from './pages/tutorials/handstand';
import { ElevatedPikePU } from './pages/tutorials/elevatedpikepu';
import { BentArmStand } from './pages/tutorials/bentarmstand';
import { AssistedHSPU } from './pages/tutorials/assistedhspu';
import { AssistedInvRow } from './pages/tutorials/assistedinvrow';
import { InvertedRow } from './pages/tutorials/invertedrow';
import { TuckFL } from './pages/tutorials/tuckfl';
import { TuckFLRow } from './pages/tutorials/tuckflrow';
import { PikeFL } from './pages/tutorials/pikefl';
import { PikeFLRow } from './pages/tutorials/pikeflrow';
import { AdvTuckFL } from './pages/tutorials/advtuckfl';
import { Pullup } from './pages/tutorials/pullup';


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
        <Route path="/tutorials/crowpose" element={<CrowPose/>}/>
        <Route path="/tutorials/assistedhs" element={<AssistedHS/>}/>
        <Route path="/tutorials/handstand" element={<Handstand/>}/>
        <Route path="/tutorials/elevatedpikepu" element={<ElevatedPikePU/>}/>
        <Route path="/tutorials/bas" element={<BentArmStand/>}/>
        <Route path="/tutorials/assistedhspu" element={<AssistedHSPU/>}/>

        <Route path="/tutorials/assistedinvrow" element={<AssistedInvRow/>}/>
        <Route path="/tutorials/invertedrow" element={<InvertedRow/>}/>
        <Route path="/tutorials/tuckfl" element={<TuckFL/>}/>
        <Route path="/tutorials/tuckflrow" element={<TuckFLRow/>}/>
        <Route path="/tutorials/pikefl" element={<PikeFL/>}/>
        <Route path="/tutorials/pikeflrow" element={<PikeFLRow/>}/>
        <Route path="/tutorials/advtuckfl" element={<AdvTuckFL/>}/>

        <Route path="/tutorials/pullup" element={<Pullup/>}/>

      </Routes>
    </Router>
  );
}

export default App;
