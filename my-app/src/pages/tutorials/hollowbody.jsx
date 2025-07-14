import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function HollowBody() {
  return (
    <>
      <Navbar />
      <SkillHero title="hollow body hold" identifier="hollowbody" />
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
              <p>Targeted Muscles: Core</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Hollow Body Hold is a base exercise used to build core strength and
              stability. It is a necessary foundation for advanced core
              exercises and other exercises that require core strength.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Hollow Body Hold
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Lie down on your back with your legs together and arms extended overhead.
                  </li>
                  <li>Engage your abs, lifting your legs a couple of inches off the ground.</li>
                  <li>
                    Lift your head and arms off the ground by a couple of inches.
                  </li>
                  <li>
                    During the exercise, your lower back should remain pressed against the ground the entire time.
                  </li>
                  <li>
                    The exercise can be made easier by bringing your arms to your chest, or bending your knees.
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
            <p>Recommended Main Exercises: Sit-up</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Sit-up"
        name2="N/A"
        name3="Hollow Body Hold"
        name4="L-sit Compression"
        name5="L-sit"
        link1="/tutorials/situp"
        link2="#"
        link3="/tutorials/hollowbody"
        link4="/tutorials/lsitcompression"
        link5="/tutorials/lsit"
        svg1="situp"
        svg2="NA"
        svg3="hollowbody"
        svg4="l-sit-compression"
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
                <li>Body is mostly flat</li>
                <li>Core is engaged</li>
                <li>Feet, head and arms are off the ground</li>
                <li>Lower back is pressed against the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Arched lower back, back is off the ground</li>
                <li>Feet touching the ground</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="hollowbody" />
      <Footer />
    </>
  );
}
