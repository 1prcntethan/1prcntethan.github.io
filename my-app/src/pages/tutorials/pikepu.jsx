import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function PikePU() {
    return (
        <>
            <Navbar />
            <SkillHero title="pike push-up" identifier="pike-pu"/>
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
                            <p>Targeted Muscles: Shoulders, Tricep, Chest, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Pike Push-Up is the fundamental exercise for building strength toward vertical pushing movements. When performing this exercise on the floor, consider warming up your wrists, especially if you're a complete beginner.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Pike Push-up
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                
                                <ul>
                                    <li>Start in a plank position with your hands shoulder-width apart, and hands facing forward or alternatively slightly outward.</li> 
                                    <li>Walk your feet toward your hands, while bending at your hips, until the angle between your legs and torso is around 90 degrees.</li> 
                                    <li>It may be uncomfortable, but this is the starting position for the pike pushup.</li> 
                                    <li>Lower your head and body toward the ground, by bending your elbows, and try to keep your legs straight.</li> 
                                    <li>Once your head touches the ground, push back up with your arms, straightening the elbows. </li> 
                                    <li>During the exercise, it is recommended move slowly and controlled coming down, but be explosive and fast when coming up. </li> 
                                    <li>This exercise also requires some hamstring flexibility, but it is okay to have some bend in the knees to make it easier.</li>
                                    <li>The exercise difficulty can change, depending on if your head goes down close to your hands, or far in front of your hands.</li> 
                                    <li>To use this exercise effectively, perform these at a diffculty where you can do 4-8 reps for strength, or 8-12 for hypertrophy/volume.</li> 
                                </ul>
                                
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Push-ups, Dips

                        </p>
                        <p>
                            Recommended Accessory Exercises: Hamstring Stretch
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Push-up" name2="Dip" name3="Pike Push-up" name4="Crow Pose" name5="HSPU"  
            link1="/tutorials/pushup" link2="/tutorials/dip" link3="/tutorials/pikepu" link4="/tutorials/crowpose" link5="#"
            svg1="push-up" svg2="dip" svg3="pike-pu" svg4="crow-pose" svg5="hspu"/>
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
                            <li>Head touches the floor</li>
                            <li>Body in a pike (90 degree) position</li>
                            <li>Elbows make a ~90 degree angle in the bottom position</li>
                            <li>Hands facing forward or slightly outward</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            <li>Legs are mostly straight</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Flared elbows</li>
                            <li>Sagging hips</li>
                            <li>Weak/arched core</li>
                            <li>Arched body</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}