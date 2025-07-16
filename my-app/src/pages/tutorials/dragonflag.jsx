import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function DragonFlag() {
  return (
    <>
      <Navbar />
      <SkillHero title="dragon flag" identifier="dragon-flag" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: C
              </Link>
              <br />
              <p>Targeted Muscles: Core</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Dragon Flag is an intermediate core exercise that requires
              significant strength and control in the core. It is one of the
              most effective ab exercises, and is often used as an accessory to
              front lever.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Dragon Flag
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Find a low, sturdy surface to hold onto, such as a bed, bench or pole anchored to the ground.
                  </li>
                  <li>
                    Lie on your back and brace your upper torso by holding onto the support with your hands.
                  </li>
                  <li>
                    Imagine pushing/pulling the object down to your hips, and kick your legs up towards the ceiling.
                  </li>
                  <li>
                    Keeping tension in your core, and bracing using the object, lower your legs and lower torso toward the ground.
                  </li>
                  <li>
                    Keep your body straight, and avoid excessively arching your back.
                  </li>
                  <li>
                    Get as close to the ground as possible, and hold the position for as long as you can.
                  </li>
                  <li>
                    To use this exercise effectively, perform these holds as
                    long as possible to practice core engagement and stability.
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
            <p>Recommended Main Exercises: Hollow Body Hold</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Sit-up"
        name2="Hollow Body Hold"
        name3="Dragon Flag"
        name4="N/A"
        name5="N/A"
        link1="/tutorials/situp"
        link2="/tutorials/hollowbody"
        link3="/tutorials/dragonflag"
        link4="#"
        link5="#"
        svg1="situp"
        svg2="hollowbody"
        svg3="dragon-flag"
        svg4=""
        svg5=""
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
                <li>Hips are open</li>
                <li>Core is engaged</li>
                <li>Body forms a straight line</li>
                <li>Upper back is pressed against the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Lower back is touching the ground</li>
                <li>Feet touching the ground</li>
                <li>Excessive arching in the back/body</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="dragon-flag" />
      <Footer />
    </>
  );
}
