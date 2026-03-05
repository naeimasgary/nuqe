import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Button } from "../../components/Button";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00CEB6" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" fill="#00CEB6" stroke="none" opacity="0.15" />
      <polyline points="20 6 9 17 4 12" stroke="#00CEB6" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6692" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" fill="#FF6692" stroke="none" opacity="0.15" />
      <line x1="15" y1="9" x2="9" y2="15" stroke="#FF6692" />
      <line x1="9" y1="9" x2="15" y2="15" stroke="#FF6692" />
    </svg>
  );
}

export function SetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordsMatch = password.length > 0 && confirm.length > 0 && password === confirm;
  const passwordsMismatch = confirm.length > 0 && password !== confirm;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || !confirm) return;
    if (password !== confirm) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/register/verification");
    }, 800);
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* ── Left: dark hero ─────────────────────────────────────────────── */}
      <div className="hidden lg:flex relative flex-col w-[55%] min-h-screen overflow-hidden bg-[#0f1b2d]">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col h-full px-16 py-12">
          <Link to="/">
            <NuqleiLogo size="md" variant="white" />
          </Link>
          <div className="flex flex-col gap-5 mt-auto mb-16 max-w-md">
            <h1 className="text-white text-4xl font-bold leading-tight">Tell us about your project</h1>
            <p className="text-white/60 text-[15px] leading-relaxed">
              Buyer accounts require approval. You'll typically receive an email within 24-48hrs once your application is reviewed.
            </p>
            <Link
              to="/"
              className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: form card ─────────────────────────────────────────────── */}
      <div className="flex flex-1 items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 flex flex-col gap-6">
          <h2 className="text-text-default text-3xl font-bold">Set your password</h2>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-11 pl-4 pr-11 rounded-full border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Retype Password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-default">Retype Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••••••••••••"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="w-full h-11 pl-4 pr-11 rounded-full border border-outline-default bg-white text-text-default text-sm placeholder:text-neutral-400 outline-none focus:border-outline-focused transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Password validation indicators */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className={`text-sm ${passwordsMatch ? "text-teal-600" : "text-neutral-400"}`}>
                  Passwords matching
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <span className={`text-sm ${passwordsMismatch ? "text-rose-500" : "text-neutral-400"}`}>
                  Passwords must match
                </span>
              </div>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={loading || !password || !confirm || password !== confirm}
            >
              {loading ? "Creating…" : "Create Password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
