import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";

export function Handstand() {
  return (
    <>
      <Navbar />
      <SkillHero title="handstand" identifier="handstand" />
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
              <p>Targeted Muscles: Shoulders, Arms, Chest, Core</p>
              <p>High Strain Areas: Wrists</p>
            </div>
            <div className="overview-explanation">
              The Handstand is an icon exercise for calisthenics. It requires
              much more skill and technique than strength. The exercise has many
              variations, shapes, and can be done very creatively. There are
              many factors to really mastering this skill, so please check out
              the handstand guide for more in-depth information.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Handstand
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>Place your hands on the ground shoulder width apart.</li>
                  <li>
                    Kick up and stack your elbows, shoulders, chest, hips,
                    knees, and feet, in a straight line.
                  </li>
                  <li>
                    When balancing, stay towards leaning towards your fingers,
                    so you actually have control over balancing.
                  </li>
                  <li>
                    Push your shoulders and hands into the ground, it should
                    feel like you are reaching as far as your can upward.
                  </li>
                  <li>
                    To use this exercise effectively, perform these holds as
                    long as possible to practice balancing using your fingers
                    and hands.
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
              Recommended Main Exercises: Assisted Handstand, Crow Pose, Crane
              Pose
            </p>
            <p>Recommended Accessory Exercises: Pike Push-up</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Pike Push-up"
        name2="Assisted HS"
        name3="Handstand"
        name4="Bent Arm Stand"
        name5="HSPU"
        link1="/tutorials/pikepu"
        link2="/tutorials/assistedhs"
        link3="/tutorials/handstand"
        link4="/tutorials/bas"
        link5="#"
        svg1="pike-pu"
        svg2="assisted-hs"
        svg3="handstand"
        svg4="bas"
        svg5="hspu"
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
                <li>Whole body is engaged</li>
                <li>Hands facing forward or slightly outward</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Body is stacked in a straight line</li>
                <li>Pushing upward with shoulders and hands, feeling tall</li>
                <li>Using fingers and heel of hand to balance</li>
                <li>
                  Try gripping the ground with bent fingers, to get better
                  activation and finger balancing strength
                </li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Unaligned body</li>
                <li>Body is not engaged</li>
                <li>Bent arms</li>
                <li>Not using fingers and heel of hand to balance</li>
                <li>Arched back</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
    </>
  );
}
