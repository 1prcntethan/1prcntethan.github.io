import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";
import TutorialReturn from "../../components/tutorialreturn";



export function AssistPullup() {
    return (
        <>
            <Navbar />
            <SkillHero title="assisted pull-up" identifier="assist-pullup"/>
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
                            <p>Targeted Muscles: Back, Bicep, Core</p>
                            <p>High Strain Areas: N/A</p>
                        </div>
                        <div className="overview-explanation">
                            The Assisted Pull-Up is the regression exercise for the basic Pull-up. It mainly targets the lats, but can target different muscles depending on grip width. The assistance can be created by using leg/ground assistance or using resistance bands.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Assisted Pull-up
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Start in a deadhang position with your hands shoulder-width apart.</li> 
                                        <li>Pull yourself up, bringing your torso upward, and get your chin above the bar height. </li> 
                                        <li>Think about driving your elbows down and pulling the bar downward. </li> 
                                        <li>To use leg assistance, find a box or something to put under the bar that can support some of your weight, and use your legs to lighten the pull-up.</li> 
                                        <li>To use resistance band assistance, loop the band around the bar and step on the band as you do the pull-up.</li>
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
                            Recommended Main Exercises: Active Hang, Inverted Row

                        </p>
                        <p>
                            Recommended Accessory Exercises: Deadhang, Hollow Body Hold
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Deadhang" name2="Active Hang" name3="Assisted Pull-up" name4="Pull-up" name5="Muscle-Up"  
            link1="/tutorials/deadhang" link2="/tutorials/activehang" link3="/tutorials/assistpullup" link4="/tutorials/pullup" link5="#"
            svg1="deadhang" svg2="activehang" svg3="assist-pullup" svg4="pull-up" svg5=""/>
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
                            <li>Elbows drive downward</li>
                            <li>Chin gets above bar</li>
                            <li>Hands are (usually) placed shoulder-width apart</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Bent body</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}