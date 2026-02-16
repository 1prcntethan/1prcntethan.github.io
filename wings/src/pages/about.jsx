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
          WINGS is a platform built to make learning calisthenics more
          accessible, approachable, and beginner-friendly — all while offering a
          clean, minimalistic user experience.
        </p>

        <p>
          When I first started calisthenics, I found it difficult to find
          information on how to train, and I watched countless Youtube videos to
          learn how to train and get where I am today. That experience inspired
          me to build something better — a centralized resource to help
          beginners get started without confusion. That’s how WINGS began.
          <br />
          <br />
          Originally, I built WINGS as a passion project to help me learn React
          and web development. After the product gained traction on Instagram, I
          decided to expand it into a full-fledged website.
          <br />
          <br />
          Yes — this site was built by one person. I’m not a professional web
          developer or a competitive calisthenics athlete. But I’ve been
          training for over two years and have spent that time learning from
          both my own experience and from creators in the space. and
          calisthenics creators. While I can’t guarantee every piece of
          information is perfect, I’ve applied the same knowledge in my own
          training with meaningful results — and I think it can help others too,
          especially beginners.
          <br />
          <br />
          That said, this site is geared more towards beginners and
          intermediates. If you're an advanced athlete and notice any mistakes
          or missing context, please reach out — I'd love to hear your feedback!
          I’m always looking to improve the site and make it more useful for
          everyone.
        </p>

        <p>
          If you’re an experienced athlete, I’d love help creating tutorials for
          more advanced skills or building out detailed training guides. I'm
          also looking for digital artists who can help illustrate anatomy and
          training concepts — extremely simple, clear sketches. Ideally, a
          student who is interested/experienced in calisthenics. As an artist
          myself, I know the value of your work and am happy to discuss
          commission or credit (depending on how the site grows). EMAIL me and
          link your Instagram!
        </p>

        <p>
          Finally, on the dev/design side: if you’re a UX designer, developer,
          or just someone with ideas, I would love to hear your feedback! I'm
          always trying to learn and improve, so any suggestions or constructive
          criticism would be greatly appreciated. 
          <br />
          <br />
          You can find my contact info in the footer!
          <br />
          Thanks for checking out WINGS. Enjoy!
        </p>
      </div>
      <Footer />
    </>
  );
}
