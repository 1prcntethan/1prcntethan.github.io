import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BetaDisclaimer from "../components/betadisclaimer";
import "./workoutlog.css";
import { useAuth } from "../config/auth-context.jsx";
import { db } from "../config/firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { formatDate, getFitnessDateObject } from "../config/firestore.js";

// ─── section config ────────────────────────────────────────────────────────────
// Each section has a label, a max number of exercises, and a hint shown in the UI.
const SECTIONS = [
  {
    key: "warmup",
    label: "Warmup",
    max: 2,
    hint: "e.g. shoulder rotations, scapular pulls",
  },
  {
    key: "primary",
    label: "Primary Skill",
    max: 2,
    hint: "e.g. planche attempts, handstand practice",
  },
  {
    key: "secondary",
    label: "Secondary",
    max: 3,
    hint: "e.g. planche leans, tuck planche holds",
  },
  {
    key: "volume",
    label: "Volume / Accessory",
    max: 3,
    hint: "e.g. dips, push-ups, core work",
  },
];

// ─── blank exercise factory ────────────────────────────────────────────────────
function blankExercise() {
  return { name: "", sets: "", reps: "", holdTime: "", notes: "" };
}

// ─── blank log factory ─────────────────────────────────────────────────────────
function blankLog() {
  const sections = {};
  SECTIONS.forEach((s) => {
    sections[s.key] = Array.from({ length: s.max }, blankExercise);
  });
  return {
    date: formatDate(getFitnessDateObject()),
    category: "push",
    sections,
  };
}

// ─── helpers ───────────────────────────────────────────────────────────────────
async function saveWorkoutLog(uid, workoutData) {
  const logsRef = collection(db, "users", uid, "workoutLogs");
  const docRef = await addDoc(logsRef, {
    ...workoutData,
    loggedAt: serverTimestamp(),
  });
  return docRef.id;
}

