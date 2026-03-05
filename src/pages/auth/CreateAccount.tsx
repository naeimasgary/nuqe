import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Button } from "../../components/Button";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

export function CreateAccount() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Pre-select Buyer when coming from the "Create Project" CTA
  const [role, setRole] = useState<"buyer" | "seller">(
    searchParams.get("from") === "create-project" ? "buyer" : "buyer"
  );
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Always default to buyer (landing page is buyer-focused)
  useEffect(() => {
    setRole("buyer");
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    // Open the registration confirmation email in a new tab
    window.open("/email/registration-confirmation", "_blank");

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
            <h1 className="text-white text-4xl font-bold leading-tight">
              Apply to start<br />
              creating Projects for<br />
              sourcing or selling
            </h1>
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

      {/* ── Right: form panel ─────────────────────────────────────────────── */}
      <div className="flex flex-1 items-center justify-center p-6 bg-white lg:bg-slate-50">
        <div className="w-full max-w-[400px] flex flex-col gap-6">
          {/* Logo symbol */}
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          {/* Heading */}
          <div className="flex flex-col gap-0.5">
            <h2 className="text-text-default text-2xl font-bold">Join</h2>
            <p className="text-text-secondary text-sm">The Nuqlei Network</p>
          </div>

          {/* Role radio buttons */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={role === "buyer"}
                onChange={() => setRole("buyer")}
                className="w-4 h-4 accent-sky-brand-500"
              />
              <span className="text-sm font-medium text-text-default">I am a Buyer</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="role"
                value="seller"
                checked={role === "seller"}
                onChange={() => setRole("seller")}
                className="w-4 h-4 accent-sky-brand-500"
              />
              <span className="text-sm font-medium text-text-default">I am a Seller</span>
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

            {/* Buyer Vetting Required info box */}
            {role === "buyer" && (
              <div className="flex gap-3 px-4 py-3.5 rounded-xl border border-sky-brand-200 bg-sky-brand-50">
                <svg
                  className="flex-shrink-0 mt-0.5 text-sky-brand-500"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-text-default">Buyer Vetting Required</p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Buyer accounts require admin approval. You'll receive an email once your application is reviewed.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 mt-1">
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? "Applying…" : "Apply"}
              </Button>

              <p className="text-center text-sm text-text-secondary">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-sky-brand-600 font-semibold hover:text-sky-brand-800 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
