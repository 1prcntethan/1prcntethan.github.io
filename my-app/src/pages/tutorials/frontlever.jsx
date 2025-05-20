import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";

export function FrontLever() {
  return (
    <>
      <Navbar />
      <SkillHero title="full front lever" identifier="full-fl" />
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
                Targeted Muscles: Lats, Rear Deltoids, Triceps, Scapula, Core
              </p>
              <p>High Strain Areas: N/A </p>
            </div>
            <div className="overview-explanation">
              The Front Lever is the trademark pull skill of calisthenics. The
              lats/back is the main muscle used in this exercise. Scapula
              retraction should be kept in mind in order to achieve a neutral
              scapula position.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Front Lever
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>Start in a Tuck FL position.</li>
                  <li>
                    Unfold your hips, flatten your back, and fully extend your
                    legs, with your entire body parallel to the ground.{" "}
                  </li>
                  <li>
                    Your body should be flat and your legs should be straight.{" "}
                  </li>
                  <li>Maintain straight arms and a neutral scapula.</li>
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
            <p>
              Recommended Main Exercises: Half Lay FL, Straddle FL, Straddle FL
              Rows, Pull-up
            </p>
            <p>
              Recommended Accessory Exercises: Scapular Pullups, Adv. Tuck FL
              Rows
            </p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Inverted Row"
        name2="Half Lay FL"
        name3="Full Front Lever"
        name4="Full FL Row"
        name5="FL Touch"
        link1="/tutorials/invertedrow"
        link2="/tutorials/halflayfl"
        link3="/tutorials/fullfl"
        link4="#"
        link5="#"
        svg1="inverted-row"
        svg2="half-lay-fl"
        svg3="full-fl"
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
                <li>Straight arms & locked elbows</li>
                <li>Legs straight and fully extended</li>
                <li>Body is flat and parallel to the ground</li>
                <li>Neutral scapula position</li>
                <li>Back is flat and parallel to the ground</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Hips are level with shoulders</li>
                <li>Feet together, and pointed toes (aesthetics)</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Bent arms or legs</li>
                <li>Weak/protracted scapula</li>
                <li>High/low hips</li>
                <li>Hands are placed too far/close together</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
    </>
  );
}
