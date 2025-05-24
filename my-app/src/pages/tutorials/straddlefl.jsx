import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function StraddleFL() {
  return (
    <>
      <Navbar />
      <SkillHero title="straddle front lever" identifier="straddle-fl" />
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
              The Straddle Front Lever is one of the final exercises used to
              prepare the body for the full front lever. The lats/back is the
              main muscle used in this exercise. Scapula retraction should be
              kept in mind in order to achieve a neutral scapula position.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Straddle Front Lever
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>Start in a Tuck FL position.</li>
                  <li>
                    Unfold your hips, flatten your back, and straddle your legs
                    outward.{" "}
                  </li>
                  <li>
                    Your body should be flat and your legs should be in a split
                    position.{" "}
                  </li>
                  <li>Maintain straight arms and a neutral scapula.</li>
                  <li>
                    The wider or more spread out your legs are, the easier the
                    exercise becomes.
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
            <p>
              Recommended Main Exercises: Super Adv. Tuck FL, Adv. Tuck FL,
              Pull-up
            </p>
            <p>
              Recommended Accessory Exercises: Scapular Pullups, Active Hang,
              Deadhang
            </p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Inverted Row"
        name2="Super Adv. Tuck FL"
        name3="Straddle FL"
        name4="Half Lay FL"
        name5="Full Front Lever"
        link1="/tutorials/invertedrow"
        link2="/tutorials/superadvtuckfl"
        link3="/tutorials/straddlefl"
        link4="/tutorials/halflayfl"
        link5="/tutorials/fullfl"
        svg1="inverted-row"
        svg2="super-adv-tuck-fl"
        svg3="straddle-fl"
        svg4="half-lay-fl"
        svg5="full-fl"
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
                <li>Legs pointing outward</li>
                <li>Body is flat and parallel to the ground</li>
                <li>Neutral scapula position</li>
                <li>Back is flat and parallel to the ground</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Hips are level with shoulders</li>
                <li>Pointed feet/toes (for aesthetics)</li>
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
      <YTTutorial identifier="straddle-fl" />
      <Footer />
    </>
  );
}
