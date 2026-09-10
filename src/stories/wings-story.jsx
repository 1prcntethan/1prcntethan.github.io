import "./wings-story.css"; // scoped to this page only
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WingsStory({ onExit }) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="wings-story-container" // styled entirely in wings-story.css
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="wings-navbar">
            <button
              className="wings-story-close"
              onClick={() => {
                setVisible(false);
                onExit();
              }}
            >
              back
            </button>
            <div className="wings-nav-right">
              <a
                href="https://github.com/1prcntethan/wings"
                className="wings-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                href="https://wingssw.com/"
                className="wings-live"
                target="_blank"
                rel="noopener noreferrer"
              >
                live
              </a>
            </div>
          </div>
          <div className="wings-beta-disc">
            <div className="scroll">
              <div className="beta-disclaimer-text">
                welcome to the wings project page where you can see the entire
                build process of wings. (wip) welcome to the wings project page
                where you can see the entire build process of wings. (wip)
                welcome to the wings project page where you can see the entire
                build process of wings. (wip)
              </div>
            </div>
          </div>

          <div className="wings-landing">
            welcome to <span className="wings-title">wings.</span>
          </div>
          <div className="wings-divider-line"></div>
          <div className="wings-content-twocol wings-image-right">
            <div className="wings-text">
              {/* <div className="wings-section-label">origins_</div> */}
              <p>
                WINGS started before I could really call myself a developer. I
                was teaching myself HTML and CSS from scratch, learning
                flexboxes, the infinite CSS stylings, and overall just playing
                around and getting more comfortable with static webdev. And
                while I was learning these basics, I wanted to think of an idea,
                something I could build as a fun project to help me practice
                what I learned. The first thing that came to mind was a website for
                calisthenics, a sport I was (and still am) very passionate
                about.
              </p>
              <p>
                Before writing a line of the real thing, I starting with
                planning the page structure, the layout, and the color scheme I
                wanted to use. As you can see in the image to the right, I
                really was completely brand new to everything.
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldstructure.png"
                alt="Early WINGS Figma mockup"
              />
            </div>
          </div>

          <div className="wings-content-twocol wings-image-left">
            <div className="wings-image">
              <img src="/wingsoldcolor.png" alt="Early WINGS color scheme" />
            </div>
            <div className="wings-text">
              <p>
                And thank goodness I got better because look at this color
                palette...
              </p>
            </div>
          </div>

          <div className="wings-content-center">
            <p>
              The main goal I was hoping to achieve with this project was to
              create a guide for calisthenics. I actaully based it and its
              structure of an existing website, Trixnut, a website built as a
              guide to tricking. As I update this though, it looks like it
              shutdown. Regardless, I wanted to create a similar experience for
              calisthenics, a site that showcased a huge variety of exercises,
              with progressions, tips, tricks, and resources for atheltes to
              learn from.
            </p>
          </div>
          <div className="wings-divider-line"></div>
          <div className="wings-content-twocol wings-image-right">
            <div className="wings-text">
              {/* <div className="wings-section-label">origins_</div> */}
              <p>
                I continued through the summer of 2024, on and off, learning
                about HTML/CSS and using Figma to make outlines of what I wanted
                the site to look like.
              </p>
              <p>
                Because of this experience, I had a lot of trial and error,
                looking at different websites that looked good, and learning
                clean UX/UI principles. But of course, a beginner can only do so
                much.
              </p>
            </div>
            <div className="wings-image">
              <img src="/wingsoldhero.png" alt="Early WINGS hero mockup" />
            </div>
          </div>
          <div className="wings-content-center">
            <p>
              I eventually split the tab structure of WINGS into a homepage,
              tutorial page, individual guides, and terminology. Here are their
              early mockups on Figma below.
            </p>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-image">
              <img
                src="/wingsoldguidestructure.png"
                alt="Early WINGS guide structure"
              />
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldtutorial.png"
                alt="Early WINGS skill tutorial"
              />
            </div>
          </div>

          <div className="wings-content-twocol wings-image-right">
            <div className="wings-text">
              <p>
                Soon, I began actually coding the site, on your standard static
                HTML/CSS. I was able to replicate the structure I had made in
                Figma, and I was able to make a lot of progress. These colors
                sucked though (evidently).
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldcolorhomepage.png"
                alt="Early WINGS hero page"
              />
            </div>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-text">
              <p>
                And the tutorial page, which was the main focus, had finally
                taken structure.
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldcolortutorialpage.png"
                alt="Early WINGS tutorial page"
              />
            </div>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-text">
              <p>
                Thankfully, I did end up changing the color scheme, and I chose
                a dark theme, minimalist look.
              </p>
            </div>
            <div className="wings-image">
              <img src="/wingsnewcolor.png" alt="Early WINGS color update" />
            </div>
          </div>
          <div className="wings-content-twocol wings-image-right">
            <div className="wings-text">
              <p>
                Now we're getting somewhere. The tutorial page was starting to
                look somewhat better. I learned to use flexboxes for the columns
                here, but later on I'd realize how badly I'd designed it. But
                for now, it looked good.
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wingstutorialpageold.png"
                alt="Early WINGS tutorial page"
              />
            </div>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-text">
              <p>
                I also began working on the individual guides, which were each
                their own page, and all were handwritten.
              </p>
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldskillpagepre.png"
                alt="Early WINGS skill page"
              />
            </div>
          </div>
          <div className="wings-content-center">
            <p>
              As I continued building, I learned to use Figma to design SVGS.
              These svgs would end up being used everywhere, especially for the
              classic icons that WINGS uses to visually represent all its
              exercises. And yes, it took me a long long time to make all of
              thes svgs, especially as I added more and more skills. I also
              added the terminology page, which had definitions and
              abbreviations defined for beginners.
            </p>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-image">
              <img
                src="/wingsskillpagelandingold.png"
                alt="Early WINGS skill page landing"
              />
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldprogchart.png"
                alt="Early WINGS skill prog chart"
              />
            </div>
          </div>
          <div className="wings-content-twocol wings-image-left">
            <div className="wings-image">
              <img
                src="/wingsoldskilldiffchart.png"
                alt="Early WINGS skill diff chart"
              />
            </div>
            <div className="wings-image">
              <img
                src="/wingsoldtermpage.png"
                alt="Early WINGS terminology page"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
