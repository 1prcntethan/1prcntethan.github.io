import BetaDisclaimer from "../components/betadisclaimer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import "./howto.css";

export function HowTo() {
  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="howto-text">
        <div className="howto-title">how to use this website</div>
        <p>
          This website is designed to help you learn and progress in your
          calisthenics journey. Here are some tips on how to use it:
        </p>
        <ol>
          <li>
            <strong>learn the lingo:</strong> Skim the terminology section to
            familiarize yourself with the terms and concepts used in
            calisthenics, as well as the abbreviations used on the website. This
            will help you understand the content better and follow along with
            the tutorials.
          </li>
          <br />
          <li>
            <strong>explore the skills:</strong> Browse through the tutorials
            section to find exercises that interest you. Each skill has a
            dedicated page with detailed instructions and tips, and linked YT
            videos of examples.
          </li>
          <br />
          <li>
            <strong>follow the progression charts:</strong> Use the progression
            charts to understand the steps needed to master each skill. Start
            with the easier variations and gradually work your way up.
            <br />
            the BASE SKILL is the very first step in learning the current skill,
            while the TARGET SKILL is the final goal. The REGRESSION and
            PROGRESSION are the closest in difficulty to the current skill.
          </li>
          <br />
          <img
            className="howto-img"
            src="progressionchartEX.png"
            alt="progression chart"
          />
          <br />
          <li>
            <strong>learn from the guides:</strong> Look through the guides in
            the training section for more detailed information on training
            techniques, nutrition, skill pathways, and other important topics.
          </li>
          <br />
          <li>
            <strong>use the skill tree:</strong> The skill tree provides useful
            information to help you easily see the path to your desired skill.
            Follow the arrows and key to figure out where to start your journey.
          </li>
          <br />
          <li>
            <strong>track your progress:</strong> Make an account to track your
            progress and see how far you've come in your journey! The skill tree
            will allow you to mark skills as <i>locked</i>, <i>unlocked</i>,{" "}
            <i>in progress</i>, or <i>mastered</i>, which earns RP (rank
            points). Log your streak daily to gain RP and level up your rank!
          </li>
          <br />

          <li>
            <strong>rank calculations:</strong> 1000 points total. Skills make
            up a max of 750 points, with streaks/logging making up a max of 250
            points.
            <br />
            <br />
            Point contribution from skills is determined by difficulty: F = 2, D
            = 4, C = 7, B = 12, A = 20, S = 35, and SS = 66.
            <br />
            Multipliers are applied to skill points based on their status:
            Locked = 0, Unlocked = 0.33, In Progress = 0.66, and Mastered = 1.
            <br />
            <br />
            Streak/log points are calculated by the formula: sqrt(streak length
            / 365) * 250.
            <br />
            <br />
            Skill & Streak point contributions are added together to determine
            your rank.
            <br />
            Bronze = 0-120, Silver = 120-260, Gold = 260-450, Platinum =
            450-630, Diamond = 630-800 Ascendant = 800-920, Ethereal = 920-1000.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}
