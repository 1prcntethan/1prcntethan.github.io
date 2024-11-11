import React from 'react';
import "./skillhero.css";
import HeroSvg from './herosvg';
import HeroBlurb from './heroblurb.jsx';
import { heroSvg } from '../utilites/herosvg.js';


export default function SkillHero(skill) {
    return(
        <div className="skill-hero">
            <div className="skill-hero-title">
                {skill.title}
            </div>
            <HeroSvg identifier={skill.identifier}/>
            {/* {heroSvg.get(skill.identifier)} */}
            
            <HeroBlurb identifier={skill.identifier}/>
            
        </div>
    )
}