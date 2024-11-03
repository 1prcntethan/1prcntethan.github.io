import React from 'react';
import { Link } from 'react-router-dom';
import "./skillhero.css";
import HeroSvg from './herosvg';
import HeroBlurb from './heroblurb';


export default function SkillHero(skill) {
    return(
        <div className="skill-hero">
            <div className="skill-hero-title">
                {skill.title}
            </div>
            <HeroSvg identifier={skill.identifier}/>
            
            <HeroBlurb identifier={skill.identifier}/>
            
        </div>
    )
}