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
import { svgIcon } from "../utilites/svg-icons.jsx";
import {
  skillNameMap,
  skillDiffMap,
  skillLinkMap,
} from "../utilites/targetskills.js";
import { Link } from "react-router-dom";

export function WorkoutLog() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const ref = doc(db, "users", currentUser.uid);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();

        console.log(data)
      }
    });
  }, [currentUser]);


  return (
    <>
      <Navbar />
      <BetaDisclaimer />
      
      <div className="dashboard-donate">
        <div>
          Enjoying this platform? Support its development. Donate through
          <Link to="https://ko-fi.com/wingssw" className="donate-link">
            Ko-fi
          </Link>
          or
          <Link
            to="https://www.paypal.com/donate/?hosted_button_id=RNREJQ826VL46"
            className="donate-link"
          >
            Paypal
          </Link>
          !!
        </div>
      </div>
      <Footer />
    </>
  );
}
