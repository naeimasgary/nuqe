import { useState, ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NuqleiLogo } from "../NuqleiLogo";

// ── Avatar image from Figma ──────────────────────────────────────────────────
const avatarSrc = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";

// ── Icons ────────────────────────────────────────────────────────────────────
function DashboardIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#00a6f4" : "currentColor"} strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function ProjectsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#00a6f4" : "currentColor"} strokeWidth="1.8">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ChatsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#00a6f4" : "currentColor"} strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function SettingsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#00a6f4" : "currentColor"} strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function HelpIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#00a6f4" : "currentColor"} strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// ── Nav items config ──────────────────────────────────────────────────────────
const NAV_MAIN = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Projects", to: "/dashboard/projects", icon: ProjectsIcon },
  { label: "Chats", to: "/dashboard/chats", icon: ChatsIcon, badge: 3 },
];
const NAV_GENERAL = [
  { label: "Settings", to: "/dashboard/settings", icon: SettingsIcon },
  { label: "Help Center", to: "/dashboard/help", icon: HelpIcon },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={[
          "fixed top-0 left-0 z-40 h-full w-58 flex flex-col bg-white border-r border-neutral-200 transition-transform duration-200",
          "lg:relative lg:translate-x-0 lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
        style={{ width: 232 }}
      >
        {/* Logo */}
        <div className="flex items-center h-20 px-4 border-b border-neutral-200 flex-shrink-0">
          <NavLink to="/">
            <NuqleiLogo size="sm" variant="default" />
          </NavLink>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto py-4 gap-6">
          {/* Main nav */}
          <div className="px-4">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider px-3 mb-2">Dashboard</p>
            <ul className="flex flex-col gap-0.5 list-none">
              {NAV_MAIN.map(({ label, to, icon: Icon, badge }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/dashboard"}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sky-brand-50 text-sky-brand-600"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon active={isActive} />
                        <span className="flex-1">{label}</span>
                        {badge && (
                          <span className="bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                            {badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* General nav */}
          <div className="px-4">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider px-3 mb-2">General</p>
            <ul className="flex flex-col gap-0.5 list-none">
              {NAV_GENERAL.map(({ label, to, icon: Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sky-brand-50 text-sky-brand-600"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon active={isActive} />
                        <span>{label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Feedback card */}
        <div className="p-4 flex-shrink-0">
          <div className="rounded-2xl bg-sky-brand-50 border border-sky-brand-100 p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-text-default">Provide your feedback</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Please let us know how we can improve.
              </p>
            </div>
            <button className="self-start px-4 py-1.5 rounded-full bg-sky-brand-500 text-white text-xs font-semibold hover:bg-sky-brand-600 transition-colors">
              Send Feedback
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

// ── Topbar ─────────────────────────────────────────────────────────────────────
function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-20 flex items-center gap-4 px-6 bg-white border-b border-neutral-200 flex-shrink-0">
      {/* Mobile menu button */}
      <button
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-sm">
        <div className="flex items-center gap-2 h-9 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-400">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Nuqlei"
            className="flex-1 bg-transparent text-sm text-text-default placeholder:text-neutral-400 outline-none"
          />
          <span className="text-xs text-neutral-300 font-mono bg-neutral-200 px-1.5 py-0.5 rounded">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* Calendar */}
        <button className="flex items-center justify-center w-9 h-9 rounded-xl text-neutral-500 hover:bg-neutral-100 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
        {/* Bell */}
        <button className="flex items-center justify-center w-9 h-9 rounded-xl text-neutral-500 hover:bg-neutral-100 transition-colors">
          <BellIcon />
        </button>
        {/* Language */}
        <button className="flex items-center gap-1 px-2 py-1 rounded-xl text-neutral-500 hover:bg-neutral-100 transition-colors">
          <GlobeIcon />
          <ChevronDownIcon />
        </button>
        {/* User */}
        <button className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-neutral-100 transition-colors">
          <img src={avatarSrc} alt="John" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-medium text-text-default hidden sm:block">John</span>
          <ChevronDownIcon />
        </button>
      </div>
    </header>
  );
}

// ── Layout ────────────────────────────────────────────────────────────────────
export interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
