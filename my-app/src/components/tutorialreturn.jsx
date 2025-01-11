import React from 'react';
import "./tutorialreturn.css";
import { Link } from 'react-router-dom';


export default function TutorialReturn() {
    return(
        <div className="return-container">
            <Link to ="/tutorials" className="return-button">
                <div className="return-link">
                Return to Tutorial Page
                </div>
            </Link>
        </div>
    )
}