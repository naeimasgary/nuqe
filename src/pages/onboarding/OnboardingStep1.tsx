import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";

const nuqleiLogoSvg = (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="#00A6F4" />
    <path d="M8 20V10l6-3 6 3v10l-6 3-6-3z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2.5" fill="#fff" />
  </svg>
);

const CATEGORIES = [
  "Process Control",
  "Instrumentation",
  "PLC Programming",
  "SCADA Systems",
  "Industrial Networking",
  "Safety Systems",
  "Robotics & Automation",
  "Electrical Engineering",
  "Field Services",
];

export function OnboardingStep1() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(cat: string) {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.logo}>
        {nuqleiLogoSvg}
        <span className={styles.logoText}>Nuqlei</span>
      </Link>

      <div className={styles.card}>
        <div className={styles.stepBar}>
          <div className={[styles.stepDot, styles.done].join(" ")} />
          <div className={[styles.stepDot, styles.active].join(" ")} />
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Step 2 of 3</span>
        </div>

        <p className={styles.eyebrow}>Tell us about your business</p>
        <h1 className={styles.title}>What best describes what you do?</h1>
        <p className={styles.subtitle}>
          Select all categories that apply. This helps us match you with the right partners.
        </p>

        <div className={styles.chipGrid}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={[styles.chip, selected.includes(cat) ? styles.selected : ""].join(" ")}
              onClick={() => toggle(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="button"
            className={styles.nextBtn}
            disabled={selected.length === 0}
            onClick={() => navigate("/onboarding/step-2")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
