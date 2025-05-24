import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function Deadhang() {
  return (
    <>
      <Navbar />
      <SkillHero title="deadhang" identifier="deadhang" />
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
              <p>Targeted Muscles: Forearms</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Deadhang is a base hanging exercise used to build grip
              strength and condition the body for vertical pulling movements. Mainly, it builds endurance
              and stamina and gives a base level of hanging strength.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Deadhang
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Find a bar or something where there is space to hang under,
                    which is adequate for your height.
                  </li>
                  <li>Place your hands on the bar, shoulder width apart.</li>
                  <li>
                    Hang completely from your hands, and let all your body relax
                    and decompress.
                  </li>
                  <li>
                    To use this exercise effectively, perform these until your
                    feel your grip strength/stamina is adequate for harder
                    exercises.
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
            <p>Recommended Main Exercises: Inverted Row</p>
            <p>Recommended Accessory Exercises: N/A</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="N/A"
        name2="N/A"
        name3="Deadhang"
        name4="Active Hang"
        name5="Pull-up"
        link1="#"
        link2="#"
        link3="/tutorials/deadhang"
        link4="/tutorials/activehang"
        link5="/tutorials/pullup"
        svg1="NA"
        svg2="NA"
        svg3="deadhang"
        svg4="activehang"
        svg5="pull-up"
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
                <li>Hands are placed shoulder-width apart</li>
                <li>Body is mostly relaxed and hanging</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Body is engaged</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="deadhang" />
      <Footer />
    </>
  );
}
