import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { InputField } from "../../components/InputField";
import styles from "./SignIn.module.css";

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
    // Placeholder: simulate auth — replace with real API call
    setTimeout(() => {
      setLoading(false);
      // For now, any login goes to dashboard placeholder
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title={<>Sign in to <span>Nuqlei</span></>}
      description="The vetted B2B marketplace for industrial automation instrumentation and programming services."
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Sign in to your account</h2>
        <p className={styles.subtitle}>Don't have an account?{" "}
          <Link to="/register" className={styles.link}>Create one for free</Link>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {error && <div className={styles.errorBanner}>{error}</div>}

        <InputField
          label="Email address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <div>
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <div className={styles.forgotRow}>
            <Link to="/forgot-password" className={styles.forgotLink}>
              Forgot password?
            </Link>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className={styles.footer} style={{ marginTop: 24 }}>
        By signing in, you agree to our{" "}
        <Link to="/terms" className={styles.link}>Terms</Link> and{" "}
        <Link to="/privacy" className={styles.link}>Privacy Policy</Link>.
      </p>
    </AuthLayout>
  );
}
