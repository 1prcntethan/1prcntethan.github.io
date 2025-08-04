import React from "react";
import "./skilltreelinks.css";
import { Link } from "react-router-dom";

export default function SkillTreeLinks(link) {
  return (
    <>
      <div className="tree-link">
        <Link to= {link.link} id="tree-link-item">
          {link.text}
        </Link>
      </div>
    </>
  );
}
