import BetaDisclaimer from "../components/betadisclaimer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./training.css";
import { Link } from "react-router-dom";

export function Training() {
  return (
    <>
      <Navbar />

      <BetaDisclaimer />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">for beginners</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/beginnerguide" className="guide-link">
                <button className="guide-button">
                  Beginner Guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">calisthenics fundamentals</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/progoverload" className="guide-link">
                <button className="guide-button">
                  Progressive Overload in Calisthenics
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Gym vs Calisthenics
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Full Body vs Split Training
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Rest & Recovery
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Conditioning & Activation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">skill paths</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/pushrmp" className="guide-link">
                <button className="guide-button">
                  Push Roadmap
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/training/pullrmp" className="guide-link">
                <button className="guide-button">
                  Pull Roadmap
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Legs Roadmap
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">trAining 101</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/beginnerworkout" className="guide-link">
                <button className="guide-button">
                  Structuring a Calisthenics Workout (Beginner)
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Structuring a Calisthenics Workout (Intermediate)
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Strengthening your Core
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Training Legs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">skill guides</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/handstandguide" className="guide-link">
                <button className="guide-button">
                  Handstand Guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Planche Guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/training/frontleverguide" className="guide-link">
                <button className="guide-button">
                  Front Lever Guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">nutrition</div>
          <div className="training-column">
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  General Nutrition Guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Bulking vs Cutting guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">Misc. Guides</div>
          <div className="training-column">
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Breaking Through Plateaus
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  Setting Realistic Goals
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">google docs version</div>
          <div className="training-column">
            <div className="item">
              <Link to="https://docs.google.com/document/d/1keXgZXvrRFLEFaAw4keN0_vhmzMaIJ27uA-OcP2Q59A/edit?usp=sharing" className="guide-link">
                <button className="guide-button">
                  Access Google Docs Version
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}
