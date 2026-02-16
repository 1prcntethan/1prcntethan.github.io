import React from 'react';
import "./skillhero.css";
import { heroBlurb } from '../utilites/heroblurb.js';
import { heroSvg } from '../utilites/herosvg.jsx';


export default function SkillHero(skill) {
    return(
        <div className="skill-hero">
            <div className="skill-hero-title">
                {skill.title}
            </div>
            {/* <HeroSvg identifier={skill.identifier}/> */}
            {heroSvg.get(skill.identifier)}
            
            {/* <HeroBlurb identifier={skill.identifier}/> */}
            <div className="hero-blurb">
                {heroBlurb.get(skill.identifier)}
            </div>
        </div>
    )
}