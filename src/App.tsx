import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public
import { LandingPage } from "./pages/landing/LandingPage";

// Auth
import { SignIn } from "./pages/auth/SignIn";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { SetPassword } from "./pages/auth/SetPassword";
import { VerificationPending } from "./pages/auth/VerificationPending";

// Email mockups (open in new tab)
import { RegistrationConfirmationEmail } from "./pages/email/RegistrationConfirmationEmail";
import { AccountVerifiedEmail } from "./pages/email/AccountVerifiedEmail";

// Onboarding — 3-step walkthrough
import { WalkthroughStep1 } from "./pages/onboarding/WalkthroughStep1";
import { WalkthroughStep2 } from "./pages/onboarding/WalkthroughStep2";
import { WalkthroughStep3 } from "./pages/onboarding/WalkthroughStep3";
import { WaitingScreen } from "./pages/onboarding/WaitingScreen";

// Dashboard
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { ProjectsPage } from "./pages/dashboard/ProjectsPage";
import { SearchSellersPage } from "./pages/dashboard/SearchSellersPage";
import { ChatsPage } from "./pages/dashboard/ChatsPage";
import { SettingsPage, HelpPage } from "./pages/dashboard/PlaceholderPage";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* ── Public ─────────────────────────────────────────────────────── */}
        <Route path="/" element={<LandingPage />} />

        {/* ── Auth ───────────────────────────────────────────────────────── */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/register/set-password" element={<SetPassword />} />
        <Route path="/register/verification" element={<VerificationPending />} />

        {/* ── Email mockups (designed to open in a new browser tab) ───────── */}
        <Route path="/email/registration-confirmation" element={<RegistrationConfirmationEmail />} />
        <Route path="/email/account-verified" element={<AccountVerifiedEmail />} />

        {/* ── Onboarding walkthrough ─────────────────────────────────────── */}
        <Route path="/onboarding/step/1" element={<WalkthroughStep1 />} />
        <Route path="/onboarding/step/2" element={<WalkthroughStep2 />} />
        <Route path="/onboarding/step/3" element={<WalkthroughStep3 />} />
        <Route path="/onboarding/loading" element={<WaitingScreen />} />

        {/* ── Legacy redirects (keep old URLs alive) ─────────────────────── */}
        <Route path="/onboarding/welcome"  element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/onboarding/name"     element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/onboarding/step-1"   element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/verify/pending"      element={<Navigate to="/register/verification" replace />} />
        <Route path="/verify/success"      element={<Navigate to="/dashboard" replace />} />
        <Route path="/verify/failed"       element={<Navigate to="/register" replace />} />

        {/* ── Dashboard ──────────────────────────────────────────────────── */}
        <Route path="/dashboard"                  element={<DashboardHome />} />
        <Route path="/dashboard/projects"         element={<ProjectsPage />} />
        <Route path="/dashboard/projects/sellers" element={<SearchSellersPage />} />
        <Route path="/dashboard/chats"            element={<ChatsPage />} />
        <Route path="/dashboard/settings"         element={<SettingsPage />} />
        <Route path="/dashboard/help"             element={<HelpPage />} />

        {/* Remove quotes page — redirect to dashboard */}
        <Route path="/dashboard/quotes" element={<Navigate to="/dashboard" replace />} />

        {/* ── Fallback ───────────────────────────────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
