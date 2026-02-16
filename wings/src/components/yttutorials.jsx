import React from 'react';
import "./yttutorials.css";
import "../pages/tutorials/skillpage.css";
import { creatorGuides } from '../utilites/creatorguides';


export default function YTTutorial(skill) {
    const tutorialURLs = creatorGuides.get(skill.identifier) || [];

    return (
        <div className="yt-tutorial">
            <div className="section-title">creator tutorials</div>

            <div className="yt-tutorial-content">
                {tutorialURLs.map((url, i) => (
                    <div className="yt-tutorial-item" key={i}>
                        <iframe
                            className="yt-tutorial-iframe"
                            src={url}
                            title={`YouTube video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}