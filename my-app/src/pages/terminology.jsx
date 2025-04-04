import Navbar from "../components/navbar";
import "./terminology.css";
import TermSectionTitle from "../components/terminology-section-title";
import ShortFormList from "../components/shortformlist";
import TerminologyList from "../components/terminologylist";
import DifficultyToggle from "../components/difficultytoggle";
import Footer from "../components/footer";

export function Terminology() {
  return (
    <>
      <Navbar />
      <div className="intro-block">
        Calisthenics is a relatively niche sport compared to many others, so
        there may be terms you are not familiar with. To use the site as
        effectively as possible, skim over the content here, and feel free to
        come back if necessary!
      </div>
      <TermSectionTitle title="skill shortform" />
      <ShortFormList />
      <TermSectionTitle title="terminology" />
      <TerminologyList />
      <TermSectionTitle title="skill difficulty chart" />

      <div className="svg-gradient-container">
        <svg
          className="svg-gradient"
          viewBox="0 0 2415 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="2415"
            height="80"
            rx="40"
            transform="matrix(1 0 0 -1 0 80)"
            fill="url(#paint0_linear_39_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_39_2"
              x1="0"
              y1="40"
              x2="2415"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B66DA3" />
              <stop offset="1" stopColor="#BBCA88" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <DifficultyToggle />

      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}
