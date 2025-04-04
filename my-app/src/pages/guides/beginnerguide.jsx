import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./beginnerguide.css";

export function BeginnerGuide() {
  return (
    <>
      <Navbar />
      <div className="guide-hero">
        <div className="guide-hero--title">beginner guide</div>
        <div className="guide-hero--blurb">
          Welcome to the calisthenics beginner guide from WINGS. This guide is
          meant for those who are completely new to calisthenics, or have just
          started.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">intro</div>

        <div className="guide-text">
          First off, what is calisthenics and why is it worth investing your
          time? Calisthenics is a broad term for bodyweight exercises, and
          includes calisthenics skills, freestyle calisthenics, and weighted
          calisthenics. This site will mainly cover calisthenics skills, like
          the planche, front lever, and handstand. Calisthenics is a great way
          to build muscle and help you get in shape. You’ll also practice
          balance, flexibility, and muscle coordination. Finally, on top of all
          this, you’ll learn impressive skills to show off to your friends!
        </div>
        <br />

        <div className="guide-text">
          Calisthenics is a journey. If you have no prior athletic background,
          it will take multiple years to learn the most elite skills. Despite
          this, there are still skills you can learn in a couple months, and if
          you train right, you can shorten the time it takes to learn skills.
        </div>
        <br />

        <div className="guide-text">
          Equipment in calisthenics is extremely minimal. Pretty much all push
          skills can be learned on the floor in a cleared area. Pull skills
          require a pull-up bar or dip bar of sorts, but those are usually under
          $100. If you watch athletes on social media, they commonly use
          parallettes. These aren’t necessary, but they do help alleviate wrist
          strain and give extra elevation.
        </div>
        <br />

        <div className="guide-text">
          Calisthenics skills may look intimidating at first, but there’s a
          progression for any strength level, and as long as you are consistent
          in your training, you will build strength and make progress.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">the reality of progress</div>
        <div className="guide-text">
          If you’re new to calisthenics, chances are you discovered it through
          social media. The skills shown on social media however, are typically
          extremely advanced skills and take multiple years to achieve. You can
          find the time it takes to learn a skill on every skill tutorial on the
          WINGS site. For example, the front lever is listed as 1 - 2 years to
          learn. This is just a general estimate, assuming average training
          intensity and average genetics. However, height and starting weight
          also play a role. Shorter people have an advantage in lever skills
          like the front lever, while taller people are disadvantaged.
          Additionally, with skills being based on bodyweight, skills are more
          challenging for heavier people and easier for lighter people. That
          being said, almost all skills are completely attainable, it’s a matter
          of time and effort.
        </div>
        <div className="guide-text">
          The most important aspect of calisthenics training, and almost any
          type of training or sport in general is consistency. You could read
          this entire site. You can watch every YouTube tutorial on the planet.
          But you won’t get anywhere by skipping every other day, or not eating
          right. You have to show up. Every day. In fact, you don’t even have to
          train super seriously or go crazy with the science based training.
          Simply by showing up and working out everyday, you will make progress.
          Look at calisthenics as a fun activity, which it is! Set a routine and
          a block of time dedicated to working out. Remember, there are no
          shortcuts to success.
        </div>
      </div>
    </>
  );
}
