import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/landing/LandingPage";
import { SignIn } from "./pages/auth/SignIn";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { SetPassword } from "./pages/auth/SetPassword";
import { VerificationPending } from "./pages/auth/VerificationPending";
import { WelcomeScreen } from "./pages/onboarding/WelcomeScreen";
import { WaitingScreen } from "./pages/onboarding/WaitingScreen";
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { ProjectsPage } from "./pages/dashboard/ProjectsPage";
import { SearchSellersPage } from "./pages/dashboard/SearchSellersPage";
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
        <Route path="/register/set-password" element={<SetPassword />} />
        <Route path="/register/verification" element={<VerificationPending />} />

        {/* Onboarding */}
        <Route path="/onboarding/welcome" element={<WelcomeScreen />} />
        <Route path="/onboarding/loading" element={<WaitingScreen />} />

        {/* Legacy redirects — keep old URLs working */}
        <Route path="/onboarding/name" element={<Navigate to="/onboarding/welcome" replace />} />
        <Route path="/onboarding/step-1" element={<Navigate to="/onboarding/welcome" replace />} />
        <Route path="/verify/pending" element={<Navigate to="/register/verification" replace />} />
        <Route path="/verify/success" element={<Navigate to="/dashboard" replace />} />
        <Route path="/verify/failed" element={<Navigate to="/register" replace />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/projects" element={<ProjectsPage />} />
        <Route path="/dashboard/projects/sellers" element={<SearchSellersPage />} />
        <Route path="/dashboard/chats" element={<ChatsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/help" element={<HelpPage />} />

        {/* Remove quotes standalone page — redirect to dashboard */}
        <Route path="/dashboard/quotes" element={<Navigate to="/dashboard" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
