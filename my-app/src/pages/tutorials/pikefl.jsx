import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from "react-router-dom";
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";

export function PikeFL() {
  return (
    <>
      <Navbar />
      <SkillHero title="pike front lever" identifier="pike-fl" />
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
              <p>
                Targeted Muscles: Lats, Rear Deltoids, Triceps, Scapula, Core
              </p>
              <p>High Strain Areas: N/A </p>
            </div>
            <div className="overview-explanation">
              The Pike Front Lever is the next regression exercise after the
              Tuck FL used to prepare the body more difficult front lever
              progressions. The lats/back is the main muscle used in this
              exercise. Scapula retraction should be kept in mind in order to
              achieve a neutral scapula position.
            </div>
          </div>

          <div className="exercise-instructions-container">
            Step-by-Step ~ Pike Front Lever
            <div className="exercise-instructions">
              <input id="skill-read-more" type="checkbox" />

              <div className="skill-instructions">
                <ul>
                  <li>
                    Start in a deadhang position with your hands shoulder-width
                    apart.
                  </li>
                  <li>
                    Ensure your elbows are completely straightened, and tuck
                    your knees up to your chest.{" "}
                  </li>
                  <li>
                    Gradually pull your body so your back is parallel with the
                    ground.{" "}
                  </li>
                  <li>
                    Maintain straight arms and a neutral scapula, tucking your
                    knees to your chest.
                  </li>
                  <li>Lastly, try to flatten your back.</li>
                  <li>
                    From this Tuck FL position, straighten your legs and unfold
                    your hips so your body is in a pike position, with your legs
                    pointing upward.
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
            <p>Recommended Main Exercises: Tuck FL, Pull-up</p>
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
        name2="Tuck Front Lever"
        name3="Pike Front Lever"
        name4="Adv. Tuck FL"
        name5="Full Front Lever"
        link1="/tutorials/invertedrow"
        link2="/tutorials/tuckfl"
        link3="/tutorials/pikefl"
        link4="/tutorials/advtuckfl"
        link5="#"
        svg1="inverted-row"
        svg2="tuck-fl"
        svg3="pike-fl"
        svg4="adv-tuck-fl"
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
                <li>Body in a pike position</li>
                <li>Legs point straight up</li>
                <li>Neutral scapula</li>
                <li>Back is flat and parallel to the ground</li>
                <li>Hands are placed shoulder-width apart</li>
                <li>Hips are level with shoulders</li>
              </ul>
            </div>
            <div>
              Bad Form Cues:
              <ul>
                <li>Bent arms</li>
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
