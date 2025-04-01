import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function AdvTuckPL() {
    return (
        <>
            <Navbar />
            <SkillHero title="advanced tuck planche" identifier="adv-tuck-pl"/>
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
                            <p>Targeted Muscles: Anterior Deltoids, Upper Chest, Scapula, Core</p>
                            <p>High Strain Areas: Wrists, Bicep Tendon, Shoulders</p>
                        </div>
                        <div className="overview-explanation">
                            The Advanced Tuck Planche is the next progression after the Tuck Planche. The anterior deltoid is the main muscle used in this exercise. Protraction and depression should still be emphasized, as well lower back position.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Advanced Tuck Planche
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                            
                                <ul>
                                    <li>Start in a squat position with your hands on the floor shoulder-width apart, and hands turned at a 45 degree angle.</li> 
                                    <li>Ensure your elbows are completely straightened, and that your scapula is protracted and depressed. </li> 
                                    <li>Gradually lean your body forward by shifting your shoulders ahead of your wrists, and feel the load on your feet becoming lighter. </li> 
                                    <li>As you lift off, maintain straight arms and protraction/depression, tucking your knees to your chest while leaning forward.</li> 
                                    <li>This is the tuck planche position.</li>
                                    <li>Slowly lower your knees until your thighs are pointing directly at the floor. The leg position can also be described as perpendicular to the floor.</li>
                                    <li>You should find yourself having to lean farther forward and using more strength to hold this position compared to the tuck planche.</li>
                                    <li>As you lower your knees, think about keeping your feet as close to your butt as possible.</li>  
                                    <li>Keep your scapula protracted and depressed, and your back/spine as neutral and flat as possible.</li>
                                    <li>To use this exercise effectively, perform holds at a difficulty where you can hold them for at least 6-8 seconds, counting each hold as a rep.</li> 
                                </ul>
                            
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Tuck Planche, Planche Lean

                        </p>
                        <p>
                            Recommended Accessory Exercises: Scapular Pushups, Dips
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Push-up" name2="Tuck Planche" name3="Adv. Tuck Planche" name4="Straddle Planche" name5="Full Planche"  
            link1="/tutorials/pushup" link2="/tutorials/tuckpl" link3="/tutorials/advtuckpl" link4="#" link5="#"
            svg1="push-up" svg2="tuck-pl" svg3="adv-tuck-pl" svg4="#" svg5="full-pl"/>
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
                            <li>Knees tucked to chest</li>
                            <li>Scapula is protracted and depressed</li>
                            <li>Hands turned at a 45 degree angle and elbows facing forward</li>
                            <li>Hands are placed shoulder-width apart</li>
                            <li>Lower back is mostly flat, no excessive arching</li>
                            <li>Hips are at the same height as shoulders.</li>
                            <li>Feet are tucked close to butt, knees are pointing directly at the ground.</li>
                            <li>Knees are directly under hips</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Bent arms</li>
                            <li>Weak/retracted scapula</li>
                            <li>Hands facing forward</li>
                            <li>Hands are placed too far/close together</li>
                            <li>High or low hips</li>
                            <li>Arched back</li>
                            <li>Knees still tucked too close to stomach</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}


        </>
    )
}