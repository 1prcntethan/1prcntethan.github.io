import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function WaistPullup() {
    return (
        <>
            <Navbar />
            <SkillHero title="waist pull-up" identifier="waist-pull-up"/>
            {svgDivider.get("0")}
            <div className="skill-info-container"> 
                <div className="skill-info">
                    <div className="skill-section-title">
                    overview
                    </div>
                    <div className="difficulty-muscle">
                        <div className="skill-difficulty">
                            <Link to = "/Terminology" className="link-text" >
                            Skill Difficulty: B
                            </Link>
                            <br />
                            <p>Targeted Muscles: Back, Bicep, Tricep, Core</p>
                            <p>High Strain Areas: N/A</p>
                        </div>
                        <div className="overview-explanation">
                            The Waist Pull-Up or Waist To Bar Pull-up is a progression exercise for more explosive pulling movements in the future. It is is the last progression before the Muscle-Up, mainly targeting the lats. 
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Waist Pull-up
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                
                                <ul>
                                    <li>Start in a deadhang position with your hands shoulder-width apart.</li> 
                                    <li>Pull yourself up, bringing your torso upward, and getting your waist to the bar height. </li> 
                                    <li>Think about driving your elbows down and pushing the bar downward. </li> 
                                    <li>Try to keep your elbows closer to your body. </li> 
                                    <li>During the exercise, it is recommended to be controlled coming down, but explosive and fast when coming up. </li> 
                                    <li>This exercise has many different variations and difficulties, depending on where the hands are placed.</li> 
                                    <li>To use this exercise effectively, perform these at a diffculty where you can do 4-8 reps for strength, or 8-12 for hypertrophy/volume.</li> 
                                </ul>
                                
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Chest Pull-up, Pull-up

                        </p>
                        <p>
                            Recommended Accessory Exercises: Deadhang, Active Hang, Hollow Body Hold
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Pull-up" name2="Chest Pull-up" name3="Waist Pull-up" name4="Muscle-up" name5="OAP"  
            link1="/tutorials/pullup" link2="/tutorials/chestpullup" link3="/tutorials/waistpullup" link4="" link5="#"
            svg1="pull-up" svg2="chest-pull-up" svg3="waist-pull-up" svg4="muscle-up" svg5=""/>
            <TutorialReturn />
            {svgDivider.get("2")}
            <div class="technique-form-container">
                <div class="technique-form">
                    <div class="skill-section-title">
                        technique & form
                    </div>
                    <div class="technique-form-content">
                        <div class="technique-form-text">
                            Good Form Cues: 
                            <ul>
                            <li>Elbows drive downward</li>
                            <li>Waist gets to or above bar level</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            </ul>
                        </div>
                        <div class="technique-form-text">
                            Bad Form Cues: 
                            <ul>
                            <li>Bent body</li>
                            <li>Flared elbows</li>
                            <li>Half reps</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}