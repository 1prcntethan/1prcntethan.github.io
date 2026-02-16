import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./trainingguide.css";
import { Link } from "react-router-dom";

export function BeginnerWorkout() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">
          structuring a workout (beginner)
        </div>
        <div className="guide-hero--blurb">
          Welcome to the beginner guide on how to structure a workout, from
          WINGS. This guide will cover basic calisthenics training principles,
          as well as how you can structure your workouts for beginning progress.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">training principles</div>

        <div className="guide-text">
          First, we need to understand the goal of your workouts. Your workouts
          should aim to{" "}
          <strong>
            stimulate the muscle in order to trigger muscle growth, and/or an
            increase in strength
          </strong>
          . Strength is based on cross sectional muscle size and neurological
          adaptations. As a beginner, the easiest thing to increase is your
          muscle size, which is why we will focus on basics when you start
          training.
        </div>

        <div className="guide-text">
          Before your main sets, you need to <strong>warm up</strong>. Make sure
          to warm up each body part you’ll be exercising. Arm circles for the
          shoulders, lunges for the legs, and wrist stretches to warm up the
          wrists for push ups.
        </div>

        <div className="guide-text">
          For complete beginners, pick an exercise for{" "}
          <strong>each muscle group</strong>: chest, shoulders, bicep, tricep,
          back, and legs. For each exercise, do 3 sets of 8-12 reps, resting 2-4
          minutes between sets. This should create a good foundation of strength
          and muscle, using full body workouts. As exercises feel easier,
          progressively overload by swapping out easy exercises for more
          difficult exercises. For example, if rows are getting too easy, swap
          to assisted pull-ups.
        </div>

        <div className="guide-text">
          A good benchmark to whether you can move on to more specific training
          is asking yourself whether the basics feel easy. Can you hammer out 25
          <Link to="/tutorials/pushup" className="guide-external-link">
            push-up
          </Link>{" "}
          or 8{" "}
          <Link to="/tutorials/pullup" className="guide-external-link">
            pull-ups
          </Link>{" "}
          with no warmup? Check out the{" "}
          <Link to="/training/beginnerguide" className="guide-external-link">
            beginner guide
          </Link>
          for a general strength goal!
        </div>
        <div className="guide-text">
          As you build more strength, or if your workout becomes too tiring, you
          can slowly transition to a strength focused workout. This means doing
          3 sets of 4-8 reps, and resting 3-5 minutes between sets. It’s around
          this time that you can start to consider switching to a{" "}
          <strong>split workout</strong>.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">programming your workout</div>
        <div className="guide-text">
          With a split workout, the main advantage is that you can focus on
          specific parts of your body and correct muscle imbalances that occur
          from compound exercises. Firstly, you should choose your most
          <strong> fatiguing exercise</strong>. At this stage, it might be pike
          push-ups for push, or chest to bar pull-ups for pull. Do 3-5 sets of
          those, and move on to an easier exercise. Throughout the workout, your
          level of{" "}
          <strong>perceived difficulty should stay pretty constant</strong>,
          which is why we frontload the difficult exercises first.
        </div>
        <div className="guide-text">
          After the next easier exercises, choose another 1 or 2 exercises. Make
          sure to have variation. For example, on a push day, make sure to hit
          chest, shoulders, and triceps, through regular pushups, diamond
          pushups, and pike push-ups. Or on a pull day, hitting the back,
          biceps, and core, through pull-ups, chin-ups, and hanging leg raises.
          Finally, finish with any accessories that help with understanding the
          activation of skills or exercises.
        </div>
        <div className="guide-text">
          Also, you need to plan your split. Which days will be push? Which days
          will be pull? Make sure to alternate; there shouldn’t be two push days
          or two pull days right next to each other. Training frequency for push
          and pull skills are typically 2x a week for each. This might look like
          push D1, pull D2, rest, push D3, pull D4 etc.
        </div>
        <div className="guide-text">
          And that’s it! Throughout the workout, remember to adequately rest,
          and accumulate enough volume and stimulus. The goal in this stage is
          to build muscle that can be trained specifically in the future for
          skills, through hypertrophy focused strength training. Happy training!
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
