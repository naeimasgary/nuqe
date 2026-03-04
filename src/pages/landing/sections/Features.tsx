import type { ReactNode } from "react";
import styles from "./Features.module.css";

interface FeatureItem {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12V7L12 3Z" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#0068a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="1" x2="23" y2="23" stroke="#0068a8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 4 12 14.01 9 11.01" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="14" width="7" height="7" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="14" width="7" height="7" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features: FeatureItem[] = [
  {
    icon: <ShieldIcon />,
    iconBg: "var(--rose-100)",
    title: "Vetted Buyers Only",
    description:
      "Every buyer is admin-approved before accessing the platform, ensuring quality leads for sellers.",
  },
  {
    icon: <CheckCircleIcon />,
    iconBg: "var(--teal-100)",
    title: "Trust & Authenticity",
    description:
      "Reputation scores, verified credentials, and transaction history build trust without compromising privacy.",
  },
  {
    icon: <EyeOffIcon />,
    iconBg: "var(--skyBrand-100)",
    title: "Anonymous Communication",
    description:
      "Connect with verified partners while protecting your identity until you choose to reveal it.",
  },
  {
    icon: <GridIcon />,
    iconBg: "var(--neutral-100)",
    title: "Smart Directory",
    description:
      "Designed to expand across industries — from automation to energy, manufacturing, and beyond.",
  },
];

export function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left copy */}
        <div className={styles.copy}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Built for Industrial B2B</h2>
            <p className={styles.subheading}>
              Every feature designed to solve real problems in industrial
              procurement and vendor relationships.
            </p>
          </div>
          <button className={styles.btnText}>Request a Callback</button>
        </div>

        {/* Feature grid */}
        <div className={styles.grid}>
          <div className={styles.column}>
            {features.slice(0, 2).map((f) => (
              <div key={f.title} className={styles.item}>
                <span
                  className={styles.iconWrap}
                  style={{ backgroundColor: f.iconBg }}
                >
                  {f.icon}
                </span>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                <p className={styles.itemDesc}>{f.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            {features.slice(2, 4).map((f) => (
              <div key={f.title} className={styles.item}>
                <span
                  className={styles.iconWrap}
                  style={{ backgroundColor: f.iconBg }}
                >
                  {f.icon}
                </span>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                <p className={styles.itemDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
