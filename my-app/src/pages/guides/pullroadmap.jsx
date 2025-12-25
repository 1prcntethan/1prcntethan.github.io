import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./trainingguide.css";
import { Link } from "react-router-dom";

export function PullRmp() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">pull roadmap</div>
        <div className="guide-hero--blurb">
          Welcome to the pull skills guide from WINGS. This guide will cover the
          optimal path for learning pull skills, what you’ll train, and how
          you’ll build all the way up to the full front lever.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">beginner pull</div>

        <div className="guide-text">
          Pulling skills in calisthenics start off hard, but in the end, most
          find them to be easier than push skills. The most basic of these is
          the{" "}
          <Link to="/tutorials/invertedrow" className="guide-external-link">
            Inverted Row
          </Link>{" "}
          and{" "}
          <Link to="/tutorials/pullup" className="guide-external-link">
            Pull-up
          </Link>
          , and that’s where we start your calisthenics pull journey. When
          you’re a beginner, you should be{" "}
          <strong>building basic pulling strength</strong>, doing Inverted Rows,
          Assisted Pull-ups, and Pull-ups. Experiment with wide or close grip
          pull-ups, and start feeling explosiveness in your pull-ups.
          Interestingly, many people when they first start out, can do much more
          push-ups than pull-ups, yet as we hit pull skills more, they are on
          average easier than their push counterparts.
        </div>

        <div className="guide-text">
          As you become more confident in your pull-ups, you can move on to
          upper level beginner pull skills. This means{" "}
          <Link to="/tutorials/chestpullup" className="guide-external-link">
            Chest
          </Link>{" "}
          and{" "}
          <Link to="/tutorials/waistpullup" className="guide-external-link">
            Waist Pull-ups
          </Link>
          . This is where you’ll start building that incredible explosive pull
          strength you may have seen influencers perform, and start working
          towards our first{" "}
          <Link to="/tutorials/muscleup" className="guide-external-link">
            Muscle-Up
          </Link>
          .
        </div>
      </div>
      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">intermediate pull</div>
        <div className="guide-text">
          After mastering the{" "}
          <Link to="/tutorials/waistpullup" className="guide-external-link">
            Waist Pull-up
          </Link>
          , you probably already have the strength for a Muscle-Up. The{" "}
          <Link to="/tutorials/muscleup" className="guide-external-link">
            Muscle-Up
          </Link>{" "}
          can be thought of as a slam downward, and it’s the first landmark pull
          skill for pull strength.{" "}
          <strong>
            You don’t have to obtain the muscle-up to start front lever training
            though
          </strong>
          . The pathway for pull skills actually splits here. You can continue
          with <strong>vertical pulling</strong>, mastering the Muscle-Up, then
          Archer Pull-ups, and finally getting the One Arm Pull-up. The other
          path is learning the progressions that eventually lead up to the front
          lever.
        </div>
        <div className="guide-text">
          You don’t have to fully commit to one, in fact training both these
          skills primarily target the lats, which means{" "}
          <strong>
            there will be carryover regardless of which path you choose
          </strong>
          . If you have the option, weighted pull-ups are one of the most
          beneficial exercises for this stage. With FL and OAP being lat
          focused, having a crazy weighted pull-up amount will skyrocket your
          progress in both of these skills. Just make sure to have days where
          you <strong>train FL/OAP specifically</strong>, and develop the necessary body
          awareness for the skills.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">advanced pull</div>
        <div className="guide-text">
          Training the OAP will progress very standardly, meaning you’ll train
          progressions until you have enough strength to move onto the next one.
          From our{" "}
          <Link to="/tutorials/waistpullup" className="guide-external-link">
            Waist Pull-up
          </Link>
          , we’ll go to the Archer Pull-up, then the Assisted One Arm Chin-up,
          Assisted One Arm Pull-up, and then the full OAP. There isn’t as much
          technical skill in this path, it’s mostly just brute pulling strength,
          and progressing your way through it. Nonetheless, the OAP is still a
          very cool skill to have.
        </div>
        <div className="guide-text">
          The front lever, on the other hand, is a bit more complicated. First,
          you’ll start with{" "}
          <Link to="/tutorials/tuckfl" className="guide-external-link">
            Tuck FL
          </Link>
          , learning to keep your back parallel with the ground, and feeling
          <strong> scapula retraction</strong>. As you get more familiar, you’ll build the tricep
          strength to keep your arm straight, and progress to the{" "}
          <Link to="/tutorials/advtuckfl" className="guide-external-link">
            Adv. Tuck FL
          </Link>
          , then the{" "}
          <Link to="/tutorials/superadvtuckfl" className="guide-external-link">
            Super Adv. Tuck FL
          </Link>
          . Throughout all this, think about retraction. Feeling retraction with
          gravity fighting against that will pull your scapula to the correct
          neutral position it’s supposed to be in. As you begin to open up the
          position, you’ll progress to{" "}
          <Link to="/tutorials/straddlefl" className="guide-external-link">
            Straddle FL
          </Link>
          , and finally using <strong>banded holds</strong>, you’ll finally achieve the{" "}
          <Link to="/tutorials/fullfl" className="guide-external-link">
            Full Front Lever
          </Link>
          .
        </div>
        <div className="guide-text">
          Your training for this will look similar to planche; you’ll hold the
          <strong> hardest, most specific variation</strong> for the front lever. Then, move on to
          <strong> banded holds, negatives, and raises</strong>. Finally, <strong>volume work</strong> like
          pull-ups and accessory work like hollow body holds. That’s it. The
          main mover for the Front Lever is <strong>the lats</strong>, which is a huge muscle,
          and that’s probably why FL is much easier to learn compared to PL,
          which targets the small shoulders.
        </div>
        <div className="guide-text">
          Through all of this, you might have been training the FL Row
          variations, and this will greatly benefit you when learning the FL
          Touch. If you make it this far, congrats, you’re pretty much at the
          end of the FL pathway! The only notable exercises past this are the
          OAFL and Straight Arm Touch, which are other incredibly difficult and
          specific skills. Attempt them if you dare; they are completely
          different beasts!
        </div>
        <div className="guide-text">
          If you'd like to contribute and sketch for this guide, please reach
          out!
        </div>
      </div>
      <Footer />
    </>
  );
}
