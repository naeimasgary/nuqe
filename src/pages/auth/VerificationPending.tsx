import { Link } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

const HERO_BG = "https://www.figma.com/api/mcp/asset/541f8515-702d-4085-b807-e8eee9261fe2";

export function VerificationPending() {
  function simulateVerification() {
    // Open the "Account Verified" email in a new tab
    window.open("/email/account-verified", "_blank");
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
              Apply to start<br />sourcing or selling
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

      {/* ── Right: confirmation panel ────────────────────────────────────── */}
      <div className="flex flex-1 items-start justify-center p-8 pt-16 bg-white lg:bg-slate-50">
        <div className="w-full max-w-[400px] flex flex-col gap-6">
          {/* Logo symbol */}
          <NuqleiLogo size="xs" variant="default" symbolOnly />

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-text-default text-2xl font-bold">Thank you for applying</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              You have successfully applied to the Nuqlei network.
            </p>
          </div>

          {/* Body message */}
          <p className="text-text-default text-base font-semibold leading-relaxed">
            Please be patient as we process your account, you can start creating projects and selling immediately after your account is verified.
          </p>

          {/* Wait notice */}
          <p className="text-text-secondary text-sm">
            Verification might take 12 to 24 hours.
          </p>

          {/* Divider */}
          <div className="h-px bg-neutral-100" />

          {/* Mockup demo helper — simulate the 24hr wait */}
          <div className="flex flex-col gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-2">
              <svg className="flex-shrink-0 mt-0.5 text-amber-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-amber-800">Mockup Demo</p>
                <p className="text-xs text-amber-700 leading-relaxed mt-0.5">
                  In real life, you'd wait 18–24 hours for admin approval. Click below to simulate receiving the verification email.
                </p>
              </div>
            </div>
            <button
              onClick={simulateVerification}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Simulate: Receive Verification Email
            </button>
          </div>

          {/* Back to sign in */}
          <Link
            to="/sign-in"
            className="self-start text-sm text-sky-brand-600 font-semibold hover:text-sky-brand-800 transition-colors"
          >
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
