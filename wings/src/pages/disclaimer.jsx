import BetaDisclaimer from "../components/betadisclaimer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import "./disclaimer.css";

export function Disclaimer() {
  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="disclaimer-text">
        <div className="disclaimer-title">disclaimer</div>
        <p>
          The information provided on this website is for general informational
          purposes only and is not intended as a substitute for professional
          medical advice, diagnosis, or treatment.
          <br />
          Always consult with a qualified healthcare provider before beginning
          any fitness program, especially if you have any pre-existing health
          conditions or injuries.
          <br />
          All workouts, progressions, and recommendations are performed at your
          own risk. We do not assume any responsibility for injury, loss, or
          damage resulting from your use of this site or the exercises
          demonstrated.
          <br />
          This site is not affiliated with any medical or fitness organizations.
          <br />
          All content is original or credited. Unauthorized use or
          redistribution of content is not allowed.
          <br />
          Donations made through this site are voluntary and non-refundable.
          They support the continued development of content and resources.
          <br />
          By using this site, you agree to these terms.
        </p>
      </div>
      <Footer />
    </>
  );
}
