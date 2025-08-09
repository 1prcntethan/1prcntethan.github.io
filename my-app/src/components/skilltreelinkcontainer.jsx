import React from "react";
import "./skilltreelinkcontainer.css";
import SkillTreeLinks from "./skilltreelinks.jsx";

export default function SkillTreeLinkContainer() {
  return (
    <>
      <div className="skilltree-links">
        <SkillTreeLinks link="/" text="home" />
      
        <SkillTreeLinks link="/tutorials" text="tutorials" />
      
        <SkillTreeLinks link="/training" text="training" />
      
        <SkillTreeLinks link="/terminology" text="terminology" />
      </div>
      
    </>
  );
}
