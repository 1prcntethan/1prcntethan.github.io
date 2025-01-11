import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function CrowPose() {
    return (
        <>
            <Navbar />
            <SkillHero title="crow pose" identifier="crow-pose"/>
            {svgDivider.get("0")}
            <div className="skill-info-container"> 
                <div className="skill-info">
                    <div className="skill-section-title">
                    overview
                    </div>
                    <div className="difficulty-muscle">
                        <div className="skill-difficulty">
                            <Link to = "/Terminology" className="link-text" >
                            Skill Difficulty: C
                            </Link>
                            <br />
                            <p>Targeted Muscles: Shoulders, Arms, Chest, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Crow Pose is a regression exercise for learning the balance required for a handstand. When performing this exercise on the floor, consider warming up your wrists, especially if you're a complete beginner.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Crow Pose
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a squat position with your hands shoulder-width apart, and hands facing forward or alternatively slightly outward.</li> 
                                        <li>Press your hands into the floor, while lifting your hips and tucked knees up.</li> 
                                        <li>Keep your elbows bent, and rest your knees on your elbows.</li> 
                                        <li>This is the Crow Pose. The harder variation, the Crane Pose, is identical but done with straight arms.</li> 
                                        <li>To use this exercise effectively, perform these holds as long as possible to practice balancing using your fingers and hands.</li> 
                                    </ul>
                                </p>
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Pike Push-up

                        </p>
                        <p>
                            Recommended Accessory Exercises: Push-up
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Push-up" name2="Pike Push-up" name3="Crow Pose" name4="Assisted HS" name5="HSPU"  
            link1="/tutorials/pushup" link2="/tutorials/pikepu" link3="/tutorials/crowpose" link4="/tutorials/assistedhs" link5="#"
            svg1="push-up" svg2="pike-pu" svg3="crow-pose" svg4="assisted-hs" svg5="hspu"/>
            <TutorialReturn />
            {svgDivider.get("2")}
            <div class="technique-form-container">
                <div class="technique-form">
                    <div class="skill-section-title">
                        technique & form
                    </div>
                    <div class="technique-form-content">
                        <div>
                            Good Form Cues: 
                            <ul>
                            <li>Elbows are relatively close to the body</li>
                            <li>Hands facing forward or slightly outward</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            <li>Knees resting on bent elbows</li>
                            <li>Using fingers and heel of hand to balance</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Body touching floor</li>
                            <li>Sagging hips</li>
                            <li>Weak core</li>
                            <li>Not using fingers and heel of hand to balance</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}