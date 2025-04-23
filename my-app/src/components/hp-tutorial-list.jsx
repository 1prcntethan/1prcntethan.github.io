import React from "react";
import { Link } from "react-router-dom";
import "./tutorial-list.css";
import { useState } from "react";
import { skillTitle } from "../utilites/skilltitles";
import { skillDiff } from "../utilites/skilldifficulties";
import { skillTime } from "../utilites/skilltime";
import { skillLinks } from "../utilites/skillLinks";
import { skillImage } from "../utilites/skillImage";

export default function TutorialListHP() {
  const [title, setTitle] = useState(null);

  const [activeRow, setActiveRow] = useState("");
  // const [img, setImg] = useState(img.get(2))

  const rowButtons = [
    ["Assisted Push-up", "Push-up", "Dip", "Elbow Lever", "Planche Lean"],
    [
      "Psuedo Push-up",
      "Tuck Planche",
      "Tuck Planche PU",
      "Adv. Tuck Planche",
      "Adv. Tuck Planche PU",
    ],
    [
      "90 Degree Hold",
      "Back Lever",
      "Super Adv. Tuck Planche",
      "Straddle Planche",
      "Straddle Planche PU",
    ],
    [
      "Half Lay Planche",
      "Full Planche",
      "Full Planche PU",
      "One Arm Planche",
      "Maltese",
    ],
  ];

  const incompleteList = ["Adv. Tuck Planche PU", "90 Degree Hold", "Back Lever", "Super Adv. Tuck Planche", "Straddle Planche", "Straddle Planche PU", "Half Lay Planche", "Full Planche", "Full Planche PU", "One Arm Planche", "Maltese"];

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
        horizontal push
        <div className="catergory-blurb">
          Horizontal push mainly involves push exercises with your body parallel to the ground. These exercises typically target the shoulders, arms, and chest.
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
                  id="hp"
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
                        document.querySelector("#hp")
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
    </>
  );
}
