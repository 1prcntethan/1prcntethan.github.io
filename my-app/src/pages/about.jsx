import BetaDisclaimer from "../components/betadisclaimer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import "./about.css";

export function About() {
  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="about-text">
        <div className="about-title">about this website</div>
        <p>
          The goal of WINGS is to create a one stop shop for learning calisthenics,
           making it accessible and approachable for everyone while giving 
          the user a minimalistic and clean experience. 
        </p>

        <p>
          When I first started calisthenics, I found it difficult to find
          information on how to train, and I watched countless Youtube videos
          to learn how to train and get where I am today. I wanted to create a
          website that would help beginners learn calisthenics and make it
          accessible for everyone. Thus, WINGS was created. Originally a passion
          project, it was just a small project to help me learn React and basic webdev, but after its initial
          popularity on Instagram, I decided to expand it into a full website.
          <br />
          <br />
          Yes, one person created this website, and I am NOT a professional web
          developer, nor am I a professional calisthenics athlete. That being
          said, I have been training calisthenics for 2.5 years and have
          learned a lot about calisthenics through my own experience, and
          calisthenics creators. I am not a professional, so I cannot guarantee
          that the information on this website is 100% accurate. However, I have
          been using the same information in my own training and have made
          significant progress, which is why I believe that beginners will still
          find this information valuable. Because of my limited experience, I
          believe this website is best suited for beginners and intermediates,
          not for advanced athletes. If you are an advanced athlete, and see any
          mistakes or false information, please let me know so I can fix it!
        </p>

        <p>
          If there are any advanced athletes who would like to help me with the
          website, I would love to collaborate with you! I am looking for people
          who can help me with creating skill tutorials for the more advanced
          skills and creating guides for the training section. If you are
          interested, please reach out to me through EMAIL, linking your
          Instagram or Youtube account (Instagram DMs get buried). I am also
          looking for aspiring digital artists who can help draw simple anatomy
          and diagrams for the guides, ideally a student who is
          interested/experienced in calisthenics. They will literally be
          straightforward sketches. As an artist myself, I know how many artists
          use commissioning as a way to make money, so I am willing to negotiate
          commission/crediting for your work (depending on the profitibility of
          the site). EMAIL me and link your Instagram!
        </p>

        <p>
          Finally, on the CS side of things, if there are any UX designers,
          professional web developers, or anyone else knowledgeable in this
          field, I would love to hear your feedback!
          I'm always trying to learn and improve, so any suggestions or
          constructive criticism would be greatly appreciated. Contact info is 
          in the footer!
        </p>
      </div>
      <Footer />
    </>
  );
}
