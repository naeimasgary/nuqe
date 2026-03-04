import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { SignIn } from "./pages/auth/SignIn";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { BusinessName } from "./pages/onboarding/BusinessName";
import { OnboardingStep1 } from "./pages/onboarding/OnboardingStep1";
import { Verification } from "./pages/onboarding/Verification";
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { QuotesPage } from "./pages/dashboard/QuotesPage";
import { ProjectsPage } from "./pages/dashboard/ProjectsPage";
import { ChatsPage } from "./pages/dashboard/ChatsPage";
import { SettingsPage, HelpPage } from "./pages/dashboard/PlaceholderPage";

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

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/quotes" element={<QuotesPage />} />
        <Route path="/dashboard/projects" element={<ProjectsPage />} />
        <Route path="/dashboard/chats" element={<ChatsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/help" element={<HelpPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
