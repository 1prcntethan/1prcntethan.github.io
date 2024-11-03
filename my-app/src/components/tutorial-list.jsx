import React from 'react';
import { Link } from 'react-router-dom';
import "./tutorial-list.css";

export default function TutorialList() {
    return (
        <>
            <div className="skill-list-container">
                <TutorialItem name="Assisted Push-up" link="/"/>
                <TutorialItem name="Pike Push-up" link="/"/>
                <TutorialItem name="Inverted Row" link="/"/>
                <TutorialItem name="Pull-up" link="/"/>
                <TutorialItem name="Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Push-up" link="/tutorials/pushup"/>
                <TutorialItem name="Crow Pose" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Dip" link="/"/>
                <TutorialItem name="Assisted Handstand" link="/"/>
                <TutorialItem name="Inverted Row" link="/"/>
                <TutorialItem name="Pull-up" link="/"/>
                <TutorialItem name="Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Elbow Lever" link="/"/>
                <TutorialItem name="Handstand" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Planche Lean" link="/tutorials/planchelean"/>
                <TutorialItem name="Elevated Pike Pushup" link="/"/>
                <TutorialItem name="Inverted Row" link="/"/>
                <TutorialItem name="Pull-up" link="/"/>
                <TutorialItem name="Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Psuedo Pushup" link="/"/>
                <TutorialItem name="Bent Arm Stand" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Tuck Planche" link="/"/>
                <TutorialItem name="Assisted HSPU" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Tuck Planche PU" link="/"/>
                <TutorialItem name="Handstan Pushup (HSPU)" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Adv. Tuck Planche" link="/"/>
                <TutorialItem name="Deep HSPU" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Adv. Tuck Planche PU" link="/"/>
                <TutorialItem name="Assisted One Arm Handstand" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="90 Degree Hold" link="/"/>
                <TutorialItem name="One Arm Handstand" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Back Lever" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Super Adv. Tuck Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Straddle Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Straddle Planche PU" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Halflay Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Full Planche" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="Full Planche PU" link="/"/>
                <TutorialItem name="" link="/"/>
                <TutorialItem name="OA Inverted Row" link="/"/>
                <TutorialItem name="Chest Pull-up" link="/"/>
                <TutorialItem name="Assisted Pistol Squat" link="/"/>
            </div>

            <div className="skill-list-container">
                <TutorialItem name="One Arm Planche" link="/"/>
                <TutorialItem name="" link="/"/>
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