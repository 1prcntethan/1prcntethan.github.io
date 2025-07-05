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
          Welcome to the push roadmap from WINGS. This guide will cover the
          optimal path for learning push skills, what you’ll train, and how
          you’ll build all the way up to the full planche.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">beginner push</div>

        <div className="guide-text">
          Pushing skills in calisthenics are the most common exercise, and
          you’ve probably done them ever since you were born. The most basic of
          these is the standard <Link to="/tutorials/pushup" className="guide-external-link">
            push-up
          </Link>, and that’s also where we start your
          calisthenics push journey. When you’re a beginner, you should be
          building <strong>basic push strength</strong>, and this can be done by maxing out all
          the push-up variations. Incline, Decline, Diamond, Wide, Close, etc.
          Aim to be comfortable to rep out 15 of any of these, and you’ll
          already have a super strong base for push skills. Most of these
          push-ups target the chest, triceps, and shoulders. Once you hit a
          certain level, you’ll also build the strength to start training <Link to="/tutorials/dip" className="guide-external-link">
            dips
          </Link>.
        </div>

        <div className="guide-text">
          As you become more confident in your push training, you can move on to
          upper level beginner push skills. This means <Link to="/tutorials/pikepu" className="guide-external-link">
            Pike Push-ups
          </Link>, <Link to="/tutorials/planchelean" className="guide-external-link">
            Planche Leans
          </Link>, and <Link to="/tutorials/pseudopu" className="guide-external-link">
            pseudo Planche Push-ups
          </Link>. For this phase, these three
          exercises will be your bread and butter. As you begin to experiment with
          static exercises, you’ll start with the <Link to="/tutorials/crowpose" className="guide-external-link">
            Crow Pose
          </Link> and <Link to="/tutorials/assistedhs" className="guide-external-link">
            Assisted Handstands
          </Link>,
          building up the strength and balance to hold a <Link to="/tutorials/handstand" className="guide-external-link">
            Handstand
          </Link>. To build
          planche strength, you’ll also start using both <Link to="/tutorials/planchelean" className="guide-external-link">
            Dynamic/Static Planche
          </Link> Leans. During this time, focus on keeping your elbows locked out for
          straight arm skills, and keeping <strong>scapular protraction and depression </strong>
          when working with planche related skills.
        </div>
      </div>

      <LineDivider />

      <div className="guide-container">
        <div className="guide-heading">intermediate push</div>
        <div className="guide-text">
          By working consistently with <Link to="/tutorials/pikepu" className="guide-external-link">
            Pike Push-ups
          </Link> and <Link to="/tutorials/pseudopu" className="guide-external-link">
            Pseudo PL Push-ups
          </Link>, you
          will start developing that <strong>solid base</strong> of shoulder strength required
          for harder skills. Once you unlock the <Link to="/tutorials/handstand" className="guide-external-link">
            Handstand
          </Link>, you have now passed
          the prerequisite for the HSPU. During the first part of this phase,
          you should be <strong>primarily training for the HSPU</strong>. Why? The HSPU builds
          essential shoulder strength and coordination, which will allow for
          easier planche training in the future. Plus, the HSPU is such a cool
          skill, there’s no reason to skip it. However, don’t neglect straight
          arm strength during this time, make sure to throw in <Link to="/tutorials/handstand" className="guide-external-link">
            Planche Leans
          </Link> and
          <Link to="/tutorials/advtuckpl" className="guide-external-link">
            Adv. Tuck Planche
          </Link> from time to time, without focusing on it.
        </div>
        <div className="guide-text">
          Can you train and go for planche instead? The short answer is yes. You
          can train planche progressions, leans, holds etc. and you would see
          progress. However, training planche requires immense shoulder
          strength, something you don’t really have with just Pike Push-ups and
          Pseudo PL Push-ups. Arguably, training HSPU allows you to build the
          shoulder strength that carries over to planche, without dealing with
          all the other problems that planche brings.
          <br />
          (Disclaimer: this pathway will be different for everyone; some people
          will have much more success training planche than HSPU)
        </div>
        <div className="guide-text">
          Training HSPU will involve lots of <Link to="/tutorials/pikepu" className="guide-external-link">
            Pike Push-ups
          </Link>, <Link to="/tutorials/assistedhspu" className="guide-external-link">
            CTW HSPU
          </Link>, <Link to="/tutorials/bas" className="guide-external-link">
            bent arm stand 
          </Link>
          , and practicing the transitions between the HS and the bent arm
          stand. Eventually, the HSPU will feel closer and closer, until you are
          comfortable repping at least 3-5 HSPUs.
        </div>
        <div className="guide-text">
          Obviously, you want planche in the end. It’s the most coveted skill in
          the calisthenics world, and for good reason. After your focus on HSPU
          training, your shoulders should be pretty solid, and you should have
          earned almost a free Adv. Tuck PL or maybe even <Link to="/tutorials/straddlepl" className="guide-external-link">
            Straddle PL
          </Link>. You may
          not have fully mastered HSPU, but you don’t need to master it to start
          planche now. Ideally, you pick to focus efforts on the HSPU or planche
          training here. If you choose to continue and finish the HSPU, it comes
          down to shoulder strength, attempts, and finding your HSPU groove.
          However, it’s at this point where most people choose to focus on
          planche training.
        </div>
      </div>
      <LineDivider />
      <div className="guide-container">
        <div className="guide-heading">advanced push</div>
        <div className="guide-text">
          Your planche training should be extremely straightforward. Your
          primary exercise should be the <strong>hardest</strong>, <strong>most specific</strong> planche
          variation you can hold for <strong>meaningful</strong> amounts of time. This means <Link to="/tutorials/advtuckpl" className="guide-external-link">
            Adv. Tuck PL
          </Link>, or maybe <Link to="/tutorials/straddlepl" className="guide-external-link">
            Straddle PL
          </Link>. Next, <strong>maintain intensity</strong>, and switch to
          banded holds, or dynamic raises. Throw in some volume work like HSPU,
          and accessory work to end sessions, and you’ll have built a solid
          routine for training planche. The gains will slowly but surely come.
        </div>
        <div className="guide-text">
          Planche is an incredibly complex skill, and it’s important to
          understand the basic <strong>activations</strong> required for it. This means thinking
          about shoulder protraction/depression, lower back activation, keeping
          tight glutes and PPT. All of these things can be practiced through
          <strong> accessory exercises</strong>, like planche leans, back extensions, and hollow
          body holds. Overall, this will contribute to a more aesthetic and
          satisfying planche in the future. As you slowly build planche
          strength, you’ll progress through the Straddle PL, Halflay PL, and
          finally, Full Planche. From here, you can do anything! Experiment with
          finger planche, finger HSPU, or try harder skills like Maltese and
          Dragon Planche. The sky’s the limit.
        </div>
      </div>
      <Footer />
    </>
  );
}
