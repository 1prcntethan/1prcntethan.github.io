import Navbar from "../components/navbar";
import "./tutorials.css";
import LineDivider from "../components/line-divider";
import TutorialListHP from "../components/hp-tutorial-list";
import TutorialListVP from "../components/vp-tutorial-list";
import TutorialListHPL from "../components/hpl-tutorial-list";
import TutorialListVPL from "../components/vpl-tutorial-list";
import TutorialListL from "../components/legs-tutorial-list";

export function Tutorials() {
    return (
        <>
          <Navbar />
          <div class="tutorial-header">
            Here is the full list of (almost) all common calisthenics skills. This list will split the skills into their respective categories and list them in order from easiest to hardest. Progressions and difficulty level can be found on the skill’s page or by looking at the skill tree.
          </div>
          <LineDivider />
          <br />
          <TutorialListHP />
          <br />
          <LineDivider />
          <br />
          <TutorialListVP />
          <br />
          <LineDivider />
          <br />
          <TutorialListHPL />
          <br />
          <LineDivider />
          <br />
          <TutorialListVPL />
          <br />
          <LineDivider />
          <br />
          <TutorialListL />


        </>
    )
}