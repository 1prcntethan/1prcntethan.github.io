import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";


export function AssistPu() {
    return (
        <>
            <Navbar />
            <SkillHero title="assisted push-up" identifier="assisted-pushup"/>
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
                            <p>Targeted Muscles: Chest, Triceps, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Assisted Push-up is a regression exercise of the regular push-up, and can be done in many ways. Any form of assistance, including less bodyweight, bands, or easier angles can be considered an assisted push-up. Some common exercises include knee-pushups and incline pushups.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Assisted Push-up
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a push-up position with your hands shoulder-width apart, facing forwards and slightly outward.</li> 
                                        <li>Ensure your body is in a stright line, and that your knees are touching the floor supporting some bodyweight.</li> 
                                        <li>Gradually lower your body downward, bending the elbows while maintaining a straight line in your body. </li> 
                                        <li>Once your chest touches the ground, you can either hold or start pressing back up. </li> 
                                        <li>To press up, simply push your arms out and straighten the elbows. </li> 
                                        <li>During the exercise, it is recommended move slowly and controlled coming down, but be explosive and fast when coming up. </li> 
                                        <li>The described exercise is specifically a knee-pushup. To perform incline pushups, perform the push-up routine with your hands on an elevated surface.</li> 
                                    </ul>
                                </p>
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Knee Push-ups, Incline Push-ups

                        </p>
                        <p>
                            Recommended Accessory Exercises: Hollow Body Hold, Sit-ups, Wall Push-ups
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="N/A" name2="N/A" name3="Assisted Push-up" name4="Push-up" name5="Full Planche"  
            link1="#" link2="#" link3="#" link4="/tutorials/pushup" link5="#"
            svg1="NA" svg2="NA" svg3="assisted-pushup" svg4="push-up" svg5="full-pl"/>
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
                            <li>Elbows are relatively close to body</li>
                            <li>Chest touches floor</li>
                            <li>Body aligned through head, shoulders, hips and legs</li>
                            <li>Elbows make a ~90 degree angle in the bottom position</li>
                            <li>Hands are facing forward or slightly outward</li>
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