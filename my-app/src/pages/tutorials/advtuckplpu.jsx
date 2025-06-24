import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function AdvTuckPLPU() {
  return (
    <>
      <Navbar />
      <SkillHero title="adv. tuck planche pushup" identifier="adv-tuck-pl-pu" />
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
              <p>
                Targeted Muscles: Anterior Deltoids, Upper Chest, Scapula, Core
              </p>
              <p>High Strain Areas: Wrists, Bicep Tendon, Shoulders</p>
            </div>
            <div className="overview-explanation">
              The Adv. Tuck Planche Pushup is a regression exercise used to increase
              bent arm and straight arm strength. The anterior deltoid is the
              main muscle used in this exercise. For beginners, protraction and
              depression of the scapula should be emphasized.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Adv. Tuck Planche Pushup
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>Start in an Adv. Tuck Planche position.</li>
                  <li>
                    Ensure your elbows are completely straightened, and that
                    your scapula is protracted and depressed.{" "}
                  </li>
                  <li>
                    Gradually lower your body by bending your elbows, while
                    keeping the adv. tuck planche body position.
                  </li>
                  <li>
                    Once your elbows are bent around 90 degrees, you can push
                    back up, straightening your arms and protracting your
                    scapula.
                  </li>
                  <li>
                    To use this exercise effectively, perform these at a
                    diffculty where you can do 4-8 reps for strength, or 8-12
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
            <p>Recommended Main Exercises: Tuck Planche Pushup, Pseudo Pushup</p>
            <p>Recommended Accessory Exercises: Scapular Pushups, Dips</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Push-up"
        name2="Adv. Tuck Planche"
        name3="Adv. Tuck Planche PU"
        name4="Super Adv. Tuck PL"
        name5="Full Planche"
        link1="/tutorials/pushup"
        link2="/tutorials/advtuckpl"
        link3="/tutorials/advtuckplpu"
        link4="/tutorials/superadvtuckpl"
        link5="/tutorials/incomplete"
        svg1="push-up"
        svg2="adv-tuck-pl"
        svg3="adv-tuck-pl-pu"
        svg4="super-adv-tuck-pl"
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
                <li>Knees pointing downward</li>
                <li>Scapula is protracted and depressed</li>
                <li>
                  Hands turned at a 45 degree angle and elbows facing forward
                </li>
                <li>Hands are placed shoulder-width apart</li>
                <li>90 degree elbow bend</li>
                <li>Core is compressed</li>
                <li>Elbows are close to body</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Weak/retracted scapula</li>
                <li>Hands facing forward</li>
                <li>Hands are placed too far/close together</li>
                <li>Incomplete range of motion</li>
                <li>Flared elbows</li>
                <li>Weak/unengaged core</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="adv-tuck-pl-pu" />
      <Footer />
    </>
  );
}
