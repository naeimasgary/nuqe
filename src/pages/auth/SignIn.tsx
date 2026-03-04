import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import styles from "./SignIn.module.css";

// Figma asset URLs (valid for 7 days — replace if expired)
const LOGO_SYMBOL = "https://www.figma.com/api/mcp/asset/b43e90a5-c72e-4d82-bda3-19c551acf72e";
const LOGO_WORDMARK = "https://www.figma.com/api/mcp/asset/8607bbe3-698d-485b-847d-d44b5732864a";
const LOGO_SYMBOL_SM = "https://www.figma.com/api/mcp/asset/85f91e71-dd9e-4d14-854d-400638589d17";
const HERO_BG = "https://www.figma.com/api/mcp/asset/eacc74ef-4c2b-4fdf-a217-25439911f5ad";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <div className={styles.page}>
      {/* ── Left: dark hero ── */}
      <div className={styles.hero}>
        <img src={HERO_BG} alt="" className={styles.heroBg} aria-hidden="true" />

        <div className={styles.heroContent}>
          {/* Logo */}
          <Link to="/" className={styles.heroLogo}>
            <img src={LOGO_SYMBOL} alt="" className={styles.heroLogoSymbol} />
            <img src={LOGO_WORDMARK} alt="Nuqlei" className={styles.heroLogoWordmark} />
          </Link>

          {/* Copy + CTA */}
          <div className={styles.heroCopy}>
            <div className={styles.heroTextBlock}>
              <h1 className={styles.heroTitle}>Start selling</h1>
              <p className={styles.heroSubtitle}>
                Buyer accounts require approval. You'll typically receive an email within 24–48 hrs once your application is reviewed.
              </p>
            </div>
            <div>
              <Link to="/register" className={styles.heroCta}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: white floating card ── */}
      <div className={styles.formSide}>
        <div className={styles.card}>
          {/* Small logo mark inside card */}
          <img src={LOGO_SYMBOL_SM} alt="Nuqlei" className={styles.cardLogo} />

          {/* Title */}
          <div className={styles.titleBlock}>
            <p className={styles.welcomeLabel}>Welcome</p>
            <h2 className={styles.pageTitle}>Sign in</h2>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {error && <div className={styles.errorBanner}>{error}</div>}

            <div className={styles.fieldGroup}>
              <InputField
                label="Email"
                type="email"
                placeholder="joe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                helperText="Please use a company email. No @gmail.com"
              />
            </div>

            <div className={styles.fieldGroup}>
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          {/* Footer link */}
          <div className={styles.footerRow}>
            <span className={styles.footerText}>Dont have an account?</span>
            <Link to="/register" className={styles.footerLink}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
