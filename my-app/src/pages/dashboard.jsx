import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BetaDisclaimer from "../components/betadisclaimer";
import "./dashboard.css";
import { useAuth } from "../config/auth-context.jsx";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateSkill, logWorkout } from "../config/firestore.js";
import { svgIcon } from "../utilites/svg-icons.js";
import {
  skillNameMap,
  skillDiffMap,
  skillLinkMap,
} from "../utilites/targetskills.js";
import { Link } from "react-router-dom";
import { skillTreeIcon } from "../utilites/skilltreeicons.js";
import { skillRP } from "../utilites/skilltorp.js";

export function Dashboard() {
  const { currentUser } = useAuth();
  const [userSkills, setUserSkills] = useState(null);
  const [push, setPush] = useState(null);
  const [pull, setPull] = useState(null);
  const [workoutCounter, setWorkoutCounter] = useState(0);
  const [restCounter, setRestCounter] = useState(0);
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

        setUserSkills(snap.data().skills ?? {});
      
        setPush(data.skills?.push || null);
        setPull(data.skills?.pull || null);

        setStreak(
          data.streak || {
            current: 0,
            longest: 0,
            lastLog: null,
          },
        );

        setWorkoutCounter(data.workout);
        setRestCounter(data.rest);
      }
    });
  }, [currentUser]);

  function calculateRank() {
    if(!userSkills) return 0;

    let rankSum = 0;

    for(const [skillName, progress] of Object.entries(userSkills)) {
      if(typeof progress !== "number") continue;

      const basePoints = skillRP.get(skillName) ?? 0;

      if(!basePoints) continue;

      const weight = progress/3
      rankSum += basePoints * weight;
    }

    return rankSum;
  }

  function todayString() {
    return new Date().toISOString().slice(0, 10);
  }

  const loggedToday = streak.lastLog === todayString();
  const totalDays = workoutCounter + restCounter;
  const workoutPercentage =
    totalDays > 0 ? Math.round((workoutCounter / totalDays) * 100) : 0;
  const skillPoints = calculateRank();
  const totalSkillRP = Math.round((skillPoints / 1229) * 750);
  const totalStreakRP = Math.round(Math.sqrt(streak.current/365) * 250);
  const totalRP = totalSkillRP + totalStreakRP;
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
            <div className="streak-counter">
              streak: {streak.current} {streak.current > 0 ? "🔥" : ""}
            </div>
            <div className="streak-data">
              <div className="streak-data__left">Longest streak: </div>
              <div className="streak-data__right">{streak.longest}</div>
            </div>
            <div className="streak-data">
              <div className="streak-data__left">Total workouts logged:</div>
              <div className="streak-data__right">{workoutCounter}</div>
            </div>
            <div className="streak-data">
              <div className="streak-data__left">Total rest days logged: </div>
              <div className="streak-data__right">{restCounter}</div>
              
            </div>
            <div className="streak-data">
              <div className="streak-data__left">Workout consistency: </div>
              <div className="streak-data__right">{workoutPercentage}%</div>
              
            </div>
          </div>
          <div className="streak-info">
            <button
              className="log-streak"
              disabled={loggedToday}
              onClick={async () => {
                const result = await logWorkout(currentUser.uid, "workout");
                if (!result) return;

                setStreak(result.streak);
                setWorkoutCounter(result.workout);
              }}
            >
              {loggedToday ? "Logged today" : "Log workout"}
            </button>
            <button
              className="log-streak"
              disabled={loggedToday}
              onClick={async () => {
                const result = await logWorkout(currentUser.uid, "rest");
                if (!result) return;

                setStreak(result.streak);
                setRestCounter(result.rest);
              }}
            >
              {loggedToday ? "Logged today" : "Log rest day"}
            </button>
            <div className="streak-rank-points">
              +{totalStreakRP} Rp
            </div>
          </div>
        </div>
        <p class="log-caption">
          *Make sure to log your workout or rest day once per day to keep your
          streak alive! Your last log was on {streak.lastLog}.
        </p>
      </div>

      <div className="rank-container">
        <div className="rank-display">
          Rank: plAtinuM
          <div className="rank-points">streak Rp contribution: {totalStreakRP} Rp</div>
          <div className="rank-points">skill Rp contribution: {totalSkillRP} Rp</div>
          <div className="rank-points">Total Rp: {totalRP} Rp</div>
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
