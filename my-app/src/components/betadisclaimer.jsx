import React from 'react';
import "./betadisclaimer.css";
import { Link } from 'react-router-dom';

export default function BetaDisclaimer() {
    return(
        <div className="beta-disclaimer-container">
            <div className="scroll">
                <div className="beta-disclaimer-text">
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/hi1HeRBKCSRhVnKi9" className="beta-feedback">link</Link>. 
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/hi1HeRBKCSRhVnKi9" className="beta-feedback">link</Link>. 
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/hi1HeRBKCSRhVnKi9" className="beta-feedback">link</Link>. 
                </div>
            </div>
        </div>
    )
}