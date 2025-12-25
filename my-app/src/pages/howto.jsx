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
          <li>
            <strong>use the skill tree:</strong> The skill tree provides useful
            information to help you easily see the path to your desired skill. 
            Follow the arrows and key to figure out where to start your journey.
          </li>
          <li>
            <strong>track your progress:</strong> Make an account to track your
            progress and see how far you've come in your journey!
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}
