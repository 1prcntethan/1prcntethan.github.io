import React from "react";
import "./skilltreelinkcontainer.css";
import SkillTreeLinks from "./skilltreelinks.jsx";

export default function SkillTreeLinkContainer() {
  return (
    <>
      <div className="skilltree-links">
      
        <SkillTreeLinks link="/tutorials" text="tutorials" />

        <SkillTreeLinks link="/" text="home" />
      
        <SkillTreeLinks link="/dashboard" text="dashboard" />
      </div>
      
    </>
  );
}
