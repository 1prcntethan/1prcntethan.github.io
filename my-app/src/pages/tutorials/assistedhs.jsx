import Navbar from "../../components/navbar";
import ProgressionChart from "../../components/progressionchart";
import SkillHero from "../../components/skillhero";
import "./skillpage.css";
import { Link } from 'react-router-dom';
import { svgDivider } from "../../utilites/svg-divider";


export function AssistedHS() {
    return (
        <>
            <Navbar />
            <SkillHero title="assisted handstand" identifier="assisted-hs"/>
            {svgDivider.get("0")}
            <div className="skill-info-container"> 
                <div className="skill-info">
                    <div className="skill-section-title">
                    overview
                    </div>
                    <div className="difficulty-muscle">
                        <div className="skill-difficulty">
                            <Link to = "/Terminology" className="link-text" >
                            Skill Difficulty: C
                            </Link>
                            <br />
                            <p>Targeted Muscles: Shoulders, Arms, Chest, Core</p>
                            <p>High Strain Areas: Wrists</p>
                        </div>
                        <div className="overview-explanation">
                            The Assisted Handstand is the last regression before the freestanding handstand. When performing this exercise on the floor, consider warming up your wrists, especially if you're a complete beginner.
                        </div>
                    </div>
            
                    <div className="exercise-instructions-container">
                        Step-by-Step ~ Assisted Handstand
                        <div className="exercise-instructions">
                            <input id="skill-read-more" type="checkbox" />
                    
                            <div className="skill-instructions">
                                <p>
                                    <ul>
                                        <li>Find a wall you can handstand next to.</li> 
                                        <li>Place your hands one foot away from the wall, shoulder width apart. Fingers should be pointing towards the wall.</li>
                                        <li>Stack your elbows, shoulders, chest, hips, knees and feet, in a straight line against the wall.</li> 
                                        <li>Push your shoulders and hands into the ground, it should feel like you are reaching as far as your can upward.</li> 
                                        <li>Using the wall as support, practice using your fingers to push yourself away from the wall and balancing.</li> 
                                        <li>To use this exercise effectively, perform these holds as long as possible to practice balancing using your fingers and hands.</li> 
                                    </ul>
                                </p>
                                <label className="read-more-label" for="skill-read-more">Show less</label>
                            </div>
                            <label className="read-more-label" for="skill-read-more">Read more...</label>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <p>
                            Recommended Main Exercises: Crow Pose, Crane Pose

                        </p>
                        <p>
                            Recommended Accessory Exercises: Pike Push-up
                        </p>
                    </div>
                </div>
            </div>
            {svgDivider.get("1")}
            <ProgressionChart name1="Pike Push-up" name2="Crow Pose" name3="Assisted HS" name4="Handstand" name5="HSPU"  
            link1="/tutorials/pikepu" link2="/tutorials/crowpose" link3="/tutorials/assistedhs" link4="/tutorials/handstand" link5="#"
            svg1="pike-pu" svg2="crow-pose" svg3="assisted-hs" svg4="handstand" svg5="hspu"/>
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
                            <li>Whole body is engaged</li>
                            <li>Hands facing forward or slightly outward</li>
                            <li>Hands are placed shoulder-width apart</li>
                            <li>Body is stacked in a straight line</li>
                            <li>Pushing upward with shoulders and hands, feeling tall</li>
                            <li>Using fingers and heel of hand to balance</li>
                            <li>Try gripping the ground with bent fingers, to get better activation and finger balancing strength.</li>
                            </ul>
                        </div>
                        <div>
                            Bad Form Cues: 
                            <ul>
                            <li>Unaligned body</li>
                            <li>Body is not engaged</li>
                            <li>Bent arms</li>
                            <li>Not using fingers and heel of hand to balance</li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>
            {svgDivider.get("3")}
        </>
    )
}