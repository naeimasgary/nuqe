import styles from "./Navbar.module.css";

const symbolSrc = "https://www.figma.com/api/mcp/asset/0dc926c7-b6b7-48f2-8ba3-011c2c7fcfc5";
const wordmarkSrc = "https://www.figma.com/api/mcp/asset/dbd799f9-298d-4daa-b37b-7030ae1e0d27";

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={symbolSrc} alt="Nuqlei symbol" className={styles.logoSymbol} />
          <img src={wordmarkSrc} alt="Nuqlei" className={styles.logoWordmark} />
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <button className={styles.navItem}>About Nuqlei</button>
          <button className={styles.navItem}>Features</button>
          <button className={styles.navItem}>
            Solutions
            <span className={styles.badge}>New</span>
          </button>
          <button className={styles.navItem}>
            Team
            <ChevronDownIcon />
          </button>
          <button className={styles.navItem}>
            Reviews
            <ChevronDownIcon />
          </button>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>Create Project</button>
          <button className={styles.btnOutline}>Sign in</button>
        </div>
      </div>
    </nav>
  );
}
