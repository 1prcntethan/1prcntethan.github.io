import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";
import { useState } from 'react';
import { skillTitle } from '../utilites/skilltitles';
import { skillDiff } from '../utilites/skilldifficulties';
import { skillTime } from '../utilites/skilltime';

export default function TutorialListVP() {

    const [title, setTitle] = useState(null);

    const [activeRow, setActiveRow] = useState("");
    // const [img, setImg] = useState(img.get(2))

    const rowButtons= [
        ["Pike Push-up", "Crow Pose", "Assisted Handstand", "Handstand", "Elevated Pike PU"],
        ["Bent Arm Stand", "Assisted HSPU", "HSPU", "Deep HSPU", "90 Degree PU"],
        ["Assisted OAHS", "OAHS", "??????", "??????", "??????"]
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
            <div className="catergory-title">vertical push</div>
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
                                <div className="skill-content--title">{skillTitle.get(title)}</div>
                                <br />
                                <br />
                                image
                            </div>
                            <div className="skill-content--right">
                                Skill Difficulty: {skillDiff.get(title)}
                                <br />
                                <br />
                                Time to learn: {skillTime.get(title)}
                            </div>
                        </div>
                    )}

                </div>
                </>
            ))}
            </div>
        </>
    )
}