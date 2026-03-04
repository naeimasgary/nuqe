import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";

const nuqleiLogoSvg = (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="#00A6F4" />
    <path d="M8 20V10l6-3 6 3v10l-6 3-6-3z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2.5" fill="#fff" />
  </svg>
);

export function BusinessName() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    navigate("/onboarding/step-1");
  }

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.logo}>
        {nuqleiLogoSvg}
        <span className={styles.logoText}>Nuqlei</span>
      </Link>

      <div className={styles.card}>
        <div className={styles.stepBar}>
          <div className={[styles.stepDot, styles.active].join(" ")} />
          <div className={styles.stepDot} />
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Step 1 of 3</span>
        </div>

        <p className={styles.eyebrow}>Welcome</p>
        <h1 className={styles.title}>What is your business name?</h1>
        <p className={styles.subtitle}>
          This will be displayed on your profile and visible to other members on the platform.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inlineInputWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <input
              className={styles.inlineInput}
              type="text"
              placeholder="e.g. Acme Industrial Co."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
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
              type="submit"
              className={styles.nextBtn}
              disabled={!name.trim()}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
