import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function Pushup() {
    return (
        <>
            <Navbar />
            <SkillHero title="push-up" identifier="push-up"/>
            {svgDivider.get("0")}
            <div className="skill-info-container"> 
                <div className="skill-info">
                    <div className="skill-section-title">
                    overview
                    </div>
                    <div className="difficulty-muscle">
                        <div className="skill-difficulty">
                            <Link to = "/Terminology" className="link-text" >
                            Skill Difficulty: F
                            </Link>
                            <br />
                            <p>Targeted Muscles: Tricep, Chest, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Push-Up is the fundamental exercise for pushing movements later on. When performing this exercise on the floor, consider warming up your wrists, especially if you're a complete beginner. If you can complete a push-up, congrats! That's about 70% of your bodyweight!
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Push-up
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a plank position with your hands shoulder-width apart, and hands facing forward or alternatively slightly outward.</li> 
                                        <li>Ensure your elbows are completely straightened and that your body makes a straight line. </li> 
                                        <li>Gradually lower your body downward by bending your elbows and tightening your core and chest. </li> 
                                        <li>Once you feel your chest touch the ground, you can either hold or start pressing back up. </li> 
                                        <li>To press up, simply push your arms out, straightening the elbows and keeping a straight body alignment. </li> 
                                        <li>During the exercise, it is recommended move slowly and controlled coming down, but be explosive and fast when coming up. </li> 
                                        <li>This exercise has many different variations and difficulties, depending on where the hands are placed.</li> 
                                        <li>To use this exercise effectively, perform these at a diffculty where you can do 4-8 reps for strength, or 8-12 for hypertrophy/volume.</li> 
                                    </ul>
                                </p>
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Assisted Push-ups

                        </p>
                        <p>
                            Recommended Accessory Exercises: Scapular Pushups, Hollow Body Hold
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="N/A" name2="Assisted Push-up" name3="Push-up" name4="Planche Lean" name5="Full Planche"  
            link1="#" link2="/tutorials/assistedpu" link3="/tutorials/pushup" link4="/tutorials/planchelean" link5="#"
            svg1="NA" svg2="assisted-pushup" svg3="push-up" svg4="planche-lean" svg5="full-pl"/>
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
                            <li>Chest touches the floor</li>
                            <li>Body aligned through head, shoulders, hips and legs</li>
                            <li>Elbows make a ~90 degree angle in the bottom position</li>
                            <li>Hands facing forward or slightly outward</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Flared elbows</li>
                            <li>Sagging hips</li>
                            <li>Weak/arched core</li>
                            <li>Arched body</li>
                            <li>High hips</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}