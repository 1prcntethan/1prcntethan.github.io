import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";


export function AssistedInvRow() {
    return (
        <>
            <Navbar />
            <SkillHero title="assisted inverted row" identifier="assisted-inv-row"/>
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
                            <p>Targeted Muscles: Lats, Trapezius, Rear Deltoids</p>
                            <p>High Strain Areas: N/A</p>
                        </div>
                        <div className="overview-explanation">
                            The Assisted Inverted Row is a base regression for the inverted row. In the future, this pulling strength will be necessary to start vertical pull movements.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Assisted Inverted Row
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Find a bar or something where there is space to hang under, which is at waist level.</li> 
                                        <li>Place your hands on the bar, shoulder width apart.</li>
                                        <li>Position yourself under the bar facing up while hanging on to it, and plant your legs a comfortable distance in front.</li> 
                                        <li>Your body should almost be parallel to the ground.</li> 
                                        <li>Using your legs as support, pull your chest as far up and as close to the bar as possible and lower back down.</li> 
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
                            Recommended Main Exercises: N/A

                        </p>
                        <p>
                            Recommended Accessory Exercises: Deadhang, Active Hang
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="N/A" name2="N/A" name3="Assisted Inv. Row" name4="Inverted Row" name5="Front Lever"  
            link1="#" link2="#" link3="/tutorials/assistedinvrow" link4="/tutorials/invertedrow" link5="#"
            svg1="NA" svg2="NA" svg3="assisted-inv-row" svg4="inverted-row" svg5="hspu"/>
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
                            <li>Legs are bent</li>
                            <li>Hands are placed shoulder-width apart</li>
                            <li>Pulling upward with back and elbows, feeling chest rise up to bar</li>
                            <li>Elbows are close to body</li>
                            <li>Back/spine is straight</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Flared elbows</li>
                            <li>Body is not parallel to the ground</li>
                            <li>Arms not bent all the way</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}