import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function AssistedHSPU() {
  return (
    <>
      <Navbar />
      <SkillHero title="assisted hspu" identifier="assisted-hspu" />
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
              <p>Targeted Muscles: Shoulders, Tricep, Chest, Core</p>
              <p>High Strain Areas: Wrists</p>
            </div>
            <div className="overview-explanation">
              The Assisted Handstand Pushup is the last regression before the
              HSPU. It involves practicing transitions between the HS(Handstand)
              and the BAS(Bent Arm Stand) on and off the wall, which are the negative and pressing
              movements. When performing this exercise on the floor, consider
              warming up your wrists, or use low paralletes.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Assisted Handstand Pushup
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Find a wall you can handstand next to, and place your hands
                    one foot away from the wall, shoulder width apart.
                  </li>
                  <li>
                    For a HSPU negative, start in a handstand, and slowly lower
                    yourself by bending the elbows, and moving your head in
                    front of your hands, until you are in the BAS position.
                  </li>
                  <li>
                    For a HSPU pressing movement, start in the BAS and push up
                    and straighten your body into a handstand.
                  </li>
                  <li>Practice alternating and repeating these movements.</li>
                  <li>
                    Once you have the strength, you should be able to chain and
                    combine a negative and a press, or a press and a negative.
                  </li>
                  <li>Play around with being on and off the wall, and chest vs back to the wall. Eventually, this will result in a HSPU.</li>
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
            <p>
              Recommended Main Exercises: Bent Arm Stand, Elevated Pike
              Push-ups, Handstand
            </p>
            <p>Recommended Accessory Exercises: Pike Push-ups, Dips</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Pike Push-up"
        name2="Bent Arm Stand"
        name3="Assisted HSPU"
        name4="HSPU"
        name5="90 Degree PU"
        link1="/tutorials/pikepu"
        link2="/tutorials/bas"
        link3="/tutorials/assistedhspu"
        link4="/tutorials/hspu"
        link5="#"
        svg1="pike-pu"
        svg2="bas"
        svg3="assisted-hspu"
        svg4="hspu"
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
                <li>Elbows are relatively close to the body</li>
                <li>Head is close to or touching the floor</li>
                <li>Head is in front of hands</li>
                <li>Body is straight and engaged</li>
                <li>Elbows make a ~90 degree angle in the bottom position</li>
                <li>Hands facing forward or slightly outward</li>
                <li>Hands are (usually) placed shoulder-width apart</li>
                <li>Legs are straight</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Flared elbows</li>
                <li>Sagging hips</li>
                <li>Weak/arched core</li>
                <li>Arched/bent body</li>
                <li>Elbows not fully bent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="assisted-hspu" />
      <Footer />
    </>
  );
}
