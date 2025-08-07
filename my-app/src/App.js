import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
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
import { PseudoPU } from './pages/tutorials/pseudopu';
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
import { HSPU } from './pages/tutorials/hspu';
import { AssistedInvRow } from './pages/tutorials/assistedinvrow';
import { InvertedRow } from './pages/tutorials/invertedrow';
import { TuckFL } from './pages/tutorials/tuckfl';
import { TuckFLRow } from './pages/tutorials/tuckflrow';
import { PikeFL } from './pages/tutorials/pikefl';
import { PikeFLRow } from './pages/tutorials/pikeflrow';
import { AdvTuckFL } from './pages/tutorials/advtuckfl';
import { Pullup } from './pages/tutorials/pullup';
import { SuperAdvTuckFL } from './pages/tutorials/superadvtuckfl';
import { AdvTuckFLRow } from './pages/tutorials/advtuckflrow';
import { StraddleFL } from './pages/tutorials/straddlefl';
import { Deadhang } from './pages/tutorials/deadhang';
import { ActiveHang } from './pages/tutorials/activehang';
import { AssistPullup } from './pages/tutorials/assistedpullup';
import { SkillVis } from './pages/skillvis';
import { SkillTree } from './pages/skilltree';
import { BeginnerGuide } from './pages/guides/beginnerguide';
import { ChestPullup } from './pages/tutorials/chestpullup';
import { WaistPullup } from './pages/tutorials/waistpullup';
import { StraddleFLRow } from './pages/tutorials/straddleflrow';
import { HalflayFL } from './pages/tutorials/halflayfl';
import { FrontLever } from './pages/tutorials/frontlever';
import { MuscleUp } from './pages/tutorials/muscleup';
import { Incomplete } from './pages/incomplete';
import { HowTo } from './pages/howto';
import { About } from './pages/about';
import { Disclaimer } from './pages/disclaimer';
import { ProgOverload } from './pages/guides/progoverload';
import { PushRmp } from './pages/guides/pushroadmap';
import { HandstandGuide } from './pages/guides/handstandguide';
import { AdvTuckPLPU } from './pages/tutorials/advtuckplpu';
import { SuperAdvTuckPL } from './pages/tutorials/superadvtuckpl';
import { Situp } from './pages/tutorials/situp';
import { HollowBody } from './pages/tutorials/hollowbody';
import { LsitComp } from './pages/tutorials/lsitcomp';
import { Lsit } from './pages/tutorials/lsit';
import { DragonFlag } from './pages/tutorials/dragonflag';
import { ScapulaPullup } from './pages/tutorials/scapulapullup';
import { NinetyDegHold } from './pages/tutorials/ninetydeghold';
import { Squat } from './pages/tutorials/squat';


function App() {
  return (
    <HashRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/terminology" element={<Terminology/>}/>
        <Route path="/skilltree" element={<SkillTree/>}/>
        <Route path="/skillvis" element={<SkillVis/>}/>
        <Route path="/howtouseguide" element={<HowTo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
        <Route path="/tutorials/incomplete" element={<Incomplete/>}/>

        <Route path="/training/beginnerguide" element={<BeginnerGuide/>}/>
        <Route path="/training/progoverload" element={<ProgOverload/>}/>
        <Route path="/training/pushrmp" element={<PushRmp/>}/>
        <Route path="/training/handstandguide" element={<HandstandGuide/>}/>

        <Route path="/tutorials/pushup" element={<Pushup/>}/>
        <Route path="/tutorials/assistedpu" element={<AssistPu/>}/>
        <Route path="/tutorials/dip" element={<Dip/>}/>
        <Route path="/tutorials/elbowlever" element={<ElbowLever/>}/>
        <Route path="/tutorials/planchelean" element={<PlancheLean/>}/>
        <Route path="/tutorials/pseudopu" element={<PseudoPU/>}/>
        <Route path="/tutorials/tuckpl" element={<TuckPL/>}/>
        <Route path="/tutorials/tuckplpu" element={<TuckPLPU/>}/>
        <Route path="/tutorials/advtuckpl" element={<AdvTuckPL/>}/>
        <Route path="/tutorials/advtuckplpu" element={<AdvTuckPLPU/>}/>
        <Route path="/tutorials/superadvtuckpl" element={<SuperAdvTuckPL/>}/>
        <Route path="/tutorials/ninetydeghold" element={<NinetyDegHold/>}/>


        <Route path="/tutorials/pikepu" element={<PikePU/>}/>
        <Route path="/tutorials/crowpose" element={<CrowPose/>}/>
        <Route path="/tutorials/assistedhs" element={<AssistedHS/>}/>
        <Route path="/tutorials/handstand" element={<Handstand/>}/>
        <Route path="/tutorials/elevatedpikepu" element={<ElevatedPikePU/>}/>
        <Route path="/tutorials/bas" element={<BentArmStand/>}/>
        <Route path="/tutorials/assistedhspu" element={<AssistedHSPU/>}/>
        <Route path="/tutorials/hspu" element={<HSPU/>}/>

        <Route path="/tutorials/assistedinvrow" element={<AssistedInvRow/>}/>
        <Route path="/tutorials/invertedrow" element={<InvertedRow/>}/>
        <Route path="/tutorials/tuckfl" element={<TuckFL/>}/>
        <Route path="/tutorials/tuckflrow" element={<TuckFLRow/>}/>
        <Route path="/tutorials/pikefl" element={<PikeFL/>}/>
        <Route path="/tutorials/pikeflrow" element={<PikeFLRow/>}/>
        <Route path="/tutorials/advtuckfl" element={<AdvTuckFL/>}/>
        <Route path="/tutorials/superadvtuckfl" element={<SuperAdvTuckFL/>}/>
        <Route path="/tutorials/advtuckflrow" element={<AdvTuckFLRow/>}/>
        <Route path="/tutorials/straddlefl" element={<StraddleFL/>}/>
        <Route path="/tutorials/straddleflrow" element={<StraddleFLRow/>}/>
        <Route path="/tutorials/halflayfl" element={<HalflayFL/>}/>
        <Route path="/tutorials/fullfl" element={<FrontLever/>}/>

        <Route path="/tutorials/deadhang" element={<Deadhang/>}/>
        <Route path="/tutorials/activehang" element={<ActiveHang/>}/>
        <Route path="/tutorials/assistpullup" element={<AssistPullup/>}/>
        <Route path="/tutorials/pullup" element={<Pullup/>}/>
        <Route path="/tutorials/scapulapullup" element={<ScapulaPullup/>}/>
        <Route path="/tutorials/chestpullup" element={<ChestPullup/>}/>
        <Route path="/tutorials/waistpullup" element={<WaistPullup/>}/>
        <Route path="/tutorials/muscleup" element={<MuscleUp/>}/>

        <Route path="/tutorials/situp" element={<Situp/>}/>
        <Route path="/tutorials/hollowbody" element={<HollowBody/>}/>
        <Route path="/tutorials/lsitcompression" element={<LsitComp/>}/>
        <Route path="/tutorials/lsit" element={<Lsit/>}/>
        <Route path="/tutorials/dragonflag" element={<DragonFlag/>}/>

        <Route path="/tutorials/squat" element={<Squat/>}/>

      </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}

function ScrollToTop({children}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
}

export default App;