async function getWorkoutLogs(uid, limitCount = 20) {
  const logsRef = collection(db, "users", uid, "workoutLogs");
  const q = query(logsRef, orderBy("loggedAt", "desc"), limit(limitCount));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ─── sub-components ────────────────────────────────────────────────────────────

// ── ExerciseRow: both inputs show combined placeholder ──────────────────────
// Replace your existing ExerciseRow with this

function ExerciseRow({ exercise, onChange }) {
  return (
    <div className="wl-exercise-row">
      <input
        className="wl-input wl-input--name"
        placeholder="exercise name"
        value={exercise.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <input
        className="wl-input wl-input--small"
        placeholder="sets"
        type="number"
        min="1"
        value={exercise.sets}
        onChange={(e) => onChange("sets", e.target.value)}
      />
      <input
        className="wl-input wl-input--hold"
        placeholder="reps / hold (s)"
        value={exercise.reps}
        onChange={(e) => onChange("reps", e.target.value)}
      />
      <input
        className="wl-input wl-input--notes"
        placeholder="notes (optional)"
        value={exercise.notes}
        onChange={(e) => onChange("notes", e.target.value)}
      />
    </div>
  );
}

function SectionBlock({ section, exercises, onChange, isHold }) {
  return (
    <div className="wl-section">
      <div className="wl-section-header">
        <span className="wl-section-label">{section.label}</span>
        <span className="wl-section-hint">{section.hint}</span>
        <span className="wl-section-limit">max {section.max}</span>
      </div>
      {exercises.map((ex, i) => (
        <ExerciseRow
          key={i}
          exercise={ex}
          isHold={isHold}
          onChange={(field, val) => onChange(section.key, i, field, val)}
        />
      ))}
    </div>
  );
}

function LogCard({ log, onCopy }) {
  const [open, setOpen] = useState(false);

  const hasExercises = (sectionKey) =>
    log.sections?.[sectionKey]?.some((e) => e.name.trim() !== "");

  return (
    <div className="wl-card">
      <div className="wl-card-header" onClick={() => setOpen((o) => !o)}>
        <div className="wl-card-meta">
          <span className="wl-card-date">{log.date}</span>
          <span className={`wl-card-category wl-cat--${log.category}`}>
            {log.category}
          </span>
        </div>
        <div className="wl-card-actions">
          <button
            className="wl-copy-btn"
            onClick={(e) => {
              e.stopPropagation();
              onCopy(log);
            }}
          >
            copy
          </button>
          <span className="wl-card-toggle">{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {open && (
        <div className="wl-card-body">
          {SECTIONS.map((s) =>
            hasExercises(s.key) ? (
              <div key={s.key} className="wl-card-section">
                <div className="wl-card-section-title">{s.label}</div>
                {log.sections[s.key]
                  .filter((e) => e.name.trim() !== "")
                  .map((e, i) => (
                    <div key={i} className="wl-card-exercise">
                      <span className="wl-card-ex-name">{e.name}</span>
                      <span className="wl-card-ex-detail">
                        {e.sets && `${e.sets} sets`}
                        {e.reps && ` × ${e.reps}`}
                        {e.notes && ` — ${e.notes}`}
                      </span>
                    </div>
                  ))}
              </div>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

// ─── main component ────────────────────────────────────────────────────────────

export function WorkoutLog() {
  const { currentUser } = useAuth();

  const [logs, setLogs] = useState([]);
  const [logsLoading, setLogsLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(blankLog());
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // primary section uses hold time if category is push (isometric heavy)
  // you can refine this logic — for now primary is always "hold eligible"
  const primaryIsHold = true;

  // ── fetch past logs ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!currentUser) return;
    setLogsLoading(true);
    getWorkoutLogs(currentUser.uid)
      .then(setLogs)
      .finally(() => setLogsLoading(false));
  }, [currentUser]);

  // ── field updater ────────────────────────────────────────────────────────────
  function updateExercise(sectionKey, index, field, value) {
    setFormData((prev) => {
      const updatedSection = prev.sections[sectionKey].map((ex, i) =>
        i === index ? { ...ex, [field]: value } : ex,
      );
      return {
        ...prev,
        sections: { ...prev.sections, [sectionKey]: updatedSection },
      };
    });
  }

  // ── save ─────────────────────────────────────────────────────────────────────
  async function handleSave() {
    setSaveError(null);

    // require at least one exercise name filled in
    const hasAny = SECTIONS.some((s) =>
      formData.sections[s.key].some((e) => e.name.trim() !== ""),
    );
    if (!hasAny) {
      setSaveError("Add at least one exercise before saving.");
      return;
    }

    setSaving(true);
    try {
      const saved = await saveWorkoutLog(currentUser.uid, formData);
      // prepend to log list
      setLogs((prev) => [{ id: saved, ...formData }, ...prev]);
      setFormData(blankLog());
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setSaveError("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleCopy(log) {
    // rebuild sections to match current SECTIONS config
    // in case section slots have changed since the log was saved
    const sections = {};
    SECTIONS.forEach((s) => {
      const saved = log.sections?.[s.key] ?? [];
      // pad or trim to current max
      const padded = Array.from(
        { length: s.max },
        (_, i) => saved[i] ?? blankExercise(),
      );
      sections[s.key] = padded;
    });

    setFormData({
      date: formatDate(getFitnessDateObject()), // today's date, not the old one
      category: log.category,
      sections,
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />
      <BetaDisclaimer />

      <div className="workout-welcome">
        welcome to the wings workout log,
        {"  "}
        <div className="workout-welcome__email">{currentUser?.email}</div>
      </div>

      {/* ── new log button ── */}
      <div className="workout-container">
        <div
          className="workout-display"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <p style={{ margin: 0, fontFamily: "Fira Sans", fontWeight: "200" }}>
            Log a new workout session with structured exercise tracking.
          </p>
          <button
            className="log-workout"
            onClick={() => setShowForm((s) => !s)}
          >
            {showForm ? "cancel" : "+ new workout"}
          </button>
        </div>
        <p className="workout-caption" style={{ fontWeight: "200" }}>
          Don't know how to structure your workout? Check out the{" "}
          <Link to="/training/beginnerworkout" className="log-caption-link">
            beginner workout guide
          </Link>{" "}
          or the{" "}
          <Link to="/training/intermediateworkout" className="log-caption-link">
            intermediate workout guide
          </Link>{" "}
          to learn how to craft a successful workout.
        </p>
      </div>

      {/* ── log form ── */}
      {showForm && (
        <div className="workout-container">
          <div className="wl-form">
            {/* date + category row */}
            <div className="wl-form-top">
              <div className="wl-field">
                <label className="wl-label">Date</label>
                <input
                  className="wl-input"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, date: e.target.value }))
                  }
                />
              </div>
              <div className="wl-field">
                <label className="wl-label">Category</label>
                <select
                  className="category-selector"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, category: e.target.value }))
                  }
                >
                  <option value="push">push</option>
                  <option value="pull">pull</option>
                  <option value="legs">legs</option>
                  <option value="full-body">full body</option>
                  <option value="conditioning">conditioning</option>
                </select>
              </div>
            </div>

            {/* column headers */}
            <div className="wl-exercise-row wl-exercise-row--header">
              <span className="wl-col--name">exercise</span>
              <span className="wl-col--small">sets</span>
              <span className="wl-col--hold">reps / hold (s)</span>
              <span className="wl-col--notes">notes</span>
            </div>

            {/* sections */}
            {SECTIONS.map((s) => (
              <SectionBlock
                key={s.key}
                section={s}
                exercises={formData.sections[s.key]}
                onChange={updateExercise}
                // only primary skill uses hold time toggle; others use reps
                isHold={s.key === "primary" && primaryIsHold}
              />
            ))}

            {saveError && <p className="wl-error">{saveError}</p>}

            <button
              className="log-workout"
              onClick={handleSave}
              disabled={saving}
              style={{ marginTop: "1rem" }}
            >
              {saving ? "saving..." : "save workout"}
            </button>
          </div>
        </div>
      )}

      {/* ── past logs ── */}
      <div className="workout-container">
        <div className="wl-logs-header">past workouts</div>
        {logsLoading ? (
          <p style={{ padding: "1rem" }}>loading...</p>
        ) : logs.length === 0 ? (
          <p
            style={{
              padding: "1rem",
              opacity: 0.8,
              fontFamily: "Fira Sans",
              fontWeight: "200",
            }}
          >
            No workouts logged yet. Hit <i> + new workout </i> to get started.
          </p>
        ) : (
          <div className="wl-log-list">
            {logs.map((log) => (
              <LogCard key={log.id} log={log} onCopy={handleCopy} />
            ))}
          </div>
        )}
      </div>

      {/* ── donate ── */}
      <div className="dashboard-donate">
        <div>
          Enjoying this platform? Support its development. Donate through{" "}
          <Link to="https://ko-fi.com/wingssw" className="donate-link">
            Ko-fi
          </Link>{" "}
          or{" "}
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
