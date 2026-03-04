import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { SignIn } from "./pages/auth/SignIn";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { BusinessName } from "./pages/onboarding/BusinessName";
import { OnboardingStep1 } from "./pages/onboarding/OnboardingStep1";
import { Verification } from "./pages/onboarding/Verification";

// Placeholder for dashboard (until built)
function DashboardPlaceholder() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        background: "var(--slate-50)",
        fontFamily: "inherit",
      }}
    >
      <svg width="48" height="48" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="8" fill="#00A6F4" />
        <path d="M8 20V10l6-3 6 3v10l-6 3-6-3z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="2.5" fill="#fff" />
      </svg>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--neutral-800)", margin: 0 }}>
        Dashboard — Coming Soon
      </h1>
      <p style={{ fontSize: 15, color: "var(--neutral-500)", margin: 0 }}>
        The dashboard is being built. Check back soon!
      </p>
      <a
        href="/"
        style={{ color: "var(--skyBrand-500)", fontWeight: 500, textDecoration: "none", fontSize: 14 }}
      >
        ← Back to home
      </a>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<CreateAccount />} />

        {/* Onboarding */}
        <Route path="/onboarding/name" element={<BusinessName />} />
        <Route path="/onboarding/step-1" element={<OnboardingStep1 />} />
        <Route path="/onboarding/step-2" element={<Navigate to="/verify/pending" replace />} />

        {/* Verification states */}
        <Route path="/verify/pending" element={<Verification state="pending" />} />
        <Route path="/verify/success" element={<Verification state="success" />} />
        <Route path="/verify/failed" element={<Verification state="failed" />} />

        {/* Dashboard (placeholder) */}
        <Route path="/dashboard/*" element={<DashboardPlaceholder />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
