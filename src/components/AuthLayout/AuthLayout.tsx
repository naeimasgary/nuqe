import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const nuqleiLogoSvg = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="#00A6F4" />
    <path d="M8 20V10l6-3 6 3v10l-6 3-6-3z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2.5" fill="#fff" />
  </svg>
);

interface AuthLayoutProps {
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
}

export function AuthLayout({ children, eyebrow, title, description }: AuthLayoutProps) {
  return (
    <div className={styles.page}>
      {/* Left hero panel */}
      <aside className={styles.hero}>
        <Link to="/" className={styles.heroLogo}>
          {nuqleiLogoSvg}
          <span className={styles.heroLogoText}>Nuqlei</span>
        </Link>

        <div className={styles.heroContent}>
          {eyebrow && <p className={styles.heroEyebrow}>{eyebrow}</p>}
          {title && <h1 className={styles.heroTitle}>{title}</h1>}
          {description && <p className={styles.heroDescription}>{description}</p>}
        </div>

        <div className={styles.heroBadges}>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className={styles.heroBadgeText}>Vetted & Verified</div>
              <div className={styles.heroBadgeSubtext}>All buyers are admin-approved</div>
            </div>
          </div>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <div className={styles.heroBadgeText}>Anonymous by Default</div>
              <div className={styles.heroBadgeSubtext}>Your identity stays private</div>
            </div>
          </div>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <div className={styles.heroBadgeText}>Industrial B2B Focus</div>
              <div className={styles.heroBadgeSubtext}>Instrumentation & automation</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right form panel */}
      <main className={styles.form}>
        <div className={styles.formCard}>{children}</div>
      </main>
    </div>
  );
}
