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
          <div className="training-header">For Beginners</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/beginnerguide" className="guide-link">
                <button className="guide-button">
                  beginner guide
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
          <div className="training-header">Calisthenics Fundamentals</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/progoverload" className="guide-link">
                <button className="guide-button">
                  progressive overload in calisthenics
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  gym vs calisthenics
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  full body vs split training
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  rest & recovery
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  conditioning & activation
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
          <div className="training-header">Skill Paths</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/pushrmp" className="guide-link">
                <button className="guide-button">
                  push roadmap
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  pull roadmap
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  legs roadmap
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
          <div className="training-header">Training 101</div>
          <div className="training-column">
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  structuring a calisthenics workout (beginner)
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  structuring a calisthenics workout (intermediate)
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  strengthening your core
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  training legs
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
          <div className="training-header">Skill Guides</div>
          <div className="training-column">
            <div className="item">
              <Link to="/training/handstandguide" className="guide-link">
                <button className="guide-button">
                  handstand guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  planche guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  front lever guide
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
          <div className="training-header">Nutrition</div>
          <div className="training-column">
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  general nutrition guide
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  bulking vs cutting guide
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
                  breaking through plateaus
                </button>
              </Link>
            </div>
            <div className="item">
              <Link to="/tutorials/incomplete" className="guide-link">
                <button className="guide-button">
                  setting realistic goals
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
          <div className="training-header">Google Docs version</div>
          <div className="training-column">
            <div className="item">
              <Link to="https://docs.google.com/document/d/1keXgZXvrRFLEFaAw4keN0_vhmzMaIJ27uA-OcP2Q59A/edit?usp=sharing" className="guide-link">
                <button className="guide-button">
                  access google docs version here
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
