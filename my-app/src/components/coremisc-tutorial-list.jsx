import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";
import { useState } from 'react';
import { skillTitle } from '../utilites/skilltitles';
import { skillDiff } from '../utilites/skilldifficulties';
import { skillTime } from '../utilites/skilltime';
import { skillLinks } from '../utilites/skillLinks';
import { skillImage } from "../utilites/skillImage";


export default function TutorialListCM() {

    const [title, setTitle] = useState(null);

    const [activeRow, setActiveRow] = useState("");
    // const [img, setImg] = useState(img.get(2))

    const rowButtons= [
        ["Sit-up", "Hollow Body Hold","Dragon Flag", "L-sit Compression", "L-sit"],
        ["V-sit", "I-sit", "Manna", "Human Flag", "Victorian"],
    ];

    const incompleteList = ["Sit-up", "Hollow Body Hold", "Dragon Flag", "L-sit Compression", "L-sit", "V-sit", "I-sit", "Manna", "Human Flag", "Victorian"];


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
              core/misc.
              <div className="catergory-blurb">
                Core skills create essential strength to provide stability for the body. These exercises typically target the core muscles, including the abdominals, obliques, and lower back.
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