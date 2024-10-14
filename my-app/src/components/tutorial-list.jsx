import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";

export default function TutorialList() {
    return (
        <>
            <div className="skill-list-container">
                <TutorialItem name="Push-up" link="/tutorials/pushup"/>
                <TutorialItem name="Pike Push-up" link="/"/>
                <TutorialItem name="Inverted Row" link="/"/>
                <TutorialItem name="Pull-up" link="/"/>
                <TutorialItem name="Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Planche Lean" link="/tutorials/planchelean"/>
                <TutorialItem name="Crow Pose" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
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