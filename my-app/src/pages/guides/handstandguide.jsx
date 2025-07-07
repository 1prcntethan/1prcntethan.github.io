import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./trainingguide.css";
import { Link } from "react-router-dom";

export function HandstandGuide() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">handstand guide</div>
        <div className="guide-hero--blurb">
          Welcome to the handstand guide from WINGS. This guide will be a
          comprehensive guide on the path to the freestanding handstand.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">introduction</div>

        <div className="guide-text">
          The handstand is a balance focused skill that involves supporting your
          entire body weight on your hands. On this site, it’s rated C, for high
          beginner, and takes around 2-3 months to learn, given daily training.
          The handstand is a super iconic skill which transfers to many other
          advanced skills, and most importantly, unlocks a prerequisite for the
          HSPU, a shoulder building skill. By learning handstand, you learn
          balance, mobility, and body coordination.
        </div>
        <img
          src="hsForm.png"
          alt="handstand form"
          className="square-guide-image"
        />
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">prerequisites</div>
        <div className="guide-text">
          The handstand is a balanced focused skill, and in reality doesn’t take
          much strength. However, for beginners, the weight of your body is
          usually unfamiliar, and you will need a base strength of being upside
          down without losing stamina or getting sore.
        </div>
        <div className="guide-text">
          The handstand also tests your shoulder mobility. In the handstand, you
          have to be able to raise your arms straight up, almost touching your
          bicep/shoulder to your ears. Without this shoulder mobility, you won’t
          be able to stack your body properly and hold the signature handstand
          line.
        </div>
        <img
          src="hsShoulderMobility.png"
          alt="shoulder mobility"
          className="square-guide-image"
        />
        <div className="guide-caption">Try this stretch to practice shoulder mobility!</div>


        <div className="guide-text">
          Wrist extension is extremely important in the handstand as well. You
          need to be able to pull your wrists back to just around 90 degrees,
          and a bit more if you want to be able to hold yourself up. If your
          wrist extension is poor, consider doing wrist stretching exercises to
          improve the mobility of your wrist.
        </div>
        <img
          src="hsWristExtension.jpg"
          alt="wrist extension"
          className="square-guide-image"
        />
        <div className="guide-caption">Aim for 90 degrees of wrist extension.</div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">learning to fall</div>
        <div className="guide-text">
          One of the biggest limiting factors for people learning the handstand
          is the fear of falling, which is completely understandable. As a
          beginner, the idea of being completely upside down relying only on
          your hands is extremely daunting. But without overcoming this barrier,
          you will probably never be able to learn the handstand.
        </div>
        <div className="guide-text">
          Obviously, the fear is not from falling backward where you can catch
          yourself with your legs; it's from falling forward. The basic step for
          bailing from a handstand are as follows:
          <ul>
            <li>
              When you feel yourself falling forward, move one hand in front of
              you by a couple inches.
            </li>
            <li>Twist your body in that direction as you fall.</li>
            <li>And finally, catch yourself, with either one or two legs.</li>
          </ul>
          This fall seems almost too simple, and it is; the main challenge here
          is getting used to the fall. Try to keep one hand on the ground, the
          one that didn’t move. Also, choose a side to fall on, so you don’t
          have to pick which direction to twist in everytime you’re mid fall.
          Another way to think of the fall is like its the end of the cartwheel.
        </div>
        <div className="guide-text">
          To practice falling, start with using a wall, in a chest-to-wall
          handstand. It doesn’t have to be a completely straight handstand, you
          can be at a 60 degree angle if you wanted to. Choose a progression
          that feels right for you. From this chest-to-wall handstand, simply
          walk a hand forward, and drop the legs on the side where your hand
          moved forward. As you get better, you can make your chest-to-wall
          handstand more and more vertical, and soon, you’ll have the skill to
          bail out of a real handstand. Finally, test that! Kick up into a
          freestanding handstand with the intention to fall forward, and try to
          bail. Only do this when you’re truly ready though; it's easy to injure
          your wrist or hand, or hit something if you fall wrongly.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">handstand technique</div>
        <div className="guide-text">
          When practicing your handstand off and on the wall, aim to include
          these following form cues.
          <ul>
            <li>Straight arms and legs</li>
            <li>Stacked body (wrists, shoulders, hips, knees, feet)</li>
            <li>Elevation (push into the floor, feel tall)</li>
            <li>Look between your hands</li>
            <li>Keep your whole body engaged (arms, abs, glutes)</li>
            <li>Pointed toes (for aesthetics)</li>
          </ul>
          Record yourself doing handstands to understand what your form
          currently looks like, and know if you need to fix anything.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">training the handstand</div>
        <div className="guide-text">
          The first thing to know about training the handstand is that because
          it doesn’t require much muscular strength, you can train it pretty
          frequently, without getting fatigued or having to exert much effort.
          This is why you can aim to train the handstand everyday, if you want
          maximum progress.
        </div>
        <div className="guide-text">
          To begin training, find a wall you can kick up to, and do wall
          handstands with your back to the wall. At first, don’t worry too much
          about balancing, the most important part at this stage is to get used
          to the feeling of being upside down, and getting used to your
          bodyweight and the wrist position of the handstand. Also, focus on
          keeping your body completely straight and in line, and all the other
          form cues of the handstand.
        </div>
        <div className="guide-text">
          Once you’re used to the general handstand movement, you can start
          working on balance. In order to balance, you have to keep your center
          of mass directly above your hands. To do this, you will be using your
          fingers and the heel of your hands. Similar to standing on two feet,
          your fingers should press into the ground when you feel yourself fall
          forward, and you should feel the heel of your palm press into the
          ground when you feel yourself falling back. However, if you stack your
          weight straight onto the heel of your palm, you’d have no control if
          you fell backward, which is why it's better to be leaning a bit
          forward and constantly pushing back with your fingers.
        </div>
        <div className="guide-text">
          To practice this, start your normal back to wall handstand, but with
          your hands just less than a foot away from the wall. Kick up and rest
          your feet on the wall. Then, try to push into the ground with your
          fingers, and balance so that your feet come off the wall. You can also
          practice balancing the opposite way, with your chest to the wall, but
          you have to know how to bail. Starting in a chest-to-wall handstand,
          with your fingers less than half a foot away from the wall, press the
          heel of your palm into the ground and try to find that sweet spot
          where you’re using your fingers to stop yourself from falling forward.
        </div>
        <div className="guide-text">
          After a while, you will feel more and more accommodated to the
          handstand movement. It can take a week to multiple months to learn the
          handstand, depending on training amount, experience, and fitness.
          However, with enough practice and dedication, the handstand is a
          realistic and easily achievable skill for anyone.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">handstand wrap-up</div>
        <div className="guide-text">
          The handstand is an extremely flexible exercise, and once you learn
          the balance, feel free to experiment with it. You can make shapes with
          your legs, arch your back, balance in a pike position, and much more.
          From here, you can also start learning the handstand push-up, another
          staple calisthenics skill. If you really want a challenge, you can try
          learning the one arm handstand. Be warned though, the OAHS truly is a
          whole different beast.
        </div>
        <div className="guide-text">
          Hopefully this guide was helpful in your handstand journey! Best of
          luck!
        </div>
      </div>
      <Footer />
    </>
  );
}
