import Navbar from "../components/navbar";
import "./training.css"

export function Training() {
  return (
    <>
      <Navbar />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">For Beginners</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">~ beginners start here ~</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">Calisthenics Fundamentals</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">
                progressive overload in calisthenics
              </button>
            </div>
            <div class="item">
              <button class="guide-button">strength vs hypertrophy</button>
            </div>
            <div class="item">
              <button class="guide-button">gym vs calisthenics</button>
            </div>
            <div class="item">
              <button class="guide-button">full-body vs split training</button>
            </div>
            <div class="item">
              <button class="guide-button">rest & recovery</button>
            </div>
            <div class="item">
              <button class="guide-button">conditioning & activation</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">Skill Paths</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">push skills</button>
            </div>
            <div class="item">
              <button class="guide-button">pull skills</button>
            </div>
            <div class="item">
              <button class="guide-button">leg skills</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">Workout Structures</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">
                structuring a calisthenics workout
              </button>
            </div>
            <div class="item">
              <button class="guide-button">strengthening your core</button>
            </div>
            <div class="item">
              <button class="guide-button">training legs</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">Nutrition</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">general nutrition guide</button>
            </div>
            <div class="item">
              <button class="guide-button">bulking vs cutting</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="flex-container">
        <div class="training-container">
          <div class="training-header">Misc. Guides</div>
          <div class="training-column">
            <div class="item">
              <button class="guide-button">breaking through a plateau</button>
            </div>
            <div class="item">
              <button class="guide-button">setting realistic goals</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
