import React from "react";
import "./skilltreelinks.css";
import { Link } from "react-router-dom";

export default function SkillTreeLinks(link) {
  return (
    <>
      
        <Link to= {link.link} id="tree-link-item">
          <div className="tree-link">
          {link.text}
          </div>
        </Link>
      
    </>
  );
}
