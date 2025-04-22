import React from 'react';
import "./betadisclaimer.css";
import { Link } from 'react-router-dom';

export default function BetaDisclaimer() {
    return(
        <div className="beta-disclaimer-container">
            <div className="scroll">
                <div className="betadisclaimer-text">
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/ChdE8Mq3YNWXCfTa6" className="beta-feedback">link</Link>. 
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/ChdE8Mq3YNWXCfTa6" className="beta-feedback">link</Link>. 
                wings is currently undergoing beta phase. please report any bugs or issues through this <Link to = "https://forms.gle/ChdE8Mq3YNWXCfTa6" className="beta-feedback">link</Link>. 
                </div>
            </div>
        </div>
    )
}