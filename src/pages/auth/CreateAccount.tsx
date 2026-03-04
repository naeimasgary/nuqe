import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Button } from "../../components/Button";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

const ROLES = [
  { value: "buyer", label: "Buyer" },
  { value: "seller", label: "Seller" },
  { value: "both", label: "Both Buyer & Seller" },
];

export function CreateAccount() {
  const navigate = useNavigate();
  const [isBuyer, setIsBuyer] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!isBuyer && !isSeller) { setError("Please select at least one role."); return; }
    if (!email.trim()) { setError("Please enter your email address."); return; }
    if (!role) { setError("Please select your role."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/onboarding/name");
    }, 1000);
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left: dark hero */}
      <div className="hidden lg:flex relative flex-col w-[52%] min-h-screen overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />

        <div className="relative z-10 flex flex-col h-full p-12">
          <Link to="/" className="inline-block">
            <NuqleiLogo size="md" variant="white" />
          </Link>

          <div className="flex flex-col gap-6 mt-auto mb-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-5xl font-bold leading-tight">
                Apply to start<br />
                creating Projects for<br />
                sourcing or selling
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-sm">
                Buyer accounts require approval. You'll typically receive an email within 24–48 hrs once your application is reviewed.
              </p>
            </div>
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold border-b border-white/50 hover:border-white pb-0.5 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex flex-1 items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 flex flex-col gap-6">
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          <div className="flex flex-col gap-1">
            <h2 className="text-text-default text-2xl font-bold">Join</h2>
            <p className="text-text-secondary text-sm">The Nuqlei Network</p>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2 text-sm font-medium text-text-default cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isBuyer}
                onChange={(e) => setIsBuyer(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 accent-sky-brand-500"
              />
              I am a Buyer
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-text-default cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isSeller}
                onChange={(e) => setIsSeller(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 accent-sky-brand-500"
              />
              I am a Seller
            </label>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

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

            {/* Role dropdown */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="role-select" className="text-sm font-medium text-text-default">
                Your Role
              </label>
              <div className="relative">
                <select
                  id="role-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 rounded-full border border-outline-default bg-white text-text-default text-sm appearance-none outline-none focus:border-outline-focused focus:shadow-focus-primary transition-all"
                >
                  <option value="" disabled>Select your role</option>
                  {ROLES.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? "Applying…" : "Apply"}
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-sm">
                <span className="text-text-secondary">Already have an account?</span>
                <Link to="/sign-in" className="text-sky-brand-600 font-semibold hover:text-sky-brand-800 transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
