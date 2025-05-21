import React from 'react';
import "./yttutorials.css";
import "../pages/tutorials/skillpage.css";
import { creatorGuides } from '../utilites/creatorguides';


export default function YTTutorial({ skill }) {
    return (
        <div className="yt-tutorial">
            <div className="section-title">creator tutorials</div>

            <div className="yt-tutorial-content">
                {skill.tutorials.map((url, i) => (
                    <div className="yt-tutorial-item" key={i}>
                        <iframe
                            width="560"
                            height="315"
                            src={url}
                            title={`YouTube video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>

            {creatorGuides.get(skill.identifier)}
        </div>
    );
}