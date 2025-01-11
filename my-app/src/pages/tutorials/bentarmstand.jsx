import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function BentArmStand() {
    return (
        <>
            <Navbar />
            <SkillHero title="bent arm stand" identifier="bas"/>
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
                            <p>Targeted Muscles: Shoulders, Tricep, Chest, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Bent Arm (Hand)stand is a regression exercise from the handstand pushup, and is actually the bottom position of the HSPU. When performing this exercise on the floor, consider warming up your wrists, or use low paralletes.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Bent Arm Stand
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a pike pushup position with your hands shoulder-width apart, and hands facing forward or alternatively slightly outward.</li>
                                        <li>Lower your head and body toward the ground, by bending your elbows, and try to keep your legs straight.</li> 
                                        <li>When you lean forward enough in the down position, with your head far in front of your hands, you will feel your legs getting lighter.</li> 
                                        <li>Once you have the strength, you should be able to lift your feet off the ground.</li> 
                                        <li>Simply straighten your back and body into a straight line, and hold the position.</li>
                                        <li>To use this exercise effectively, perform holds at a difficulty where you can hold them for at least 6-8 seconds, counting each hold as a rep.</li> 
                                    </ul>
                                </p>
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Elevated Pike Push-ups, Pike Push-ups, Handstand

                        </p>
                        <p>
                            Recommended Accessory Exercises: Dips
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Pike Push-up" name2="Elevated Pike PU" name3="Bent Arm Stand" name4="Assisted HSPU" name5="HSPU"  
            link1="/tutorials/pikepu" link2="/tutorials/elevatedpikepu" link3="/tutorials/bas" link4="/tutorials/assistedhspu" link5="#"
            svg1="pike-pu" svg2="elevated-pike-pu" svg3="bas" svg4="assisted-hspu" svg5="hspu"/>
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
                            <li>Head is close to or touching the floor in bottom position</li>
                            <li>Head is in front of hands in bottom position</li>
                            <li>Body is straight and engaged</li>
                            <li>Elbows make a ~90 degree angle in the bottom position</li>
                            <li>Hands facing forward or slightly outward</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            <li>Legs are straight</li>
                            <li>Presses and negatives are slow and controlled</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Flared elbows</li>
                            <li>Sagging hips</li>
                            <li>Weak/arched core</li>
                            <li>Arched/bent body</li>
                            <li>Elbows not fully bent</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}