import React, { useEffect, useState } from "react";
import "./navbar.css";

const SECTIONS = [
  { id: "home", label: "home" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-pill">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`nav-link ${activeId === id ? "nav-link-active" : ""}`}
          onClick={() => handleClick(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
