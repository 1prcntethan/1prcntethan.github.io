import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./trainingguide.css";
import { Link } from "react-router-dom";

export function IntermediateWorkout() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">
          structuring a workout (intermediate)
        </div>
        <div className="guide-hero--blurb">
          Welcome to the intermediate guide on how to structure a workout, from
          WINGS. This guide will cover calisthenics training principles, as well
          as how you can structure and personalize your own workouts for optimal
          progress.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">training principles</div>

        <div className="guide-text">
          First off, we need to define some training principles before
          attempting to structure a workout. The principles we will adhere to
          are as follows.
          <ul>
            <li>Specificity</li>
            <li>Overload</li>
            <li>Fatigue Management</li>
            <li>Volume</li>
            <li>Intensity</li>
            <li>Rate of Perceived Exertion (RPE)</li>
          </ul>
        </div>

        <div className="guide-text">
          The <strong>Law of Specificity</strong> is a universal rule that
          essentially states to practice what you want to improve at. This
          applies to many things: you get better at chess by playing chess, a
          sprinter gets faster by sprinting, a cellist improves by playing the
          cello. For calisthenics, this means focusing on the{" "}
          <strong>most specific exercise</strong> which matches what you want to
          learn. If you want to planche, you have to train planche holds.
        </div>

        <div className="guide-text">
          Overload is how you will make progress. For example, in order to
          improve your planche, you have to{" "}
          <strong>progressively overload</strong> by moving on to harder
          variations once you acquire the strength. Your body has to constantly
          be challenged in order for it to have new heights to adapt to.
        </div>

        <div className="guide-text">
          Fatigue Management is exactly what it sounds like: managing your
          body’s fatigue. This includes your physical fatigue, but also{" "}
          <strong>mental fatigue</strong>. Your body has a max amount of volume
          and work it can do before all that volume becomes junk volume and
          detrimental to your progress. Additionally, when training high
          strength and intensity skills, you put extremely high strain on your
          central nervous system (CNS). Again, using planche as an example, if
          you trained a high intensity PL session on Monday, your CNS may not
          have recovered by Wednesday, even if your muscles have. Fatigue in
          your body will build up, and it’s important to{" "}
          <strong>incorporate rest days, light days, or deload weeks</strong>{" "}
          into your routine.
        </div>
        <div className="guide-text">
          Next, we need to talk about volume vs intensity. Volume of course, is
          the amount of reps and movements you do. Intensity is the difficulty
          of the workout or exercise you do.{" "}
          <strong>These two variables are opposite. </strong>
          25 reps of push-ups is high volume low intensity, while 3 seconds of
          full planche is low volume high intensity. You can’t ever have high
          volume and high intensity at the <strong>same time</strong>, it isn’t
          possible.
        </div>
        <div className="guide-text">
          The optimal intensity and volume comes down to your{" "}
          <strong>hold lengths</strong> and your <strong>exercise reps</strong>.
          Each rep is roughly equivalent to 2 seconds of an isometric hold. If
          you can hold a planche for 2 seconds, that’s basically equivalent to
          your 1 rep max at 100% intensity. Drawing from powerlifting, which is
          a highly strength focused sport, we should be staying within{" "}
          <strong>80%-90% intensity</strong>. This is equivalent to about{" "}
          <strong>8-16 seconds</strong> of an isometric hold, or{" "}
          <strong>4-8 reps</strong>, and this is where you should be training
          for each set.
        </div>

        <div className="guide-text">
          Finally, we’ll be using RPE, or{" "}
          <strong>rate of perceived exhaustion</strong>, to subjectively measure
          how hard your body is working during an exercise. Basically, it allows
          you to measure the relative difficulty of the exercise, with respect
          to where you are in the workout. For example, doing planche at the
          start of the workout may be around 8 or 9 RPE, an extremely difficult
          exercise while your body is fresh. At the end of a workout, an 8 or 9
          RPE may be a set of dips, since you’re tired from the workout. Looking
          at the chart below, we want to stay around the{" "}
          <strong>6-9 RPE for the full duration of the workout</strong>. Your
          workout should become{" "}
          <strong>less intense as you get fatigued</strong>, so you perceive the{" "}
          <strong>same difficulty</strong> throughout the workout.
        </div>

        <img src="RPEchart.png" alt="rpe-chart" id="rpe-chart" />
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">programming your workout</div>
        <div className="guide-text">
          With all that out of the way, it is now time to program your workout.
          Before you even think about sending into a max hold,{" "}
          <strong>please warm up! </strong>
          Warm-up helps prevent injury, get blood flowing for optimal
          performance, and gets the body ready to go all out. Make sure your
          warm-up isn’t hard though, you don’t want to use up a significant
          amount of energy or create fatigue before you even start your first
          set.
        </div>
        <div className="guide-text">
          Your first set should always be the{" "}
          <strong>MOST SPECIFIC exercise relevant to your target skill</strong>.
          If you want to learn the front lever, that would mean a front lever
          progression. If it’s planche, it would be a planche progression. Make
          sure that this first progression is the hardest variation that you can
          hold for <strong>at least 6-7ish seconds</strong>, which is where we
          get into that 90% intensity range. Obviously this is a general
          guideline, since we want to be able to accumulate meaningful amounts
          of volume. This first most specific exercise should be the heaviest
          sets; <strong>shoot for around 3-6 sets of this exercise</strong>,
          depending on how long your hold times are. If it's on the shorter side
          of 6 second holds, you’ll be working at high intensity and won’t be
          able to do as many sets. If you’re chilling in{" "}
          <strong>10-12 second holds</strong>, you’ll be able to do more sets.
          Also, if you’re doing max skill attempts for fun, do them right before
          this first set when you’re most fresh, but remember it will affect
          your performance on this first set.
        </div>
        <div className="guide-text">
          Regardless, after you finish your most specific and intense exercise,
          you will be slightly fatigued, and will have to move down to your
          <strong> second most specific exercise</strong>. For planche, this
          might be planche leans, and for front lever, this might be FL
          progression raises. You’ll want the second exercise to be challenging,
          but <strong>not as high intensity as the first exercise</strong>. It
          should still feel extremely difficult though, <strong>6-9 RPE</strong>
          . <strong>3-4 sets of this</strong> is a safe amount of volume, and
          you can move on to the next exercise.
        </div>
        <div className="guide-text">
          Your third exercise will likely be even less specific, and it can
          actually be focused on{" "}
          <strong>hypertrophy and building volume</strong>. With all these
          exercises, we try to meet a certain intensity threshold for stimulus
          and volume threshold so we still build muscle. For planche, this might
          be wall HSPUs, and for front lever, it might be weighted pull ups or
          regular pull ups. 3-4 sets is a good volume for this exercise, and
          everything after this third exercise can actually be{" "}
          <strong>considered accessory</strong>.
        </div>
        <div className="guide-text">
          Next, you can choose <strong>accessory exercises</strong> that target
          specific skills or attributes of your target skill. For planche, you
          may choose scapular protraction, and work on scapular pushups. For the
          front lever, you may choose dragon flags or hollow body holds, to
          target the body position in full front lever. Do 2-3 sets of these
          accessory exercises, going 80% to failure. Finally, the last stage of
          your workout should be volume. We’re going for{" "}
          <strong>muscle stimulation </strong>and burn here. On push days, this
          may look like pushups or pike pushups. On pull days, this may look
          like pullups or rows.
        </div>
        <div className="guide-text">
          Putting all of these together, here’s an example workout for front
          lever:
          <br />
          Straddle FL 6s x 3
          <br />
          Banded Straddle FL 7s x 2
          <br />
          Banded Straddle FL Pulls 3 sets x 4 reps
          <br />
          Weighted Pull-ups/Pull-ups 3 sets x 5 reps
          <br />
          Dragon Flag max hold x 2
          <br />
          Pull-ups max x 2
        </div>
        <div className="guide-text">
          Throughout the workout, make sure you’re managing your intensity and
          keeping it as constant as possible. Also, sometimes less is more; you
          don’t need 8 sets of FL and straddle FL of 7 seconds each, it’s just
          too much volume. Remember that the majority of progress/stimulus will
          be in those first 2-3 exercises you choose, those will be the main
          builders of strength.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">skill priority & rest</div>
        <div className="guide-text">
          While choosing the exercises for your workouts is important, you also
          need to think about which skills you will train on which days. There
          is a debate between training opposing skills, like planche and front
          lever, on the same day or different days. There are many pros and cons
          for each one, and one isn’t necessarily right. For both exercises, and
          many other intense calisthenics exercises, they place a{" "}
          <strong>heavy strain on your CNS</strong>. Unfortunately, this nervous
          system is the same system, regardless of which skill you train. So
          when you choose to train planche first, then front lever the next day,
          your front lever performance will definitely be slightly affected.
        </div>
        <div className="guide-text">
          Prioritizing planche would mean training it first in a day when you
          train planche and front lever. Or, if you’re doing split training, you
          would train planche first, and the next day you would train front
          lever. Training frequency for push and pull skills are typically 2x a
          week for each. This might look like push D1, pull D2, rest, push D3,
          pull D4 etc. This program would slightly advantage the push skill,
          where if we switched it: pull D1, push D2, rest, pull D3, push D4 etc.
          We would slightly target the pull skill more. This is up to personal
          preference of <strong>what skill is more important to you</strong>.
        </div>
        <div className="guide-text">
          While it’s good to have a consistent routine like above, sometimes you
          may hit plateaus. This means you need to switch it up, because your
          body has gotten{" "}
          <strong>too used to the movement and is not adapting</strong>. One way
          you could do this is changing your exercises for a week or two. You
          can also try focusing your training on each individual part of the
          skill. For example, for planche, maybe you would split training into
          phases of 2 weeks each. Over the course of the next 1-2 months, you
          focus on your deltoid strength, then your scapular protraction and hip
          position, and finally on improving your hold overall. By splitting the
          overall result into smaller goals, you are able to focus on{" "}
          <strong>one aspect of a skill at a time</strong>, and help your body
          achieve better understanding of the skills requirements. Finally, if
          your body is tired, you could do a deload week, where you lower the
          difficulty level on purpose to let the body recover. Of course, if
          you’re feeling strong and don’t need a deload week, you don’t need it!
          Listen to your body!
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">conclusion</div>
        <div className="guide-text">
          Training is one of the pillars of making progress in calisthenics, and
          hopefully this guide taught you something new to use in your training
          program. At this point, you may realize that a specific workout plan
          wasn’t given, and this is because a workout plan is{" "}
          <strong>dependent on each individual</strong>. Different people have
          different starting points, strength levels, mechanical advantages, and
          adaptation genetics. Workout programs are not one size fits all. At
          this level, you need to be able to{" "}
          <strong>identify your weaknesses or goals</strong>, and program
          accordingly. Getting a coach is also a great option; a good one will
          adjust your workout program based on your needs, but it is not
          necessary. Remember that a good workout program is useless if you
          don’t stick to it, so <strong>stay consistent</strong>! Happy
          training!
        </div>
      </div>

      <Footer />
    </>
  );
}
