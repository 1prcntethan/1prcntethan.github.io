import Footer from "../../components/footer";
import LineDivider from "../../components/line-divider";
import Navbar from "../../components/navbar";
import "./beginnerguide.css";
import { Link } from "react-router-dom";

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
          the planche,{" "}
          <Link to="/tutorials/fullfl" className="guide-external-link">
            front lever
          </Link>
          , and
          <Link to="/tutorials/handstand" className="guide-external-link">
            {" "}
            handstand.
          </Link>{" "}
          Calisthenics is a great way to build muscle and help you get in shape.
          You’ll also practice balance, flexibility, and muscle coordination.
          Finally, on top of all this, you’ll learn impressive skills to show
          off to your friends!
        </div>

        <img src="straddle HS pic.jpg" className="guide-image" />
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
          require a
          <Link
            to="https://www.amazon.com/s?k=pullup+bar&ref=nav_bb_sb"
            className="guide-external-link"
          >
            pullup bar
          </Link>
          or
          <Link
            to="https://www.amazon.com/s?k=dip+bar&crid=2XWH0940BI244&sprefix=dip+b%2Caps%2C203&ref=nb_sb_noss_2"
            className="guide-external-link"
          >
            dip bar
          </Link>
          of sorts, but those are usually under $100. If you watch athletes on
          social media, they commonly use
          <Link
            to="https://www.amazon.com/s?k=paralletes&dc&ref=a9_asc_1"
            className="guide-external-link"
          >
            parallettes.
          </Link>
          These aren’t necessary, but they do help alleviate wrist strain and
          give extra elevation.
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
          WINGS site. For example, the{" "}
          <Link to="/tutorials/fullfl" className="guide-external-link">
            front lever
          </Link>{" "}
          is listed as 1 - 2 years to learn. This is just a general estimate,
          assuming average training intensity and average genetics. However,
          <strong> height</strong> and <strong>starting weight</strong> also play a role. Shorter people have an
          advantage in lever skills like the front lever, while taller people
          are disadvantaged. Additionally, with skills being based on
          bodyweight, skills are more challenging for heavier people and easier
          for lighter people. That being said, almost all skills are completely
          attainable, it’s a matter of <strong>time and effort</strong>.
        </div>
        <div className="guide-text">
          The most important aspect of calisthenics training, and almost any
          type of training or sport in general is <strong>consistency</strong>. You could read
          this entire site. You can watch every YouTube tutorial on the planet.
          But you won’t get anywhere by skipping every other day, or not eating
          right. You have to show up. <strong>Consistently</strong>. In fact, you don’t even have to
          train super seriously or go crazy with the science based training.
          Simply by showing up and working out everyday, you will make progress.
          Look at calisthenics as a fun activity, which it is! Set a routine and
          a block of time dedicated to working out. Remember, there are no
          shortcuts to success.
        </div>
        <div className="guide-text">
          Bonus tip: Every seasoned calisthenics creator and athlete will say
          the same thing. <strong>Film yourself</strong>. Consistently record yourself doing your
          exercises and skills. It doesn’t matter if you’re a beginner, or if
          you only have tuck planche. Record it all! Having recordings of
          yourself to look at will be a huge help when identifying issues with
          your form, and it’ll help you fix it. Also, having an extensive log of
          your exercises will allow you to visibly see progress as you get
          stronger. Trust me, anyone who didn’t record their journey deeply
          regrets it.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">the foundation</div>
        <div className="guide-text">
          The optimal pathway for calisthenics starts with mastering the basics
          and building a strong foundation before chasing any skills.
        </div>
        <div className="guide-text">
          Push (
          <Link to="/tutorials/pushup" className="guide-external-link">
            Push-ups
          </Link>
          ,{" "}
          <Link to="/tutorials/dip" className="guide-external-link">
            Dips
          </Link>
          )
          <br />
          Pull (
          <Link to="/tutorials/pullup" className="guide-external-link">
            Pull-ups
          </Link>
          ,{" "}
          <Link to="/tutorials/invertedrow" className="guide-external-link">
            Inverted Rows
          </Link>
          )
          <br />
          Core (Planks, Hollow Body Holds)
          <br />
          Squats (Bodyweight Squats)
        </div>
        <div className="guide-text">
          This is actually a common mistake many beginners make; they want to
          learn skills and jump right into the progressions. The problem with
          this is that beginners usually don’t have the strength to do
          progression holds for productive amounts of time or volume. Instead,
          building muscle and conditioning your body first allows you to hold
          these progressions for meaningful amounts of time.
        </div>
        <div className="guide-text">
          Additionally, you want to lean toward the hypertrophy side of training
          when first starting out. This is to gain a baseline of muscle, which
          later on, you can train to do specific things like skills. But it all
          starts with muscle mass. As you become more experienced, expect to
          shift toward the strength training rep ranges, and begin skill
          training.
        </div>
        <div className="guide-text">
          Here are some general goals for each exercise to start:
          <br />
          <br />
          20{" "}
          <Link to="/tutorials/pushup" className="guide-external-link">
            push-ups
          </Link>
          <br />
          10{" "}
          <Link to="/tutorials/pullup" className="guide-external-link">
            pull-ups
          </Link>
          <br />
          15{" "}
          <Link to="/tutorials/dip" className="guide-external-link">
            dips
          </Link>
          <br />
          20{" "}
          <Link to="/tutorials/invertedrow" className="guide-external-link">
            inverted rows
          </Link>
          <br />
          30s hollow body hold
          <br />
          20s L-sit
          <br />
          20 squats
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">how to start training</div>
        <div className="guide-text">
          For beginners, full body workouts are easier to coordinate and
          implement. This workout will be done roughly 3 times a week, resting
          as your body sees fit. 3-5 minute rest between sets!
        </div>
        <div className="guide-text">
          For warm-up, try wrist stretches and exercises, arm circles for the
          shoulders, and dynamic lunging stretches for the legs.
          <br />
          Start training right away with this beginner workout plan!
        </div>
        <div className="guide-text">
          PUSH
          <br />3 x 12 of the hardest push-up variation you can do 12 of. (Knee
          Push-ups, Wall Push-ups, Incline Push-ups, Regular{" "}
          <Link to="/tutorials/pushup" className="guide-external-link">
            Push-ups
          </Link>
          ,
          <Link to="/tutorials/psuedopu" className="guide-external-link">
            Psuedo Push-ups
          </Link>
          , etc.)
        </div>
        <div className="guide-text">
          PULL <br />3 x 12 of the hardest pulling exercise you can do 12 of. (
          <Link to="/tutorials/invertedrow" className="guide-external-link">
            Inverted Row
          </Link>
          ,{" "}
          <Link to="/tutorials/assistpullup" className="guide-external-link">
            Assisted Pull-up
          </Link>
          ,{" "}
          <Link to="/tutorials/pullup" className="guide-external-link">
            Pull-up
          </Link>
          )
        </div>
        <div className="guide-text">
          CORE <br />4 hollow body holds almost to failure. (3 x 12 sit-ups &
          leg raises are alternative exercises)
        </div>
        <div className="guide-text">
          LEGS <br />3 x 12 body weight squats (use a chair/assistance if too
          hard)
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">beginner mistakes</div>
        <div className="guide-text">
          If you’re completely new to fitness, a foundational base of strength
          will greatly accelerate your progress. Don’t jump straight into skills
          unless you have previous experience working out or lifting.
        </div>
        <div className="guide-text">
          Overtraining happens when you push yourself <strong>too far</strong>, whether it be too
          much volume or intensity. For calisthenics, we focus mostly on
          strength, which is the 4-8 rep range, give or take. This means that
          doing 20 reps is considered endurance, and won’t contribute much
          significant progress to building strength. Additionally, overtraining
          <strong> volume</strong> is extremely likely to make you sore, which can sometimes
          affect your next session and prevent you from training at 100%.
          Overtraining <strong>intensity</strong> means you’re doing too many exercises to their
          max, and overall, you can’t accumulate enough volume. For
          calisthenics, aim to be doing your workouts at 80-90%, so close to
          failure but not completely.
        </div>
        <div className="guide-text">
          Form is a very important part of calisthenics. Not following form can
          get you <strong>injured</strong>, or build bad habits that are hard to break. Be
          patient with progressions and make sure you can hold them with good
          form before you move on. There are exceptions though. While focusing
          on form is good, there is a place for bad form, like when you’re first
          learning a progression or exercise. You can’t focus on form all the
          time, and sometimes it's okay to trade form for longer hold times or
          higher intensity.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">nutrition for calisthenics athletes</div>
        <div className="guide-text">
          As with any sport, diet is what will determine your success. Even
          without exercising, having a good diet is beneficial to your physical
          health and mental health in many ways.
        </div>
        <div className="guide-text">
          Protein is probably the most important factor for building muscle and
          strength in calisthenics. <strong>1g/lb or 2.2g/kg of bodyweight</strong> is a good benchmark for
          how much protein you should be eating everyday. There is some wiggle
          room, and at minimum try to meet the <strong>0.8g/lb or 1.8g/kg</strong> mark. This protein is
          absolutely necessary for your body to recover and build muscle. There
          is an upper limit for protein, and it’s pretty high, but if you do
          cross that threshold frequently, you might experience some serious
          health issues. That threshold is around <strong>1.2g/lb or 2.65g/kg of bodyweight</strong>.
          <br />
          <Link
            to="https://learn.athleanx.com/calculators/protein-calculator"
            className="guide-external-link"
          >
            AthleanX Protein Calculator
          </Link>
        </div>
        <div className="guide-text">
          For carbohydrates/fats, aim to eat as <strong>healthy</strong> as possible. This means
          sticking to complex carbohydrates (brown rice, oats, potatoes), and
          healthy fats (avocado, olive oil, nuts, fatty fish). Having a healthy
          body and healthy diet will benefit you in more than your calisthenics
          training. But when you first start out, don’t do a complete 180 from
          your original diet. Forcing yourself to eat clean is hard, especially
          when it’s something new. Start by making slow changes. Switch foods
          out one by one, and allow yourself to cheat meals from time to time.
          This will ensure you don’t revert back to a bad diet, or tarnish your
          relationship with food. And always remember to listen to your body.
        </div>
        <div className="guide-text">
          Body composition is a <strong>huge factor</strong> when learning calisthenics skills.
          Since the difficulty is based on your bodyweight, the lighter you are,
          the easier skills will be. This is why all the top calisthenics
          athletes are lean and muscular, since that is the optimal body type
          for the best performance. This means that if you’re overweight, you
          should aim to eat in a calorie deficit. If you’re at a normal weight,
          eat enough to maintain it. And if you’re underweight, you should eat
          in a slight calorie surplus, until you feel like you’re in a healthy
          spot. You can figure out where you are on this spectrum using your
          BMI. It definitely <strong>isn't</strong> accurate, but it gives you a general ballpark
          of what you should be doing.
          <br />
          <Link
            to="https://www.calculator.net/bmi-calculator.html"
            className="guide-external-link"
          >
            Calculator.net BMI Calculator
          </Link>
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">calisthenics myths & misconceptions</div>
        <div className="guide-text">
          “Calisthenics doesn’t build muscle” <br />
          If you’re trying to build muscle with calisthenics, don’t worry.
          <strong> Calisthenics does build muscle</strong>. While the main focus of calisthenics
          isn’t to build muscles, any increase in strength will always come with
          an increase in muscle; it’s just how the body works. If you really
          wanted, you could also start weighted calisthenics, which promotes
          more straightforward muscle growth.
        </div>
        <div className="guide-text">
          “You need weights for real strength” <br />
          In calisthenics, you will probably only be pushing your body weight.
          While that’s true, that doesn’t mean you won’t build the strength to
          push more than that. Calisthenics mainly builds <strong>relative strength</strong>,
          relative to your body weight. However, by using leverages, we can
          build muscle that pushes an equivalent of much more weight. Also, with
          weighted calisthenics, we can increase our body weight and make
          exercises even more challenging.
        </div>
        <div className="guide-text">
          “You must train every day” <br />
          Training everyday may work for some people, but for the majority of
          people, training everyday can be detrimental for your
          progress. Your body needs time to <strong>rest and recover</strong>, in order to heal
          and adapt to the stimulus you provide it. When programming,
          incorporate rest days into your plan to give your body a much needed
          break.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">next steps</div>
        <div className="guide-text">
          And that’s it! With all this information, you now know the tip of the
          iceberg that calisthenics has to offer. From here, you should check
          out the fundamental guides at your leisure, and start your
          calisthenics training sessions with the plan above. Take a look at the
          <Link to="/terminology" className="guide-external-link">
            Terminology
          </Link>{" "}
          page to familiarize yourself with calisthenics lingo and determine
          your skill level. Also, choose your <strong>target skills</strong>, the skills you want
          to be doing 2 or 3 years down the road. Make sure to choose 1 primary
          push skill and 1 primary pull skill. Any more might split your focus
          and training too much to make any meaningful progress. There are also
          calisthenics communities online you can join and follow, like on
          Discord or Instagram. Finally, make sure to stay patient, listen to
          your body, and <strong>enjoy the process</strong> the whole way.
        </div>
      </div>
      <Footer />
    </>
  );
}
