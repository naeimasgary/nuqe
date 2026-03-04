import { useState } from "react";
import styles from "./SiteHeader.module.css";

// ── Asset URLs (from Figma) ───────────────────────────────────────────────
const LOGO_SYMBOL = "https://www.figma.com/api/mcp/asset/9c3cc6cc-c0b2-47d1-99f4-6ecd25dd663a";
const LOGO_WORDMARK = "https://www.figma.com/api/mcp/asset/aed989f8-d820-491d-9705-65d98e39aadd";

// ── Types ─────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href?: string;
  badge?: string;
  hasDropdown?: boolean;
}

export interface SiteHeaderProps {
  /** Show or hide the top announcement banner */
  showBanner?: boolean;
  /** Badge label inside the banner */
  bannerBadge?: string;
  /** Announcement message in the banner */
  bannerMessage?: string;
  /** Navigation items */
  navItems?: NavItem[];
  /** Primary CTA button label */
  primaryCtaLabel?: string;
  /** Called when the primary CTA is clicked */
  onPrimaryCtaClick?: () => void;
  /** Secondary CTA button label */
  secondaryCtaLabel?: string;
  /** Called when the secondary CTA is clicked */
  onSecondaryCtaClick?: () => void;
}

// ── Default nav items matching the Figma design ───────────────────────────
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "About Nuqlei" },
  { label: "Features" },
  { label: "Solutions", badge: "New" },
  { label: "Team", hasDropdown: true },
  { label: "Reviews", hasDropdown: true },
];

// ── Icons ─────────────────────────────────────────────────────────────────
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

// ── Component ─────────────────────────────────────────────────────────────
export function SiteHeader({
  showBanner = true,
  bannerBadge = "New",
  bannerMessage = "Frontend Pages Added",
  navItems = DEFAULT_NAV_ITEMS,
  primaryCtaLabel = "Create Project",
  onPrimaryCtaClick,
  secondaryCtaLabel = "Sign in",
  onSecondaryCtaClick,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* ── Announcement Banner (desktop) ── */}
      {showBanner && (
        <div className={styles.banner} role="banner">
          <div className={styles.bannerInner}>
            <span className={styles.bannerBadge}>{bannerBadge}</span>
            <span className={styles.bannerMessage}>{bannerMessage}</span>
          </div>
        </div>
      )}

      {/* ── Announcement Banner (mobile — inline, no overflow) ── */}
      {showBanner && (
        <div className={`${styles.mobileBanner} ${styles.visible}`} role="banner">
          <span className={styles.bannerBadge}>{bannerBadge}</span>
          <span className={styles.bannerMessage}>{bannerMessage}</span>
        </div>
      )}

      {/* ── Navbar ── */}
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.navInner}>

          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Nuqlei home">
            <img src={LOGO_SYMBOL} alt="" className={styles.logoSymbol} />
            <img src={LOGO_WORDMARK} alt="Nuqlei" className={styles.logoWordmark} />
          </a>

          {/* Desktop nav links */}
          <ul className={styles.navLinks} role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={styles.navItem}
                  onClick={() => item.href && (window.location.href = item.href)}
                >
                  {item.label}
                  {item.badge && (
                    <span className={styles.navItemBadge}>{item.badge}</span>
                  )}
                  {item.hasDropdown && (
                    <span className={styles.chevron}>
                      <ChevronDownIcon />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop action buttons */}
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={onPrimaryCtaClick}>
              {primaryCtaLabel}
            </button>
            <button className={styles.btnOutline} onClick={onSecondaryCtaClick}>
              {secondaryCtaLabel}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.mobileMenu}${mobileOpen ? ` ${styles.open}` : ""}`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Overlay */}
        <div
          className={styles.mobileOverlay}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileMenuHeader}>
            <a href="/" className={styles.logo} aria-label="Nuqlei home">
              <img src={LOGO_SYMBOL} alt="" className={styles.logoSymbol} />
              <img src={LOGO_WORDMARK} alt="Nuqlei" className={styles.logoWordmark} />
            </a>
            <button
              className={styles.mobileCloseButton}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className={styles.mobileNavLinks} role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={styles.mobileNavItem}
                  onClick={() => {
                    setMobileOpen(false);
                    if (item.href) window.location.href = item.href;
                  }}
                >
                  <span className={styles.mobileNavItemLeft}>
                    {item.label}
                    {item.badge && (
                      <span className={styles.navItemBadge}>{item.badge}</span>
                    )}
                  </span>
                  {item.hasDropdown && (
                    <span className={styles.chevron}>
                      <ChevronDownIcon />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <button
              className={styles.mobileBtnPrimary}
              onClick={() => {
                setMobileOpen(false);
                onPrimaryCtaClick?.();
              }}
            >
              {primaryCtaLabel}
            </button>
            <button
              className={styles.mobileBtnOutline}
              onClick={() => {
                setMobileOpen(false);
                onSecondaryCtaClick?.();
              }}
            >
              {secondaryCtaLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
