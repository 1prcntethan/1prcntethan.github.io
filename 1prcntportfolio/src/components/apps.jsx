import React from "react";

function IconWings() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M12 4c-3 2-7 3-9 2 1 4 4 7 9 8 5-1 8-4 9-8-2 1-6 0-9-2Z" />
      <path d="M12 4v10" />
    </svg>
  );
}

function IconSwype() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
      <circle cx="5" cy="12" r="1.6" />
    </svg>
  );
}

function IconFlowstate() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 15c2-4 4 4 6 0s4 4 6 0 4 4 6 0" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  );
}

function IconAbout() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6" />
    </svg>
  );
}

export const APPS = [
  {
    id: "wings",
    name: "WINGS",
    tagline: "calisthenics skill-tree PWA",
    icon: <IconWings />,
    blurb:
      "A React + Firebase progressive web app that maps calisthenics skills into an interactive dependency tree.",
    description:
      "WINGS turns calisthenics progression into a visual skill tree — instead of guessing what to train next, users see exactly which moves unlock which, and where they sit on the graph today. Built solo, from the Instagram audience up: content came first, the app followed once there was a real user base asking for a way to track progress.",
    media: null, // TODO: add gif/video of the skill tree in action
    stats: [
      { value: "33k", label: "instagram" },
      { value: "1.2k", label: "monthly users" },
    ],
    stack: ["React", "Firebase", "Vite", "Cloudflare Pages"],
    github: "", // TODO: exact repo URL
    live: "",
    journey: [
      {
        stage: "content first",
        text: "Grew a calisthenics Instagram to tens of thousands of followers before writing a line of the app — the audience validated the demand.",
      },
      {
        stage: "the graph",
        text: "Modeled real skill progressions (prerequisite moves, branching paths) as an actual dependency graph, not a flat checklist.",
      },
      {
        stage: "shipping",
        text: "Deployed as a PWA on Cloudflare Pages so it installs like a native app with zero backend hosting cost.",
      },
    ],
  },
  {
    id: "swype",
    name: "Swype",
    tagline: "webcam gesture controller",
    icon: <IconSwype />,
    blurb:
      "Real-time hand-gesture cursor control using a MediaPipe landmark pipeline feeding a custom PyTorch LSTM classifier.",
    description:
      "Swype reads hand landmarks from a webcam feed in real time and classifies gestures into cursor actions — move, click, swipe — using a small LSTM trained on a sliding window of frames. Temporal voting across the window filters out single-frame noise before anything reaches the OS cursor.",
    media: null, // TODO: add demo gif of gesture control
    stats: [{ value: "92%", label: "val accuracy" }],
    stack: ["Python", "PyTorch", "MediaPipe", "PyQt6"],
    github: "", // TODO: exact repo URL
    live: "",
    journey: [
      {
        stage: "v1 — prototype",
        text: "First version was browser-based, MediaPipe + ONNX, built fast to prove the concept worked at all.",
      },
      {
        stage: "v2 — rebuild",
        text: "Rewrote as a native Python app: a 75-dim feature vector per frame, a 30-frame sliding window, and a GestureLSTM classifier hitting 92% validation accuracy.",
      },
      {
        stage: "making it usable",
        text: "Added a PyQt6 HUD overlay and exponential smoothing on cursor movement so the output actually feels controllable, not jittery.",
      },
    ],
  },
  {
    id: "flowstate",
    name: "Flowstate",
    tagline: "desktop focus tracker",
    icon: <IconFlowstate />,
    blurb:
      "An Electron focus app that classifies on-screen activity locally via OCR, so no screenshot ever leaves your device.",
    description:
      "Flowstate watches what you're working on during a focus session and tells you whether you're on-task — without uploading a single screenshot. A local Python OCR sidecar extracts text from the screen, classifies it against your stated task, and immediately discards the image. Only the classification label leaves the device.",
    media: null, // TODO: add demo gif of active session + classification
    stats: [],
    stack: ["Electron", "React", "TypeScript", "Supabase", "Flask/OCR"],
    github: "", // TODO: exact repo URL
    live: "",
    journey: [
      {
        stage: "privacy model first",
        text: "Designed the OCR pipeline around a hard constraint: extract text locally, discard the image immediately, and never let raw screenshots leave the device.",
      },
      {
        stage: "classification pipeline",
        text: "Built a tiered rule-based classifier — off-task keywords, then on-task keywords, then subject and todo matching — before falling back to an ambiguous state.",
      },
      {
        stage: "current bug",
        text: "The ambiguous label was being scored and styled identically to on-task — next up is a proper third visual state with partial-credit scoring.",
      },
    ],
  },
  {
    id: "about",
    name: "About",
    tagline: "ethan tay",
    icon: <IconAbout />,
    blurb:
      "Incoming UW CS junior-standing freshman, building toward SWE internships and eventually ML research.",
    description:
      "Incoming UW CS student with junior standing, targeting SWE internships and a longer-term interest in ML engineering and AI research. Twelve years of oil painting, twelve years of piano, and seven years of cello sit underneath all of it — none of it competition-driven, all of it feeding the same design sensibility that shows up in how this site looks.",
    media: null,
    stats: [],
    stack: ["UW CS", "Vancouver, WA"],
    github: "",
    live: "",
    journey: [],
  },
];
