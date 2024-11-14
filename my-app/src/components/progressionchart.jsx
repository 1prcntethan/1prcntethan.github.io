import React from 'react';
import { Link } from 'react-router-dom';
import "./progressionchart.css";
import { svgIcon } from '../utilites/svg-icons.js';


export default function ProgressionChart(skill) {
    return (
        <>
            <div className="progression-info-container"> 
                <div className="progression-info">
                    <div className="skill-section-title">
                        progressions
                    </div>
                    
                    <LabelChart />

                    <div className="progression-chart-container">
                        <div className="prog-chart-item"> 
                            <Link to ={skill.link1} className="svg-icon" >
                                {svgIcon.get(skill.svg1)}
                            </Link>
                        </div>

                        <ProgressionDots />
                    
                        <div className="prog-chart-item">
                            <Link to ={skill.link2} className="svg-icon" >
                                {svgIcon.get(skill.svg2)}
                            </Link>
                        </div>
                        

                        <ProgressionArrows />

                        <div className="prog-chart-item">
                            <Link to ={skill.link3} className="svg-icon" >
                                {svgIcon.get(skill.svg3)}
                            </Link>
                        </div>

                        <ProgressionArrows />

                        <div className="prog-chart-item">
                            <Link to ={skill.link4} className="svg-icon" >
                                {svgIcon.get(skill.svg4)}
                            </Link>
                        </div>

                        <ProgressionDots />

                        <div className="prog-chart-item">
                            <Link to ={skill.link5} className="svg-icon" >
                                {svgIcon.get(skill.svg5)}
                            </Link>
                        </div>
                    </div>


                    <div className="progression-chart-container">
                        <BottomLabel name={skill.name1} />
                        <div className="progression-dots"></div>
                        <BottomLabel name={skill.name2} />
                        <div className="progression-arrow"></div>
                        <BottomLabel name={skill.name3} />
                        <div className="progression-arrow"></div>
                        <BottomLabel name={skill.name4} />
                        <div className="progression-dots"></div>
                        <BottomLabel name={skill.name5} />
                    </div>
                
                </div>
            </div>
            
        </>
    )
}


function LabelChart() {
    return (
        <div className="label-chart-container">
            <div className="label-chart-item">
                base skill
            </div>
            <div className="progression-dots"></div>
            <div className="label-chart-item">
                regression
            </div>
            <div className="progression-arrow"></div>
            <div className="label-chart-item">
                current skill
            </div>
            <div className="progression-arrow"></div>
            <div className="label-chart-item">
                progression
            </div>
            <div className="progression-dots"></div>
            <div className="label-chart-item">
                target skill
            </div>
        </div>
    )
}

function BottomLabel(skill) {
    return (
        <div className="prog-chart-item">
            {skill.name}
        </div>
    )
}

function ProgressionDots(){
    return (
        <div className="progression-dots">               
            <svg width="329" height="80" viewBox="0 0 329 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39.5" cy="39.5" r="39.5" fill="#F3F3F3"/>
                <circle cx="164.5" cy="40.5" r="39.5" fill="#F3F3F3"/>
                <circle cx="289.5" cy="39.5" r="39.5" fill="#F3F3F3"/>
            </svg>
        </div>
    )
}

function ProgressionArrows(){
    return (
        <div className="progression-arrow">
            <svg width="318" height="145" viewBox="0 0 318 145" fill="none" xmlns="http://www.w3.org/2000/svg">                
            <rect y="50" width="237" height="45" rx="17" fill="#F3F3F3"/>                 
            <path d="M187.304 18.4269C187.304 4.57051 202.304 -4.08975 214.304 2.83845L308.054 56.965C320.054 63.8932 320.054 81.2138 308.054 88.142L214.304 142.269C202.304 149.197 187.304 140.537 187.304 126.68L187.304 18.4269Z" fill="#F3F3F3"/>
            </svg>
        </div>
    )
}