import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function Squat() {
  return (
    <>
      <Navbar />
      <SkillHero title="squat" identifier="squat" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: F
              </Link>
              <br />
              <p>Targeted Muscles: Quads, Glutes, Hamstrings, Lower Back</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Squat is a fundamental movement pattern that builds lower body
              strength and stability. It is the foundation for advanced lower
              body exercises and other movements that require leg strength.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Squat
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Lie down on your back with your knees bent and feet flat on
                    the ground.
                  </li>
                  <li>Place your hands behind your head, elbows wide.</li>
                  <li>
                    Engage your core and lift your upper body towards your
                    knees, keeping your feet and butt on the ground.
                  </li>
                  <li>
                    Once your body is upright, lower your upper body back down
                    to the starting position while maintaining control.
                  </li>
                  <li>
                    The exercise can be made easier by crossing your arms over
                    your chest.
                  </li>
                  <li>
                    To use this exercise effectively, perform these at a
                    difficulty where you can do 4-8 reps for strength, or 8-12
                    for hypertrophy/volume.
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
            <p>Recommended Main Exercises: N/A</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="N/A"
        name2="N/A"
        name3="Squat"
        name4="L-sit Compression"
        name5="L-sit"
        link1="#"
        link2="#"
        link3="/tutorials/squat"
        link4="/tutorials/lsitcompression"
        link5="/tutorials/lsit"
        svg1="NA"
        svg2="NA"
        svg3="situp"
        svg4="l-sit-comp"
        svg5="l-sit"
      />
      <TutorialReturn />
      {svgDivider.get("2")}
      <div class="technique-form-container">
        <div class="technique-form">
          <div class="skill-section-title">technique & form</div>
          <div class="technique-form-content">
            <div>
              Good Form Cues:
              <ul>
                <li>Chin is neutral</li>
                <li>Core is engaged</li>
                <li>Feet and butt are on the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Arms are pulling on neck/head</li>
                <li>Feet lifting off the ground</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="squat" />
      <Footer />
    </>
  );
}
