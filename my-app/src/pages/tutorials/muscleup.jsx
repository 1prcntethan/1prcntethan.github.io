import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";

export function MuscleUp() {
  return (
    <>
      <Navbar />
      <SkillHero title="muscle-up" identifier="muscle-up" />
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
              <p>Targeted Muscles: Back, Bicep, Tricep, Core, (Shoulders)</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Muscle-Up is an impressive explosive pulling movement that
              combines a dip and a pullup. It's a challenging movement that
              tests upper body strength and coordination.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Muscle-up
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a deadhang position with your hands shoulder-width
                    apart, and a bit of swing.
                  </li>
                  <li>
                    Time your pull with the swing backward; pull yourself up,
                    bringing your chest up and over the bar, leaning your body
                    over the bar and piking your hips. You can also kip your knees
                    to make it easier. {" "}
                  </li>
                  <li>
                    Think about driving your elbows down and pushing the bar
                    downward.{" "}
                  </li>
                  <li>Try to keep your elbows closer to your body. </li>
                  <li>
                    With your body over the bar, simply straighten your arms
                    like a straight bar dip.
                  </li>
                  <li>
                    During the exercise, it is recommended to be explosive and
                    fast when coming up.{" "}
                  </li>
                  <li>
                    This exercise has many different variations and
                    difficulties, depending on where the hands are placed.
                  </li>
                  <li>
                    As you become more familiar with the movement, you'll build
                    the strength to do it cleanly with less and less of a dip and kip
                    motion.
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
            <p>
              Recommended Main Exercises: Waist Pull-up, Chest Pull-up, Pull-up,
              Dip
            </p>
            <p>
              Recommended Accessory Exercises: Deadhang, Active Hang, Hollow
              Body Hold
            </p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="Pull-up"
        name2="Waist Pull-up"
        name3="Muscle-up"
        name4="Archer Pull-up"
        name5="OAP"
        link1="/tutorials/pullup"
        link2="/tutorials/waistpullup"
        link3="/tutorials/muscleup"
        link4="#"
        link5="#"
        svg1="pull-up"
        svg2="waist-pull-up"
        svg3="muscle-up"
        svg4=""
        svg5=""
      />
      <TutorialReturn />
      {svgDivider.get("2")}
      <div class="technique-form-container">
        <div class="technique-form">
          <div class="skill-section-title">technique & form</div>
          <div class="technique-form-content">
            <div class="technique-form-text">
              Good Form Cues:
              <ul>
                <li>Elbows drive downward</li>
                <li>Body gets over bar</li>
                <li>Hands are (usually) placed shoulder-width apart</li>
                <li>Pull is timed with the swing backward</li>
                <li>Pull AROUND the bar, not to the bar (C-shaped motion) </li>
              </ul>
            </div>
            <div class="technique-form-text">
              Bad Form Cues:
              <ul>
                <li>Flared elbows</li>
                <li>Half reps</li>
                <li>Pulling to the bar instead of around</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
    </>
  );
}
