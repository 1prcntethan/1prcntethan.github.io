import Navbar from "../components/navbar";
import "./training.css"
import { Link } from "react-router-dom";

export function Training() {
  return (
    <>
      <Navbar />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">For Beginners</div>
          <div className="training-column">
            <div className="item">
              <Link to ="/training/beginnerguide" className="guide-link"><button className="guide-button">~ beginners start here ~</button></Link>
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
              <button className="guide-button">
                progressive overload in calisthenics
              </button>
            </div>
            <div className="item">
              <button className="guide-button">strength vs hypertrophy</button>
            </div>
            <div className="item">
              <button className="guide-button">gym vs calisthenics</button>
            </div>
            <div className="item">
              <button className="guide-button">full-body vs split training</button>
            </div>
            <div className="item">
              <button className="guide-button">rest & recovery</button>
            </div>
            <div className="item">
              <button className="guide-button">conditioning & activation</button>
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
              <button className="guide-button">push skills</button>
            </div>
            <div className="item">
              <button className="guide-button">pull skills</button>
            </div>
            <div className="item">
              <button className="guide-button">leg skills</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="flex-container">
        <div className="training-container">
          <div className="training-header">Workout Structures</div>
          <div className="training-column">
            <div className="item">
              <button className="guide-button">
                structuring a calisthenics workout
              </button>
            </div>
            <div className="item">
              <button className="guide-button">strengthening your core</button>
            </div>
            <div className="item">
              <button className="guide-button">training legs</button>
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
              <button className="guide-button">general nutrition guide</button>
            </div>
            <div className="item">
              <button className="guide-button">bulking vs cutting</button>
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
              <button className="guide-button">breaking through a plateau</button>
            </div>
            <div className="item">
              <button className="guide-button">setting realistic goals</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
