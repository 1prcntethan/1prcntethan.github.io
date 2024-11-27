import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";
import { useState } from 'react';

export default function TutorialList() {

    const [title, setTitle] = useState(null);

    const [activeRow, setActiveRow] = useState("");
    // const [img, setImg] = useState(img.get(2))

    const rowButtons= [
        ["Assisted Pushup", "Pushup", "Dip", "Elbow Lever", "Planche Lean"],
        ["Psuedo Pushup", "Tuck Planche", "Tuck Planche PU", "Adv. Tuck Planche", "Adv. Tuck Planche PU"],
        ["90 Degree Hold", "Back Lever", "Super Adv. Tuck Planche", "Straddle Planche", "Straddle Planche PU"],
        ["Half Lay Planche", "Full Planche", "Full Planche PU", "One Arm Planche", "??????"],
    ];

    const rowTitles= [
        ["assisted pushup", "pushup", "dip", "elbow lever", "planche lean"],
        ["psuedo pushup", "tuck planche", "tuck planche pu", "adv. tuck planche", "adv. tuck planche pu"],
        ["90 degree hold", "back lever", "super adv. tuck planche", "straddle planche", "straddle planche pu"],
        ["half lay planche", "full planche", "full planche pu", "one arm planche", "??????"],
    ];

    const handleRowClick = (index, buttonTitle) => {
        // if (activeRow === index) {
        //     // Toggle off if the same row is clicked again
        //     setActiveRow(null);
        // } else 
        {
            // Set the active row and title
            setActiveRow(index);
            setTitle(buttonTitle);
        }
    };

    const handleOutsideClick = () => {
        setActiveRow(null); // Close dropdown when clicked outside
    };



    return (
        <> 
            <div className="catergory-title">horizontal push</div>
            <div className="catergory-container">
            {rowButtons.map((row, rowIndex) => (
                <>
                <div key={rowIndex} className="buttons-container">
                    {row.map((buttonTitle, buttonIndex) => (
                        <button 
                            key={buttonIndex} 
                            className="skill-button" 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleRowClick(rowIndex, buttonTitle);    
                            }}
                        >
                            {buttonTitle}
                        </button>
                    ))}
                    

                </div>
                <div>
                {activeRow === rowIndex && (
                        <div className="skill-content">
                            <div className="skill-content--left">
                                <div className="skill-content--title">{title}</div>
                                <br />
                                <br />
                                image
                            </div>
                            <div className="skill-content--right">
                                Skill Difficulty: F
                                <br />
                                <br />
                                Time to learn: 2 weeks
                            </div>
                        </div>
                    )}

                </div>
                </>
            ))}
            </div>
            
            {/* <div className="catergory-title">horizontal push</div>
            <div className="catergory-container">
                <div className="buttons-container">
                    <button onClick={() => {setTitle("assisted pushup")}}className="skill-button">Assisted Pushup</button>
                    <button onClick={() => {setTitle("pushup")}} className="skill-button">Pushup</button>
                    <button onClick={() => {setTitle("dip")}} className="skill-button">Dip</button>
                    <button onClick={() => {setTitle("elbow lever")}} className="skill-button">Elbow Lever</button>
                    <button onClick={() => {setTitle("psuedo pushup")}} className="skill-button">Planche Lean</button>
                </div>
                <div className="buttons-container">
                    <button onClick={() => {setTitle("psuedo pushup")}}className="skill-button">Psuedo Pushup</button>
                    <button onClick={() => {setTitle("tuck planche")}} className="skill-button">Tuck Planche</button>
                    <button onClick={() => {setTitle("tuck planche pu")}} className="skill-button">Tuck Planche PU</button>
                    <button onClick={() => {setTitle("adv. tuck planche")}} className="skill-button">Adv. Tuck Planche</button>
                    <button onClick={() => {setTitle("adv. tuck planche pu")}} className="skill-button">Adv. Tuck Planche PU</button>
                </div>
                <div className="buttons-container">
                    <button onClick={() => {setTitle("90 degree hold")}}className="skill-button">90 Degree Hold</button>
                    <button onClick={() => {setTitle("back lever")}} className="skill-button">Back Lever</button>
                    <button onClick={() => {setTitle("super adv. tuck planche")}} className="skill-button">Super Adv. Tuck Planche</button>
                    <button onClick={() => {setTitle("straddle planche")}} className="skill-button">Straddle Planche</button>
                    <button onClick={() => {setTitle("straddle planche pu")}} className="skill-button">Straddle Planche PU</button>
                </div>
                <div className="buttons-container">
                    <button onClick={() => {setTitle("halflay planche")}}className="skill-button">Half Lay Planche</button>
                    <button onClick={() => {setTitle("full planche")}} className="skill-button">Full Planche</button>
                    <button onClick={() => {setTitle("full planche pu")}} className="skill-button">Full Planche PU</button>
                    <button onClick={() => {setTitle("one arm planche")}} className="skill-button">One Arm Planche</button>
                    <button onClick={() => {setTitle("??????")}} className="skill-button">??????</button>
                </div>
                <div className="skill-content">
                    <div className="skill-content--left">
                        <div className="skill-content--title">{title}</div>
                        <br/>
                        <br/>
                        image
                    </div>
                    <div className="skill-content--right">
                        Skill Difficulty: F 
                        <br/>
                        <br/>
                        Time to learn: 2 weeks
                    </div>

                </div>
            </div> */}


            <div className="skill-list-container">
                <TutorialItem name="Assisted Push-up" link="/tutorials/assistedpu"/>
                <TutorialItem name="Pike Push-up" link="/"/>
                <TutorialItem name="Assisted Inverted Row" link="/"/>
                <TutorialItem name="Deadhang" link="/"/>
                <TutorialItem name="Bodyweight Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Push-up" link="/tutorials/pushup"/>
                <TutorialItem name="Crow Pose" link="/"/>
                <TutorialItem name="Inverted Row" link="/"/>
                <TutorialItem name="Active Hang" link="/"/>
                <TutorialItem name="Split Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Dip" link="/"/>
                <TutorialItem name="Assisted Handstand" link="/"/>
                <TutorialItem name="Tuck FL Row" link="/"/>
                <TutorialItem name="Assisted Pull-up" link="/"/>
                <TutorialItem name="Lateral Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Elbow Lever" link="/"/>
                <TutorialItem name="Handstand" link="/"/>
                <TutorialItem name="Pike FL Row" link="/"/>
                <TutorialItem name="Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Planche Lean" link="/tutorials/planchelean"/>
                <TutorialItem name="Elevated Pike Pushup" link="/"/>
                <TutorialItem name="Adv. Tuck FL Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Bulgarian Split Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Psuedo Pushup" link="/"/>
                <TutorialItem name="Bent Arm Stand" link="/"/>
                <TutorialItem name="Super Adv. Tuck FL Row" link="/"/>
                <TutorialItem name="Waist Pull-up" link="/"/>
                <TutorialItem name="Assisted Shrimp Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Tuck Planche" link="/"/>
                <TutorialItem name="Assisted HSPU" link="/"/>
                <TutorialItem name="Straddle Halflay FL Row" link="/"/>
                <TutorialItem name="Muscle-Up" link="/"/>
                <TutorialItem name="Sissy Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Tuck Planche PU" link="/"/>
                <TutorialItem name="Handstan Pushup (HSPU)" link="/"/>
                <TutorialItem name="Straddle FL Row" link="/"/>
                <TutorialItem name="Archer Pull-up" link="/"/>
                <TutorialItem name="Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Adv. Tuck Planche" link="/"/>
                <TutorialItem name="Deep HSPU" link="/"/>
                <TutorialItem name="Halflay FL Row" link="/"/>
                <TutorialItem name="Assisted One Arm Chin-up" link="/"/>
                <TutorialItem name="Shrimp Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Adv. Tuck Planche PU" link="/"/>
                <TutorialItem name="Assisted One Arm Handstand" link="/"/>
                <TutorialItem name="Full Front Lever Row" link="/"/>
                <TutorialItem name="Assisted One Arm Pull-up" link="/"/>
                <TutorialItem name="Dragon Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="90 Degree Hold" link="/"/>
                <TutorialItem name="One Arm Handstand" link="/"/>
                <TutorialItem name="Front Lever Touch" link="/"/>
                <TutorialItem name="One Arm Pull-up/Chin-up" link="/"/>
                <TutorialItem name="Dragon Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Back Lever" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Super Adv. Tuck Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Straddle Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Straddle Planche PU" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Halflay Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Full Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Full Planche PU" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="One Arm Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="" link="/"/>
            </div>
        </>
    )
}


function TutorialItem(skill) {
    return (
        <>
            <Link to ={skill.link} className="skill-list-item">
                <button id="skill-item">{skill.name}</button>
            </Link>
        </>
    )
}