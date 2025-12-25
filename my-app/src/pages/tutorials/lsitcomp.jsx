import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import { skillMuscle } from "../../utilites/skillmuscles";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function LsitComp() {
  return (
    <>
      <Navbar />
      <SkillHero title="l-sit compression" identifier="l-sit-comp" />
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
              <p>Targeted Muscles: {skillMuscle.get("L-sit Compression")}</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The L-sit Compression is a base exercise used to build core
              compressing strength and stability. It is not necessary to keep the legs completely straight, but it is recommended to do so if you have the flexibility.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ L-sit Compression
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Sit on the ground with your legs extended in front of you
                    and your hands on the ground on the outside of your thighs.
                  </li>
                  <li>
                    Engage your abs, lifting your legs upward, using your hands
                    to keep your torso in place.
                  </li>
                  <li>
                    Compress and squeeze your core as much as possible, then
                    release and go back to starting position.
                  </li>
                  <li>
                    The exercise can be made more difficult by moving your hands
                    closer to your feet, or easier by moving them to your hips.
                  </li>
                  <li>
                    To use this exercise effectively, perform these as max holds
                    or do 8-12 reps, as needed, to practice core compression.
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
            <p>Recommended Main Exercises: Sit-up, Hollow Body Hold</p>
            <p>Recommended Accessory Exercises: Hamstring Stretch</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Sit-up"
        name2="Hollow Body Hold"
        name3="L-sit Compression"
        name4="N/A"
        name5="L-sit"
        link1="/tutorials/situp"
        link2="/tutorials/hollowbody"
        link3="/tutorials/lsitcompression"
        link4="#"
        link5="/tutorials/lsit"
        svg1="situp"
        svg2="hollowbody"
        svg3="l-sit-comp"
        svg4="NA"
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
                <li>Legs are together out in front</li>
                <li>Core is engaged</li>
                <li>Arms are straight and supporting the body</li>
                <li>Feet come off the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Arms behind the hips</li>
                <li>Feet stay on the ground</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="l-sit-comp" />
      <Footer />
    </>
  );
}
