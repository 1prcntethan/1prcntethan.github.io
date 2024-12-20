import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";
import { useState } from 'react';
import { skillTitle } from '../utilites/skilltitles';
import { skillDiff } from '../utilites/skilldifficulties';
import { skillTime } from '../utilites/skilltime';
import { skillLinks } from '../utilites/skillLinks';

export default function TutorialListVPL() {

    const [title, setTitle] = useState(null);

    const [activeRow, setActiveRow] = useState("");
    // const [img, setImg] = useState(img.get(2))

    const rowButtons= [
        ["Deadhang", "Active Hang", "Assisted Pull-up", "Pull-up", "Chest Pull-up"],
        ["Waist Pull-up", "Muscle-Up", "Archer Pull-up", "Assisted OAC", "Assisted OAP"],
        ["OAC/OAP", "??????", "??????", "??????", "??????"]
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
              vertical pull
              <div className="catergory-blurb">
                Vertical pull mainly involves exercises with your body perpendicular to the ground. These exercises typically target the (lats), biceps, and rear deltoids.
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
                  id="vpl"
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
                      <Link to = {skillLinks.get(title)} className="skill-content--link"> {skillTitle.get(title)} </Link>
                    </div>
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
                  <button
                    className="skill-content--close"
                    onClick={() =>
                      handleOutsideClick(
                        document.querySelector("#vpl")
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