import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function InvertedRow() {
  return (
    <>
      <Navbar />
      <SkillHero title="inverted row" identifier="inverted-row" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: F
              </Link>
              <br />
              <p>Targeted Muscles: Lats, Trapezius, Rear Deltoids</p>
              <p>High Strain Areas: N/A</p>
            </div>
            <div className="overview-explanation">
              The Inverted Row is a pulling regression for the pull-up. In the
              future, this pulling strength will be necessary to start vertical
              pull movements. Grip strength will also be built through this
              exercise.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Inverted Row
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Find a bar or something where there is space to hang under,
                    which is at waist level.
                  </li>
                  <li>Place your hands on the bar, shoulder width apart.</li>
                  <li>
                    Position yourself under the bar facing up while hanging on
                    to it, and plant your legs a comfortable distance in front.
                  </li>
                  <li>
                    Your body should almost be parallel to the ground, and your
                    legs should be straightened.
                  </li>
                  <li>
                    Using your legs as support, pull your chest as far up and as
                    close to the bar as possible and lower back down.
                  </li>
                  <li>
                    The farther out your legs are in front of the bar, the
                    harder the exercise gets.
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
            <p>Recommended Main Exercises: Assisted Inverted Row</p>
            <p>Recommended Accessory Exercises: Deadhang, Active Hang</p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="N/A"
        name2="Assisted Inv. Row"
        name3="Inverted Row"
        name4="Assisted Pull-up"
        name5="Front Lever"
        link1="#"
        link2="/tutorials/assistedinvrow"
        link3="/tutorials/invertedrow"
        link4="/tutorials/assistpullup"
        link5="#"
        svg1="NA"
        svg2="assisted-inv-row"
        svg3="inverted-row"
        svg4="assist-pullup"
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
                <li>Legs are straight</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>
                  Pulling upward with back and elbows, feeling chest rise up to
                  bar
                </li>
                <li>Elbows are close to body</li>
                <li>Back/spine is straight</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Flared elbows</li>
                <li>Body is not parallel to the ground</li>
                <li>Arms not bent all the way</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="inverted-row" />
      <Footer />
    </>
  );
}
