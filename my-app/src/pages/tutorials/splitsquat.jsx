import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function SplitSquat() {
  return (
    <>
      <Navbar />
      <SkillHero title="split squat" identifier="split-squat" />
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
              <p>Targeted Muscles: Quads, Glutes, Hamstrings, Core</p>
              <p>High Strain Areas: Knees</p>
            </div>
            <div className="overview-explanation">
              The Split Squat is a fundamental movement pattern that builds lower body
              strength and stability. It is a slightly harder variation of the squat that
              requires more balance and coordination.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Split Squat
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a standing position with your feet split, with one foot forward and the other foot back.
                  </li>
                  <li>
                    Lower down to one knee, with your legs making 90 degree angles.
                  </li>
                  <li>
                    Your lower knee should be just above the ground, and your front knee should be over your toes.
                  </li>
                  <li>
                    Press back up, engaging your glutes to return to the starting position.
                  </li>
                  <li>
                    To use this exercise effectively, perform these at a
                    difficulty where you can do 4-8 reps for strength, or 8-12
                    for hypertrophy/volume. Remember to alternate legs.
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
            <p>Recommended Main Exercises: Bodyweight Squat</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Bodyweight Squat"
        name2="N/A"
        name3="Split Squat"
        name4="Bulgarian Split Squat"
        name5="Pistol Squat"
        link1="/tutorials/squat"
        link2="#"
        link3="/tutorials/splitsquat"
        link4="#"
        link5="#"
        svg1="bw-squat"
        svg2="NA"
        svg3="split-squat"
        svg4="#"
        svg5="#"
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
                <li>Feet are flat on the ground</li>
                <li>Feet are split, with one foot forward and the other foot back</li>
                <li>Shoulders are stacked over hips for balance</li>
                <li>Knees get to 90 degrees</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Toes or heels lifting off the ground</li>
                <li>Arched or rounded back</li>
                <li>Limited range of motion</li>
                <li>Weight shifting excessively forward or back</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="split-squat" />
      <Footer />
    </>
  );
}
