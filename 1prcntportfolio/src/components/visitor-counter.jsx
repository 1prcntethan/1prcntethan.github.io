// visitor-counter.jsx
import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../config/firebase.js"; // your existing Firebase app init
import "./visitor-counter.css";

const SESSION_FLAG = "1pct_session_counted";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const counterRef = doc(db, "meta", "sessionCount");

    async function run() {
      const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);

      if (!alreadyCounted) {
        // atomic — safe even if many people load the site in the same instant
        await setDoc(counterRef, { count: increment(1) }, { merge: true });
        sessionStorage.setItem(SESSION_FLAG, "1");
      }

      const snap = await getDoc(counterRef);
      if (!cancelled && snap.exists()) {
        setCount(snap.data().count);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null; // avoid a flash of "0" before Firestore responds

  return (
    <div className="visitor-counter">
      <span className="visitor-counter-label">SESSION</span>
      <span className="visitor-counter-value">#{String(count).padStart(6, "0")}</span>
    </div>
  );
}