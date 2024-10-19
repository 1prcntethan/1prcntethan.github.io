import React from 'react';
import { Link } from 'react-router-dom';
import "./terminology-section-title.css"

export default function TermSectionTitle(term) {
    return(
        <div class="section-title">
        {term.title}
        </div>
    )
}
