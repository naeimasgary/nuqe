import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { InputField } from "../../components/InputField";
import styles from "./CreateAccount.module.css";

type Role = "buyer" | "seller";

const ROLES: { id: Role; label: string; desc: string; icon: JSX.Element }[] = [
  {
    id: "buyer",
    label: "Buyer",
    desc: "Source vendors & manage projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "seller",
    label: "Seller",
    desc: "List services & receive quote requests",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

function getPasswordStrength(pw: string): { level: number; label: string } {
  if (pw.length === 0) return { level: 0, label: "" };
  if (pw.length < 6) return { level: 1, label: "weak" };
  if (pw.length < 10 || !/[^a-zA-Z0-9]/.test(pw)) return { level: 2, label: "medium" };
  return { level: 3, label: "strong" };
}

export function CreateAccount() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("buyer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const strength = getPasswordStrength(password);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) { setError("Please enter your full name."); return; }
    if (!email.trim()) { setError("Please enter your email address."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/onboarding/name");
    }, 1000);
  }

  const heroTitle = role === "buyer"
    ? <><span>Apply</span> to start creating Projects</>
    : <>List your services and <span>grow</span> your business</>;

  const heroDesc = role === "buyer"
    ? "Nuqlei is a vetted B2B marketplace. Buyers require admin approval before the platform is fully unlocked."
    : "Connect with verified industrial buyers sourcing instrumentation and automation services.";

  return (
    <AuthLayout eyebrow={`Joining as a ${role}`} title={heroTitle} description={heroDesc}>
      <div className={styles.header}>
        <h2 className={styles.title}>Create your account</h2>
        <p className={styles.subtitle}>
          Already have an account?{" "}
          <Link to="/sign-in" className={styles.link}>Sign in</Link>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {error && <div className={styles.errorBanner}>{error}</div>}

        {/* Role selector */}
        <div>
          <div className={styles.roleGrid}>
            {ROLES.map((r) => (
              <label
                key={r.id}
                className={[styles.roleCard, role === r.id ? styles.selected : ""].join(" ")}
              >
                <input
                  type="radio"
                  name="role"
                  value={r.id}
                  checked={role === r.id}
                  onChange={() => setRole(r.id)}
                />
                <div className={styles.roleCardIcon}>{r.icon}</div>
                <div className={styles.roleCardLabel}>{r.label}</div>
                <div className={styles.roleCardDesc}>{r.desc}</div>
                <div className={styles.roleCheck}>
                  {role === r.id && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        <InputField
          label="Full name"
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />

        <InputField
          label="Work email"
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
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          {password.length > 0 && (
            <div className={styles.passwordStrength}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={[
                    styles.strengthBar,
                    i <= strength.level ? styles.active : "",
                    i <= strength.level ? styles[strength.label as keyof typeof styles] || "" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              ))}
            </div>
          )}
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </button>

        <p className={styles.terms}>
          By creating an account, you agree to our{" "}
          <Link to="/terms" className={styles.link}>Terms of Service</Link> and{" "}
          <Link to="/privacy" className={styles.link}>Privacy Policy</Link>.
        </p>
      </form>
    </AuthLayout>
  );
}
