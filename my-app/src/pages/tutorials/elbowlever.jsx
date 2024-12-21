import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";


export function ElbowLever() {
    return (
        <>
            <Navbar />
            <SkillHero title="elbow lever" identifier="elbow-lever"/>
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
                            <p>Targeted Muscles: Shoulders, Chest, Triceps, Abs</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Elbow Lever is a non-essential but stylish exercise. It is usually performed on the floor, and requires balance more than anything else.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Elbow Lever
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a push position with your fingers facing opposite from each other, and knees touching the ground for support.</li> 
                                        <li>Bend your arms and lower your stomach onto your elbows and your body downward, until your elbows are pressing into your abs. </li> 
                                        <li>Lean forward keeping your balance, using your hands to stablize yourself. </li> 
                                        <li>As your body leans forward, your feet should start to lift off the ground. </li> 
                                        <li>Try to straighten your body so you are completly parallel to the ground and supported by only your hands. </li> 
                                        <li>The key to this exercise is balance, while it may be uncomfortable, this exercise does not require much strength. </li> 
                                        <li>To use this exercise effectively, practice it minimally because there are other exercises that stimulate the same muscles more effectively.</li> 
                                        <li>Essentially, this exercise is mainly for fun and show.</li>
                                    </ul>
                                </p>
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
                            Recommended Accessory Exercises: Wrist Exercises
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="N/A" name2="Push-up" name3="Elbow Lever" name4="Planche Lean" name5="Full Planche"  
            link1="#" link2="/tutorials/pushup" link3="/tutorials/elbowlever" link4="/tutorials/planchelean" link5="#"
            svg1="NA" svg2="push-up" svg3="elbow-lever" svg4="planche-lean" svg5="full-pl"/>
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
                            <li>Straight line body</li>
                            <li>Elbows are jammed into the abs</li>
                            <li>Elbows bent to around 90 degrees</li>
                            <li>Hands facing outward and close together</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Legs hanging low, body not straight</li>
                            <li>Hands are placed too far apart</li>
                            <li>Elbows aren't jammed into abs</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}


        </>
    )
}