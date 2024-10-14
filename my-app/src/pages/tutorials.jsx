import Navbar from "../components/navbar";
import "./tutorials.css";
import LineDivider from "../components/line-divider";
import TutorialList from "../components/tutorial-list";

export function Tutorials() {
    return (
        <>
            <Navbar />
            <div class="tutorial-header">
              Here is the full list of (almost) all common calisthenics skills. This list will split the skills into their respective categories and list them in order from easiest to hardest. Progressions and difficulty level can be found on the skill’s page or by looking at the skill tree.
            </div>
            <LineDivider />
            <br />
            <div class="skill-list-container">
              <div class="skill-list-header">
                horizontal push
              </div>
              <div class="skill-list-header">
                vertical push
              </div>
              <div class="skill-list-header">
                horizontal pull
              </div>
              <div class="skill-list-header">
                vertical pull
              </div>
              <div class="skill-list-header">
                legs
              </div>
            </div>
            <TutorialList />
        </>
    )
}