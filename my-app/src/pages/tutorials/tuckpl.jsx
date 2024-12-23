import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";


export function TuckPL() {
    return (
        <>
            <Navbar />
            <SkillHero title="tuck planche" identifier="tuck-pl"/>
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
                            The Tuck Planche is a regression exercise used to prepare the body more difficult planche progressions. The anterior deltoid is the main muscle used in this exercise, but for beginners, protraction and depression should be emphasized as well.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Tuck Planche
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a squat position with your hands on the floor shoulder-width apart, and hands turned at a 45 degree angle.</li> 
                                        <li>Ensure your elbows are completely straightened, and that your scapula is protracted and depressed. </li> 
                                        <li>Gradually lean your body forward by shifting your shoulders ahead of your wrists, and feel the load on your feet becoming lighter. </li> 
                                        <li>As you lift off, maintain straight arms and protraction/depression, tucking your knees to your chest while leaning forward.</li> 
                                        <li>Stronger protraction will make the exercise easier.</li>  
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
                            Recommended Main Exercises: Planche Lean

                        </p>
                        <p>
                            Recommended Accessory Exercises: Scapular Pushups, Dips
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Push-up" name2="Planche Lean" name3="Tuck Planche" name4="Adv. Tuck Planche" name5="Full Planche"  
            link1="/tutorials/pushup" link2="/tutorials/planchelean" link3="/tutorials/tuckpl" link4="#" link5="#"
            svg1="push-up" svg2="planche-lean" svg3="tuck-pl" svg4="adv-tuck-pl" svg5="full-pl"/>
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
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Bent arms</li>
                            <li>Weak/retracted scapula</li>
                            <li>Hands facing forward</li>
                            <li>Hands are placed too far/close together</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}


        </>
    )
}