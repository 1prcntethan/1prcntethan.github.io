import React from 'react';
import { Link } from 'react-router-dom';
import "./heroblurb.css";


export default function HeroBlurb(skill) {
    if(skill.identifier === "planche-lean") {
        return(
            <div class="hero-blurb">
            The Planche Lean is a fundamental exercise that builds strength and stability in the shoulders, core, and wrists. When done correctly, this exercise activates the same muscles used in a full planche.
            </div>
        )
    } else if(skill.identifier === "push-up") {
        return(
            <div class="hero-blurb">
                The Push Up is a basic pushing exercise that builds strength in the chest, triceps, and core. This exercise represents the foundation for almost all pushing skills.
            </div>
        )
    }
    
}