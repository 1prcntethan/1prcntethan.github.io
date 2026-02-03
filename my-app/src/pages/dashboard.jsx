import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BetaDisclaimer from "../components/betadisclaimer";
import "./dashboard.css";
import { useAuth } from "../config/auth-context.jsx";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateSkill } from "../config/firestore.js";
import { svgIcon } from "../utilites/svg-icons.js";
import {
  skillNameMap,
  skillDiffMap,
  skillLinkMap,
} from "../utilites/targetskills.js";
import { Link } from "react-router-dom";
import { skillTreeIcon } from "../utilites/skilltreeicons.js";

export function Dashboard() {
  const { currentUser } = useAuth();
  const [push, setPush] = useState(null);
  const [pull, setPull] = useState(null);
  const [streak, setStreak] = useState({
    current: 0,
    longest: 0,
    lastLog: null,
  });

  useEffect(() => {
    if (!currentUser) return;

    const ref = doc(db, "users", currentUser.uid);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        console.log(snap.data());
        const data = snap.data();

        setPush(data.skills?.push || null);
        setPull(data.skills?.pull || null);

        setStreak(
          data.streak || {
            current: 0,
            longest: 0,
            lastLog: null,
          },
        );
      }
    });
  }, [currentUser]);

  async function logWorkout(uid) {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return;

    const data = snap.data();
    const streak = data.streak || {
      current: 0,
      longest: 0,
      lastLog: null,
    };

    const today = todayString();
    const last = streak.lastLog;

    if (last === today) {
      // already logged today → do nothing
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    let newCurrent = last === yesterdayStr ? streak.current + 1 : 1;

    let newLongest = Math.max(streak.longest, newCurrent);

    await updateDoc(ref, {
      streak: {
        current: newCurrent,
        longest: newLongest,
        lastLog: today,
      },
    });

    setStreak({
      current: newCurrent,
      longest: newLongest,
      lastLog: today,
    });
  }

  function todayString() {
    return new Date().toISOString().slice(0, 10);
  }
  const loggedToday = streak.lastLog === todayString();

  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      <div className="dashboard-welcome">
        welcome to the wings dashboard,
        {"  "}
        <div className="dashboard-welcome__email">{currentUser?.email}</div>
      </div>

      <div className="streak-container">
        <div className="streak-display">
          <div className="streak-info">
            <div className="streak-counter">streak: {streak.current} {streak.current > 0 ? "🔥" : ""}</div>
            <div className="streak-longest">
              longest streak: {streak.longest}
            </div>
          </div>

          <button
            className="log-streak"
            onClick={() => logWorkout(currentUser.uid)}
            disabled={loggedToday}
          >
            {loggedToday ? "Logged today ✔" : "Log workout"}
          </button>
        </div>
      </div>

      <div className="dashboard-skill__container">
        <div className="dashboard-skill__push">
          <p>target push</p>
          <Link to={skillLinkMap.get(push)} className="skill-svg">
            {skillTreeIcon.get(push)}
          </Link>
          <div className="dashboard-skill__title">
            {push === null || push === "Change target push skill"
              ? "select target push skill"
              : skillNameMap?.get(push)}
          </div>
          <div className="dashboard-skill__difficulty">
            skill difficulty: {skillDiffMap?.get(push)?.toLowerCase()}
          </div>
          <select
            id="push-selector"
            className="skill-selector"
            onChange={async (e) => {
              const newSkill = e.target.value;

              try {
                await updateSkill(currentUser.uid, "push", newSkill);
                setPush(newSkill);
              } catch (error) {
                if (error.code === "permission-denied") {
                  alert("Please wait 2 seconds between skill changes.");
                } else {
                  console.error(error);
                  alert("An error occured. Please try again.");
                }
              }
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
          <Link to={skillLinkMap.get(pull)} className="skill-svg">
            {skillTreeIcon.get(pull)}
          </Link>
          <div className="dashboard-skill__title">
            {pull === null || pull === "Change target pull skill"
              ? "select target pull skill"
              : skillNameMap?.get(pull)}
          </div>
          <div className="dashboard-skill__difficulty">
            skill difficulty: {skillDiffMap?.get(pull)?.toLowerCase()}
          </div>
          <select
            id="pull-selector"
            className="skill-selector"
            onChange={async (e) => {
              const newSkill = e.target.value;

              try {
                await updateSkill(currentUser.uid, "pull", newSkill);
                setPull(newSkill);
              } catch (error) {
                if (error.code === "permission-denied") {
                  alert("Please wait 2 seconds between skill changes.");
                } else {
                  console.error(error);
                  alert("An error occured. Please try again.");
                }
              }
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
      <div className="dashboard-welcome">more features coming soon...</div>
      <Footer />
    </>
  );
}
