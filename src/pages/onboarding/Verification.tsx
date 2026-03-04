import { Link } from "react-router-dom";
import styles from "./Verification.module.css";

type VerificationState = "pending" | "success" | "failed";

interface VerificationProps {
  state: VerificationState;
}

const nuqleiLogoSvg = (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="#00A6F4" />
    <path d="M8 20V10l6-3 6 3v10l-6 3-6-3z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2.5" fill="#fff" />
  </svg>
);

const CONTENT = {
  pending: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFB900" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Thank you for applying!",
    message:
      "We're reviewing your credentials and business information. This typically takes 12–24 hours.",
    detail: "You'll receive an email at your registered address once approved.",
    cta: { label: "Back to sign in", to: "/sign-in" },
    secondary: { label: "Questions? Contact us", to: "/contact" },
  },
  success: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00CEB6" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "You are already Verified ✓",
    message:
      "Your account has been verified and you now have full access to the Nuqlei platform.",
    detail: null,
    cta: { label: "Go to Dashboard", to: "/dashboard" },
    secondary: null,
  },
  failed: {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6692" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "We could not verify your account",
    message:
      "Sorry, we were unable to verify your business credentials at this time.",
    detail: "This may be due to incomplete or unverifiable business information.",
    cta: { label: "Contact support", to: "/contact" },
    secondary: { label: "Try again with different info", to: "/register" },
  },
};

export function Verification({ state }: VerificationProps) {
  const content = CONTENT[state];

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.logo}>
        {nuqleiLogoSvg}
        <span className={styles.logoText}>Nuqlei</span>
      </Link>

      <div className={styles.card}>
        <div className={[styles.iconWrap, styles[state]].join(" ")}>
          {content.icon}
        </div>

        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.message}>{content.message}</p>

        {content.detail && (
          <p className={styles.detail}>{content.detail}</p>
        )}

        <Link to={content.cta.to} className={styles.primaryBtn}>
          {content.cta.label}
        </Link>

        {content.secondary && (
          <Link to={content.secondary.to} className={styles.secondaryLink}>
            {content.secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
