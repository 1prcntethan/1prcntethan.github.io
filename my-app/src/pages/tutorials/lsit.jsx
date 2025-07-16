import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function Lsit() {
  return (
    <>
      <Navbar />
      <SkillHero title="l-sit" identifier="l-sit" />
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
              <p>Targeted Muscles: Core, Hip Flexors, Shoulder Depressors</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The L-sit is a common core exercise used to build core strength
              and stability. It is not necessary to keep the legs completely
              straight, but it is recommended to do so if you have the
              flexibility.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ L-sit
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Sit on the ground with your legs extended in front of you
                    and your hands on the ground on the outside of your thighs,
                    but close to your hips.
                  </li>
                  <li>
                    Depress your shoulders, pushing your arms into the ground
                    and lifting your torso up.
                  </li>
                  <li>
                    Engage your abs, lifting your legs upward, balancing on your
                    hands to keep your entire body off the ground. Your body
                    should make an "L" shape.
                  </li>
                  <li>
                    The exercise can be made easier by bending your legs and
                    bringing them close to your body.
                  </li>
                  <li>
                    To use this exercise effectively, perform these as max holds
                    as needed to practice core compression.
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
            <p>Recommended Main Exercises: L-sit Compression, Sit-up</p>
            <p>Recommended Accessory Exercises: Hamstring Stretch</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Sit-up"
        name2="L-sit Compression"
        name3="L-sit"
        name4="V-sit"
        name5="Manna"
        link1="/tutorials/situp"
        link2="/tutorials/lsitcompression"
        link3="/tutorials/lsit"
        link4="#"
        link5="#"
        svg1="situp"
        svg2="l-sit-comp"
        svg3="l-sit"
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
                <li>Legs are together out in front</li>
                <li>Core is engaged</li>
                <li>Arms are straight and supporting the body</li>
                <li>Scapula is depressed</li>
                <li>Feet come off the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Arms bent</li>
                <li>Feet stay on the ground</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="l-sit" />
      <Footer />
    </>
  );
}
