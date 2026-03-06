import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Button } from "../../components/Button";
import { Illustration } from "../../components/Illustration";

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00CEB6" opacity="0.15" />
      <polyline points="20 6 9 17 4 12" stroke="#00CEB6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6692" opacity="0.15" />
      <line x1="15" y1="9" x2="9" y2="15" stroke="#FF6692" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9" y1="9" x2="15" y2="15" stroke="#FF6692" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SellerSetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading]     = useState(false);

  const passwordsMatch = password.length > 0 && confirm.length > 0 && password === confirm;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || !confirm || password !== confirm) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Seller goes directly to dashboard after setting password
      navigate("/dashboard/seller");
    }, 800);
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* ── Left: dark hero ─────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col w-[55%] min-h-screen overflow-hidden bg-[#0f1b2d]">
        <div className="flex flex-col h-full px-16 py-12">
          <Link to="/">
            <NuqleiLogo size="md" variant="white" />
          </Link>
          <div className="flex flex-1 items-center justify-center py-10">
            <Illustration variant="4" alt="" className="w-full max-w-[400px] opacity-90" />
          </div>
          <div className="flex flex-col gap-5 mb-8 max-w-md">
            <h1 className="text-white text-4xl font-bold leading-tight">
              Welcome, please set up your password to view the project.
            </h1>
            <p className="text-white/60 text-[15px] leading-relaxed">
              You're almost there — set your password to get started as a seller on Nuqlei.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right: form card ─────────────────────────────────────────────── */}
      <div className="flex flex-1 items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 flex flex-col gap-6">
          <h2 className="text-text-default text-3xl font-bold">Set your password</h2>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {/* Password */}
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
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showPass ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Retype Password */}
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
                  onClick={() => setShowConfirm(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Match indicators */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className={`text-sm ${passwordsMatch ? "text-teal-600" : "text-neutral-300"}`}>Passwords matching</span>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <span className={`text-sm ${confirm.length > 0 && !passwordsMatch ? "text-rose-500" : "text-neutral-300"}`}>Passwords must match</span>
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
