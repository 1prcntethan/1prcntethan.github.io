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

export function SuperAdvTuckPL() {
  return (
    <>
      <Navbar />
      <SkillHero
        title="super adv. tuck planche"
        identifier="super-adv-tuck-pl"
      />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: A
              </Link>
              <br />
              <p>
                Targeted Muscles: {skillMuscle.get("Super Adv. Tuck PL")}
              </p>
              <p>High Strain Areas: Wrists, Bicep Tendon, Shoulders</p>
            </div>
            <div className="overview-explanation">
              The Super Advanced Tuck Planche is the next progression after the
              Adv. Tuck Planche. The anterior deltoid is the main muscle used in
              this exercise. Protraction and depression should still be
              emphasized, as well lower back position.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Super Advanced Tuck Planche
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>Start by entering an Advanced Tuck Planche position.</li>
                  <li>
                    As you lift off, maintain straight arms and
                    protraction/depression while leaning forward.
                  </li>
                  <li>From this position, imagine pulling your feet to your butt more, moving your legs past the 90 degree angle with your hip.</li>
                  <li>
                    Your knees should point toward the ground, with your feet pointing upward or slightly back.
                  </li>
                  <li>
                    Keep your scapula protracted and depressed, and your
                    back/spine as neutral and flat as possible.
                  </li>
                  <li>
                    To use this exercise effectively, perform holds at a
                    difficulty where you can hold them for at least 6-8 seconds,
                    counting each hold as a rep.
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
            <p>Recommended Main Exercises: Adv. Tuck Planche, Tuck Planche, Planche Lean</p>
            <p>Recommended Accessory Exercises: Scapular Pushups, Dips</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Push-up"
        name2="Adv. Tuck Planche"
        name3="Super Adv. Tuck PL"
        name4="Straddle Planche"
        name5="Full Planche"
        link1="/tutorials/pushup"
        link2="/tutorials/advtuckpl"
        link3="/tutorials/superadvtuckpl"
        link4="/tutorials/straddlepl"
        link5="/tutorials/incomplete"
        svg1="push-up"
        svg2="adv-tuck-pl"
        svg3="super-adv-tuck-pl"
        svg4="straddle-pl"
        svg5="full-pl"
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
                <li>Straight arms & locked elbows</li>
                <li>Scapula is protracted and depressed</li>
                <li>
                  Hands turned at a 45 degree angle and elbows facing forward
                </li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Lower back is mostly flat, no excessive arching</li>
                <li>Hips are at the same height as shoulders</li>
                <li>
                  Feet pointing up, knees are pointing directly at
                  the ground
                </li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Bent arms</li>
                <li>Weak/retracted scapula</li>
                <li>Hands facing forward</li>
                <li>Hands are placed too far/close together</li>
                <li>High or low hips</li>
                <li>Arched back</li>
                <li>Knees still tucked too close</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <Footer />
    </>
  );
}
