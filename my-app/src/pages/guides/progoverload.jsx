import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./trainingguide.css";
import { Link } from "react-router-dom";

export function ProgOverload() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">progressive overload</div>
        <div className="guide-hero--blurb">
          Welcome to the progressive overload guide from WINGS. This guide will
          cover how leverages & progressive overload work in calisthenics, and
          how to use logs to track and progress your strength.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">leverages</div>

        <div className="guide-text">
          Calisthenics is a broad term that encompasses anything bodyweight. But
          this doesn’t mean we can only press or pull our body weight.
          Calisthenics creates progressive overload through <strong> leverages</strong>.
        </div>

        <div className="guide-text">
          If you start with{" "}
          <Link to="/tutorials/pushup" className="guide-external-link">
            push-ups
          </Link>
          , you’ll be pressing about 70% of your body weight. This makes sense,
          since your weight is supported by both your legs and hands. As you get
          better at this, you can try different variations like the one arm
          push-up, which is twice as difficult. As we move towards planche
          progressions, we begin to focus more on shoulders & upper chest. From
          a regular push-up, walk your hands closer to your waist. This shifts
          your hands to be more under your center of gravity, and as a result,
          your legs carry less load, and your arms support more of your body
          weight. Doing pushups in this position results in{" "}
          <Link to="/tutorials/pseudopu" className="guide-external-link">
            Pseudo Planche Push-ups
          </Link>
          .
        </div>

        <div className="guide-text">
          Next, with the{" "}
          <Link to="/tutorials/tuckpl" className="guide-external-link">
            tuck planche
          </Link>
          , we carry all our weight on our arms. To hold our back horizontal,
          our shoulders have to press our arms into the ground. As we extend
          into{" "}
          <Link to="/tutorials/advtuckpl" className="guide-external-link">
            advanced tuck
          </Link>
          and straddle planche, that <strong> lever arm </strong>is getting longer and longer,
          which increases the amount of force our shoulders need to generate to
          keep our back horizontal. The same principles of leverage apply to the{" "}
          <Link to="/tutorials/fullfl" className="guide-external-link">
            front lever
          </Link>
          , and this increase of leverages between progressions is one of the
          ways we progressively overload in calisthenics.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">progressively overloading</div>
        <div className="guide-text">
          As previously explained, moving to harder and harder progressions is
          how we progressively overload and become stronger in calisthenics. But
          how do we know when we’re strong enough to move on to harder
          progressions?
        </div>
        <div className="guide-text">
          Firstly, once you unlock a new skill, for example{" "}
          <Link to="/tutorials/tuckpl" className="guide-external-link">
            tuck planche
          </Link>
          , you probably have close to a 2-3 second hold. This is <strong> not long enough</strong> to utilize in your training, and you won’t be able to
          accumulate enough volume. Your goal should be to get to at least <strong> 6-8 seconds</strong> before using it as that first working set in training. And to get to
          that 6-8 second mark, just do what you did to unlock the skill in the
          first place. Doing the regressions will build strength more
          efficiently than 2-3 second attempts, and once you hit that mark, you
          can continue to overload by substituting in that harder variation.
        </div>
        <div className="guide-text">
          For skills involving reps, the concept is the same. When you unlock
          your first rep for the handstand pushup, you probably won’t be able to
          use that 1 rep max as a set in your workout. So, continue to
          strengthen your shoulders and train your balance, until you can do
          more reps. Aim for around 3 reps minimum before implementing that
          exercise into your main workout. This ensures that your working sets
          allow for enough <strong> intensity and volume</strong> at the same time. One thing to
          note is to avoid spamming max attempts too often. You can train
          attempts a couple times a week, as your body allows, but pushing your
          body too far will have significant consequences and possibly lead to
          injury.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">
          other ways to progressively overload
        </div>
        <div className="guide-text">
          Even though we use skills to progressively overload, there’s other
          smaller ways we progressively overload between skills.
        </div>
        <div className="guide-text">
          Doing <strong> more reps or sets</strong> is a sign that you’re getting stronger, and
          it's also how we progressively overload. Also, being able to slow down
          reps, <strong> doing your sets slowly and controlled</strong>, makes the exercise more
          challenging and requires more skill. You can <strong> clean up your form</strong>,
          keeping it stricter and therefore <strong> increasing</strong> the difficulty of the
          exercise.
        </div>
        <div className="guide-text">
          However, the best way to progressively overload for skills like the
          planche and front lever is actually <strong> bands</strong>. Resistance bands allow you
          to train your target skill with the same muscle activations, but less
          weight. This helps your body understand that target movement better,
          without needing the strength. For example, for someone trying to go
          from{" "}
          <Link to="/tutorials/fullfl" className="guide-external-link">
            Super Adv. Tuck FL{" "}
          </Link>
          to the{" "}
          <Link to="/tutorials/straddlefl" className="guide-external-link">
            Straddle FL
          </Link>
          , bands are the perfect option to bridge that gap. Starting with
          heavier bands, we can progressive overload by switching to <strong> lighter bands over time</strong>, allowing us to learn our target skill.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">logging</div>
        <div className="guide-text">
          As you get stronger, you’ll make progress in your skill progressions
          and hold times. But in order to know this, you’ll need to track your
          workouts. A workout log is <strong> essential</strong> to understanding what you’re weak
          at, and identifying what is and isn’t progressing. Each log should
          contain certain critical info: the <strong> date</strong>, the <strong> focus</strong> (push/pull/legs),
          and the <strong> recording of sets & reps of what exercises.</strong>        </div>
        <div className="guide-text">Here’s an example:</div>
        <div className="guide-text">
          1/1/2025 PUSH
          <br />
          <Link to="/tutorials/handstand" className="guide-external-link">
            HS
          </Link>warm-up
          <br />
          <Link to="/tutorials/advtuckfl" className="guide-external-link">
            Adv. Tuck FL
          </Link> 7s x 4
          <br />
          <Link to="/tutorials/tuckplpu" className="guide-external-link">
            Tuck PL PU
          </Link> 5 x 3
          <br />
          Dynamic <Link to="/tutorials/planchelean" className="guide-external-link">
            PL leans 
          </Link> 10 x 3
          <br />
          <Link to="/tutorials/pikepu" className="guide-external-link">
            Pike PU
          </Link> 6 x 3
          <br />
          <Link to="/tutorials/dip" className="guide-external-link">
            Dips
          </Link> 10 x 2
        </div>
        <div className="guide-text">
          As you can see, the date and skill group is at the top, and under we
          put the skills and reps per set we do, in order. It’s <strong> optional</strong> to
          detail rest times, but it's not needed if you consistently use a set
          amount of rest time.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-text">
          That’s it for progressive overload! Progressive overload can get a bit
          confusing at times, and hopefully this helps clarify things. Finally,
          as with everything else, <strong> listen to your body </strong>!
        </div>
        <div className="guide-text">
          If you'd like to contribute and sketch for this guide, please reach out!
        </div>
      </div>
      <Footer />
    </>
  );
}
