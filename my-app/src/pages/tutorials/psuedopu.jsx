import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";

export function PsuedoPU() {
  return (
    <>
      <Navbar />
      <SkillHero title="psuedo push-up" identifier="psuedo-pu" />
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
              <p>Targeted Muscles: Anterior Deltoids, Upper Chest, Triceps</p>
              <p>High Strain Areas: Shoulders</p>
            </div>
            <div className="overview-explanation">
              The Psuedo Push-up is a scalable shoulder focused exercise. The
              difficulty is increased by moving the hands closer to the waist.
              It is possible to reach the 90 degree hold from solely training
              this progression.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Psuedo Push-up
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
                    Straighten your elbows and depressed your scapula until you
                    are holding yourself straight again.{" "}
                  </li>
                  <li>
                    The difficulty of this exercise can be modified by changing
                    the hand position: the closer your hands are to your waist,
                    the more difficult it is.{" "}
                  </li>
                  <li>
                    The bottom position of this movement is almost identical to
                    the 90 degree hold, and can therefore be used as a
                    progression.
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
            <p>Recommended Main Exercises: Push-ups, Planche Lean</p>
            <p>Recommended Accessory Exercises: Scapular Pushups, Dips</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Push-up"
        name2="Planche Lean"
        name3="Psuedo Pushup"
        name4="Tuck Planche"
        name5="Full Planche"
        link1="/tutorials/pushup"
        link2="/tutorials/planchelean"
        link3="/tutorials/psuedopu"
        link4="/tutorials/tuckpl"
        link5="#"
        svg1="push-up"
        svg2="planche-lean"
        svg3="psuedo-pu"
        svg4="tuck-pl"
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
                <li>
                  At the top, straight arms & protracted + depressed scapula
                </li>
                <li>Body aligned through head, shoulders, hips and legs</li>
                <li>Hands facing outward</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Full range of motion from top to bottom</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Weak/disengaged scapula</li>
                <li>Hands are placed too far/close together</li>
                <li>High hips</li>
                <li>Arched back</li>
                <li>Hand or feet position changes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
    </>
  );
}
