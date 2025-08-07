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
      <SkillHero title="bodyweight squat" identifier="bw-squat" />
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
              <p>High Strain Areas: Knees</p>
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
                    Start in a standing position with your feet slightly wider than shoulder-width apart.
                  </li>
                  <li>
                    Engage your core and lower your body into a squat, keeping your chest up and knees over your toes.
                  </li>
                  <li>
                    Sink down until your thighs are parallel to the ground or lower, if comfortable.
                  </li>
                  <li>
                    Press back up through your heels to return to the starting position.
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
        name4="Split Squat"
        name5="Pistol Squat"
        link1="#"
        link2="#"
        link3="/tutorials/squat"
        link4="#"
        link5="#"
        svg1="NA"
        svg2="NA"
        svg3="bw-squat"
        svg4="split-squat"
        svg5="pistol-squat"
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
                <li>Feet are slightly wider than shoulder width apart</li>
                <li>Feet are pointed slightly outward</li>
                <li>Back is straight, chest is up and open</li>
                <li>Knees remain over the toes</li>
                <li>Keep the back straight, and avoid excessive arching or rounding</li>
                <li>Arms are extended in front of the body, crossed, or at the sides</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Feet are too far or close together</li>
                <li>Toes or heels lifting off the ground</li>
                <li>Arched or rounded back</li>
                <li>Excessive forward lean</li>
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
