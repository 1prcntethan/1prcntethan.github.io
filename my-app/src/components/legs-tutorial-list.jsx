import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";
import { useState } from 'react';
import { skillTitle } from '../utilites/skilltitles';
import { skillDiff } from '../utilites/skilldifficulties';
import { skillTime } from '../utilites/skilltime';
import { skillLinks } from '../utilites/skillLinks';
import { skillImage } from "../utilites/skillImage";


export default function TutorialListL() {

    const [title, setTitle] = useState(null);

    const [activeRow, setActiveRow] = useState("");
    // const [img, setImg] = useState(img.get(2))

    const rowButtons= [
        ["Bodyweight Squat", "Split Squat", "Assisted Pistol Squat", "Bulgarian Split Squat", "Assisted Shrimp Squat"],
        ["Sissy Squat", "Pistol Squat", "Shrimp Squat", "Dragon Squat", "Dragon Pistol Squat"],
    ];

    const incompleteList = ["Bodyweight Squat", "Split Squat", "Assisted Pistol Squat", "Bulgarian Split Squat", "Assisted Shrimp Squat", "Sissy Squat", "Pistol Squat", "Shrimp Squat", "Dragon Squat", "Dragon Pistol Squat"];


    const handleRowClick = (index, buttonTitle) => {
        // if (activeRow === index) {
        //     // Toggle off if the same row is clicked again
        //     setActiveRow(null);
        // } else 
        
            // Set the active row and title
            setActiveRow(index);
            setTitle(buttonTitle);
        
    };

    const handleOutsideClick = (dropRef) => {
        if (dropRef) {
          dropRef.classList.add("hidden");
          setTimeout(() => {
            setActiveRow(null);
          }, 800);
        }
      };



    return (
        <> 
            <div className="catergory-title">
              legs
              <div className="catergory-blurb">
                Leg skills in calisthenics are mainly squats and their variations. These exercises typically target the quads, hamstrings, glutes, and calves.
              </div>
            </div>
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
                <div
                  id="legs"
                  className="skill-content hidden"
                  ref={(drop) => {
                    if (activeRow === rowIndex && drop) {
                      setTimeout(() => {
                        drop.classList.remove("hidden");
                      }, 10);
                    }
                  }}
                >
                  <div className="skill-content--left">
                    <div className="skill-content--title">
                      <Link to = {incompleteList.includes(title) ? "incomplete" : skillLinks.get(title)} className="skill-content--link"> {incompleteList.includes(title) ? "in progress" : skillTitle.get(title)} </Link>
                    </div>
                    <br />
                    <br />
                    {skillImage.get(title)}
                  </div>
                  <div className="skill-content--right">
                    Skill Difficulty: {skillDiff.get(title)}
                    <br />
                    <br />
                    Time to learn: {skillTime.get(title)}
                  </div>
                  <button
                    className="skill-content--close"
                    onClick={() =>
                      handleOutsideClick(
                        document.querySelector("#legs")
                      )
                    }
                  >
                    <div className="skill-content--close__button"></div>
                  </button>
                </div>
              )}
            </div>
                </>
            ))}
            </div>
        </>
    )
}