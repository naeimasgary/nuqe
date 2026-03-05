import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { NuqleiLogo } from "../../components/NuqleiLogo";
import { Button } from "../../components/Button";

// Neon hero background — dark with blue/purple light rings
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
            <h1 className="text-white text-4xl font-bold leading-tight">Start selling</h1>
            <p className="text-white/60 text-[15px] leading-relaxed">
              Buyer accounts require approval. You'll typically receive an email within 24-48hrs once your application is reviewed.
            </p>
            <Link
              to="/register"
              className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: form card ─────────────────────────────────────────────── */}
      <div className="flex flex-1 items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 flex flex-col gap-6">
          {/* Logo symbol */}
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          {/* Heading */}
          <div className="flex flex-col gap-0.5">
            <p className="text-text-secondary text-sm">Welcome</p>
            <h2 className="text-text-default text-2xl font-bold">Sign in</h2>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
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

            <InputField
              label="Password"
              type="password"
              placeholder="••••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>

          <p className="text-center text-sm text-text-secondary">
            Dont have an account?{" "}
            <Link
              to="/register"
              className="text-sky-brand-600 font-semibold hover:text-sky-brand-800 transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
