import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function PlancheLean() {
    return (
        <>
            <Navbar />
            <SkillHero title="planche lean" identifier="planche-lean"/>
            {svgDivider.get("0")}
            <div className="skill-info-container"> 
                <div className="skill-info">
                    <div className="skill-section-title">
                    overview
                    </div>
                    <div className="difficulty-muscle">
                        <div className="skill-difficulty">
                            <Link to = "/Terminology" className="link-text" >
                            Skill Difficulty: D
                            </Link>
                            <br />
                            <p>Targeted Muscles: Anterior Deltoids, Upper Chest, Core</p>
                            <p>High Strain Areas: Wrists, Bicep Tendon</p>
                        </div>
                        <div className="overview-explanation">
                            The Planche Lean is a progression exercise used to prepare the body for the tuck planche. When performing this exercise on the floor, it's important to warm up your wrists, especially if you're a beginner, since the movement can place unfamiliar strain on them. If you feel extreme pain or discomfort practicing this exercise, you may be leaning too far. For those with wrist pain, consider using low parallettes.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Planche Lean
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                
                                <ul>
                                    <li>Start in a push-up position with your hands shoulder-width apart, and hands turned at a 45 degree angle.</li> 
                                    <li>Ensure your elbows are completely straightened, and that your scapula is protracted. </li> 
                                    <li>Gradually lean your body forward by shifting your shoulders ahead of your wrists, and slowly walking your feet forwards. </li> 
                                    <li>Maintain straight arms and body alignment, as well as strong protraction. </li> 
                                    <li>The farther you lean, the more load you should feel on your shoulders, specifically the anterior deltoids. </li> 
                                    <li>Therefore, the difficulty of the exercise is dependent on how far you lean forwards. </li> 
                                    <li>To use this exercise effectively, perform holds at a difficulty where you can hold them for at least 6-8 seconds, counting each hold as a rep.</li> 
                                </ul>
                                
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Push-ups

                        </p>
                        <p>
                            Recommended Accessory Exercises: Scapular Pushups, Hollow Body Hold
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="N/A" name2="Push-up" name3="Planche Lean" name4="Psuedo Pushup" name5="Full Planche"  
            link1="#" link2="/tutorials/pushup" link3="/tutorials/planchelean" link4="/tutorials/psuedopu" link5="#"
            svg1="NA" svg2="push-up" svg3="planche-lean" svg4="psuedo-pu" svg5="full-pl"/>
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
                            <li>Straight arms & locked elbows</li>
                            <li>Body aligned through head, shoulders, hips and legs</li>
                            <li>Scapula is protracted and depressed</li>
                            <li>Hands turned at a 45 degree angle and elbows facing forward</li>
                            <li>Hands are placed shoulder-width apart</li>
                            <li>(Ideally) Posterior pelvic tilt</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Bent arms</li>
                            <li>Sagging hips</li>
                            <li>Weak/retracted scapula</li>
                            <li>Wrists facing forward</li>
                            <li>Hands are placed too far/close together</li>
                            <li>Anterior pelvic tilt</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}


        </>
    )
}