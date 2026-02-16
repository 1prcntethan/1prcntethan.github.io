import React from 'react';
import "./terminology-section-title.css"

export default function TermSectionTitle(term) {
    return(
        <div className="section-title">
        {term.title}
        </div>
    )
}
