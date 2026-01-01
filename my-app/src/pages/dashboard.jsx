import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BetaDisclaimer from "../components/betadisclaimer";
import "./dashboard.css";
import { useAuth } from "../config/auth-context.jsx";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { updateSkill } from "../config/firestore.js";
import { svgIcon } from "../utilites/svg-icons.js";
import { skillNameMap, skillDiffMap, skillLinkMap} from "../utilites/targetskills.js";
import { Link } from "react-router-dom";
import { skillTreeIcon } from "../utilites/skilltreeicons.js";

export function Dashboard() {
  const { currentUser } = useAuth();
  const [push, setPush] = useState(null);
  const [pull, setPull] = useState(null);

  useEffect(() => {
    if (!currentUser) return;

    const ref = doc(db, "users", currentUser.uid);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        console.log(snap.data());
        const data = snap.data();

        setPush(data.skills?.push || null);
        setPull(data.skills?.pull || null);
      }
    });
  }, [currentUser]);


  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="dashboard-welcome">
        welcome to the wings dashboard,
        {"  "}
        <div className="dashboard-welcome__email">{currentUser?.email}</div>
      </div>

      <div className="dashboard-skill__container">
        <div className="dashboard-skill__push">
          <p>target push</p>
          <Link to={skillLinkMap.get(push)} className="skill-svg">{skillTreeIcon.get(push)}</Link>
          <div className="dashboard-skill__title">
            {push === null || push === "Change target push skill" ? "select target push skill" : skillNameMap?.get(push)}
          </div>
          <div className="dashboard-skill__difficulty"> 
            skill difficulty: {skillDiffMap?.get(push)?.toLowerCase()}
          </div>
          <select
            id="push-selector"
            className="skill-selector"
            onChange={(e) => {
              updateSkill(currentUser.uid, "push", e.target.value);
              setPush(e.target.value);
            }}
          >
            <option>Change target push skill</option>
            <option value="handstand">Handstand</option>
            <option value="hspu">Handstand Push-up</option>
            <option value="ninety-deg-hold">90 Degree Hold</option>
            <option value="full-pl">Full Planche</option>
          </select>
        </div>
        <div className="dashboard-skill__pull">
          <p>target pull</p>
          <Link to={skillLinkMap.get(pull)} className="skill-svg">{skillTreeIcon.get(pull)}</Link>
          <div className="dashboard-skill__title">
            {pull === null || pull === "Change target pull skill" ? "select target pull skill" : skillNameMap?.get(pull)}
          </div>
          <div className="dashboard-skill__difficulty"> 
            skill difficulty: {skillDiffMap?.get(pull)?.toLowerCase()}
          </div>
          <select
            id="pull-selector"
            className="skill-selector"
            onChange={(e) => {
              updateSkill(currentUser.uid, "pull", e.target.value);
              setPull(e.target.value);
            }}
          >
            <option value={null}>Change target pull skill</option>
            <option value="pull-up">Pull-up</option>
            <option value="muscle-up">Muscle Up</option>
            <option value="full-fl">Front Lever</option>
            <option value="oac-oap">One Arm Pull-up</option>
          </select>
        </div>
      </div>

      <Footer />
    </>
  );
}
