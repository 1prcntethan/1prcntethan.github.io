import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function ScapulaPullup() {
  return (
    <>
      <Navbar />
      <SkillHero title="scapula pull-up" identifier="scapula-pull-up" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: D
              </Link>
              <br />
              <p>Targeted Muscles: Lower traps, rhomboids, serratus anterior</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Scapula Pull-Up is a fundamental exercise used to develop
              scapular strength and awareness. It is primarily focused on
              creating retraction and depression of the scapula, which is
              essential for front lever training.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Scapula Pull-up
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a deadhang position with your hands shoulder-width
                    apart.
                  </li>
                  <li>
                    Without bending your elbows, pull yourself up by pulling
                    your shoulder blades down and together.
                  </li>
                  <li>
                    Think about opening your chest and bringing your shoulder
                    blades together.
                  </li>
                  <li>
                    To use this exercise effectively, perform these at a
                    difficulty where you can do 6-12 reps with good form, to
                    emphasize correct activation.
                  </li>
                </ul>

                <label className="read-more-label" for="skill-read-more">
                  Show less
                </label>
              </div>
              <label className="read-more-label" for="skill-read-more">
                Read more...
              </label>
            </div>
          </div>

          <div className="recommended-info">
            <p>Recommended Main Exercises: Active Hang, Deadhang</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Deadhang"
        name2="Pull-up"
        name3="Scapula Pull-up"
        name4="Chest Pull-up"
        name5="Muscle-Up"
        link1="/tutorials/deadhang"
        link2="/tutorials/pullup"
        link3="/tutorials/scapulapullup"
        link4="/tutorials/chestpullup"
        link5="/tutorials/muscleup"
        svg1="deadhang"
        svg2="pull-up"
        svg3="scapula-pull-up"
        svg4="chest-pull-up"
        svg5="muscle-up"
      />
      <TutorialReturn />
      {svgDivider.get("2")}
      <div class="technique-form-container">
        <div class="technique-form">
          <div class="skill-section-title">technique & form</div>
          <div class="technique-form-content">
            <div class="technique-form-text">
              Good Form Cues:
              <ul>
                <li>Open chest</li>
                <li>Chin gets above bar</li>
                <li>Scapula is retracted and depressed</li>
                <li>Arms are straight</li>
                <li>Hands are (usually) placed shoulder-width apart</li>
              </ul>
            </div>
            <div class="technique-form-text">
              Bad Form Cues:
              <ul>
                <li>Elevated Scapula</li>
                <li>Bent elbows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="scapula-pull-up" />
      <Footer />
    </>
  );
}
