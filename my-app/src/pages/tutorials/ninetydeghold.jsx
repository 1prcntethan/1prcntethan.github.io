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

export function NinetyDegHold() {
  return (
    <>
      <Navbar />
      <SkillHero title="90 degree hold" identifier="ninety-deg-hold" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: B
              </Link>
              <br />
              <p>Targeted Muscles: {skillMuscle.get("90 Degree Hold")}</p>
              <p>High Strain Areas: Shoulders</p>
            </div>
            <div className="overview-explanation">
              The 90 degree hold, also known as the bent arm planche, is a
              shoulder focused exercise that involves holding the body parallel
              to the ground on bent arms. It is similar to the pseudo-pushup,
              and can be achieved through progressions.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ 90 Degree Hold
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a planche lean position with your hands
                    shoulder-width apart and facing slightly outward.
                  </li>
                  <li>
                    Ensure your core is engaged, and that your scapula is
                    protracted and depressed.{" "}
                  </li>
                  <li>
                    Gradually lean forward and lower your body, bending your
                    elbows and keeping your feet and hands in the same place.{" "}
                  </li>
                  <li>
                    As your body lowers, your scapula can retract but should
                    still remain depressed.
                  </li>
                  <li>
                    Lean forward more and more, while moving to the down
                    position. You should feel your legs lift off the floor.
                  </li>
                  <li>
                    Once your legs are off the floor, and you are down and
                    parallel to the ground, hold the position.
                  </li>
                  <li>
                    To use this exercise effectively, perform holds at a
                    difficulty where you can hold them for at least 6-8 seconds,
                    counting each hold as a set.
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
            <p>Recommended Main Exercises: Pseudo Push-up, Planche Lean</p>
            <p>Recommended Accessory Exercises: Scapular Pushups, Dips</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Push-up"
        name2="Pseudo Pushup"
        name3="90 Degree Hold"
        name4="N/A"
        name5="90 Degree PU"
        link1="/tutorials/pushup"
        link2="/tutorials/pseudopu"
        link3="/tutorials/ninetydeghold"
        link4="#"
        link5=""
        svg1="push-up"
        svg2="pseudo-pu"
        svg3="ninety-deg-hold"
        svg4="NA"
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
                <li>Body aligned through head, shoulders, hips and legs</li>
                <li>Hands facing outward</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Bodyweight is balanced on hands only, feet are off the ground</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Hands are placed too far/close together</li>
                <li>High hips</li>
                <li>Arched back</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="ninety-deg-hold" />
      <Footer />
    </>
  );
}
