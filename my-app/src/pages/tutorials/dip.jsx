import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";
import YTTutorial from "../../components/yttutorials";
import Footer from "../../components/footer";

export function Dip() {
  return (
    <>
      <Navbar />
      <SkillHero title="dip" identifier="dip" />
      {svgDivider.get("0")}
      <div className="skill-info-container">
        <div className="skill-info">
          <div className="skill-section-title">overview</div>
          <div className="difficulty-muscle">
            <div className="skill-difficulty">
              <Link to="/Terminology" className="link-text">
                Skill Difficulty: D
              </Link>
              <br />
              <p>
                Targeted Muscles: Anterior Deltoids, Upper Chest, Chest, Triceps
              </p>
              <p>High Strain Areas: Shoulders</p>
            </div>
            <div className="overview-explanation">
              The Dip is a versatile and foundational pushing exercise. It is
              usually performed on dip bars, but you can use two chairs, tables,
              or anything else that can support your bodyweight.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Dip
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a support position with your hands straight down,
                    and holding your full body weight.
                  </li>
                  <li>
                    Ensure your core is engaged, and that your scapula is mostly
                    depressed.{" "}
                  </li>
                  <li>
                    Gradually lower your body down and slightly forward, bending
                    your elbows and keeping your balance.{" "}
                  </li>
                  <li>
                    As your body lowers, your elbows should bend to about 90
                    degrees, at which point you can start pushing yourself back
                    up.{" "}
                  </li>
                  <li>
                    Straighten your elbows and depressed your scapula until you
                    are holding yourself straight again.{" "}
                  </li>
                  <li>
                    The targeted muscle in this exercise can be changed by
                    changing the lean, the scapula position, and body position.{" "}
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
            <p>Recommended Main Exercises: Push-ups</p>
            <p>
              Recommended Accessory Exercises: Scapular Pushups, Negative Dips
            </p>
          </div>
        </div>
      </div>
      {svgDivider.get("1")}
      <ProgressionChart
        name1="N/A"
        name2="Push-up"
        name3="Dip"
        name4="Pseudo Pushup"
        name5="Full Planche"
        link1="#"
        link2="/tutorials/pushup"
        link3="/tutorials/dip"
        link4="/tutorials/pseudopu"
        link5="/tutorials/incomplete"
        svg1="NA"
        svg2="push-up"
        svg3="dip"
        svg4="pseudo-pu"
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
                <li>At the top, straight arms & depressed scapula</li>
                <li>Body aligned through head, shoulders, hips and legs</li>
                <li>Elbows bend to about 90 degrees</li>
                <li>Hands and dip objects are placed shoulder-width apart</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Weak/disengaged scapula</li>
                <li>Hands are placed too far/close together</li>
                <li>Elbows don't make it to 90 degrees</li>
                <li>Flared elbows</li>
                <li>
                  Falling backward from lowering the center of gravity
                  incorrectly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {svgDivider.get("3")}
      <YTTutorial identifier="dip" />
      <Footer />
    </>
  );
}
