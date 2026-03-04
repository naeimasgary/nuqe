import { useState } from "react";
import { NuqleiLogo } from "../NuqleiLogo";

export interface NavItem {
  label: string;
  href?: string;
  badge?: string;
  hasDropdown?: boolean;
}

export interface SiteHeaderProps {
  navItems?: NavItem[];
  primaryCtaLabel?: string;
  onPrimaryCtaClick?: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCtaClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "About Nuqlei" },
  { label: "Features" },
  { label: "Solutions", badge: "New" },
  { label: "Team", hasDropdown: true },
  { label: "Reviews", hasDropdown: true },
];

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader({
  navItems = DEFAULT_NAV_ITEMS,
  primaryCtaLabel = "Create Project",
  onPrimaryCtaClick,
  secondaryCtaLabel = "Sign in",
  onSecondaryCtaClick,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Navbar */}
      <nav
        className="w-full bg-white border-b border-neutral-200 px-6"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex-shrink-0" aria-label="Nuqlei home">
            <NuqleiLogo size="sm" variant="default" />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none flex-1" role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => item.href && (window.location.href = item.href)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-sky-brand-100 text-sky-brand-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
                      {item.badge}
                    </span>
                  )}
                  {item.hasDropdown && <ChevronDownIcon />}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-brand-500 text-white text-sm font-semibold shadow-xs hover:bg-sky-brand-600 active:bg-sky-brand-800 transition-colors"
              onClick={onPrimaryCtaClick}
            >
              {primaryCtaLabel}
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-300 bg-white text-neutral-800 text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              onClick={onSecondaryCtaClick}
            >
              {secondaryCtaLabel}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl flex flex-col md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
              <a href="/" aria-label="Nuqlei home">
                <NuqleiLogo size="sm" variant="default" />
              </a>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <ul className="flex flex-col p-3 gap-0.5 flex-1 list-none overflow-y-auto" role="list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      if (item.href) window.location.href = item.href;
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="bg-sky-brand-100 text-sky-brand-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.hasDropdown && <ChevronDownIcon />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-4 border-t border-neutral-200 flex flex-col gap-2">
              <button
                className="w-full py-2.5 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors"
                onClick={() => { setMobileOpen(false); onPrimaryCtaClick?.(); }}
              >
                {primaryCtaLabel}
              </button>
              <button
                className="w-full py-2.5 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-50 transition-colors"
                onClick={() => { setMobileOpen(false); onSecondaryCtaClick?.(); }}
              >
                {secondaryCtaLabel}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
