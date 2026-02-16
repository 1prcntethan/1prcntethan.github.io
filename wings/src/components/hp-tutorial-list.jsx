import React from "react";
import { Link } from "react-router-dom";
import "./tutorial-list.css";
import { useState } from "react";
import { skillTitle } from "../utilites/skilltitles";
import { skillDiff } from "../utilites/skilldifficulties";
import { skillTime } from "../utilites/skilltime";
import { skillLinks } from "../utilites/skillLinks";
import { skillImage } from "../utilites/skillImage";

export const incompleteList = [
  "Back Lever",
  "Straddle Planche",
  "Straddle Planche PU",
  "Half Lay Planche",
  "Full Planche",
  "Full Planche PU",
  "One Arm Planche",
  "Maltese",
  "Full FL Row",
  "Front Lever Touch",
  "Assisted Pistol Squat",
  "Bulgarian Split Squat",
  "Reverse Nordic Curl",
  "Nordic Curl",
  "Sissy Squat",
  "Pistol Squat",
  "Shrimp Squat",
  "Dragon Pistol Squat",
  "Bent Arm Press to HS",
  "Straight Arm Press to HS",
  "Deep HSPU",
  "90 Degree PU",
  "Assisted OAHS",
  "OAHS",
  "OA Flag",
  "Archer Pull-up",
  "Clean Muscle-Up",
  "Assisted OAC",
  "Assisted OAP",
  "OAC/OAP",
  "Weighted Pull-ups",
  "Butterfly",
  "V-sit",
  "I-sit",
  "Manna",
  "Human Flag",
  "Victorian",
];

export default function TutorialListHP() {
  const [title, setTitle] = useState(null);

  const [activeRow, setActiveRow] = useState("");
  // const [img, setImg] = useState(img.get(2))

  const rowButtons = [
    ["Assisted Push-up", "Push-up", "Dip", "Elbow Lever", "Planche Lean"],
    [
      "Pseudo Push-up",
      "Tuck Planche",
      "Tuck Planche PU",
      "Adv. Tuck Planche",
      "Adv. Tuck Planche PU",
    ],
    [
      "90 Degree Hold",
      "Back Lever",
      "Super Adv. Tuck PL",
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
          Horizontal push mainly involves push exercises with your body parallel
          to the ground. These exercises typically target the shoulders, arms,
          and chest.
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
                      <Link
                        to={
                          incompleteList.includes(title)
                            ? "incomplete"
                            : skillLinks.get(title)
                        }
                        className="skill-content--link"
                      >
                        {" "}
                        {incompleteList.includes(title)
                          ? "in progress"
                          : skillTitle.get(title)}{" "}
                      </Link>
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
                    className="skill-content--close__button"
                    onClick={() =>
                      handleOutsideClick(document.querySelector("#hp"))
                    }
                  >
                    &#x2715;
                  </button>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
