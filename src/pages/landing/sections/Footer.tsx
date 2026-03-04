import styles from "./Footer.module.css";

const symbolSrc = "https://www.figma.com/api/mcp/asset/0dc926c7-b6b7-48f2-8ba3-011c2c7fcfc5";
const wordmarkDarkSrc = "https://www.figma.com/api/mcp/asset/3854b540-aeb1-4236-95d6-e38c048bac53";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={symbolSrc} alt="Nuqlei symbol" className={styles.logoSymbol} />
              <img src={wordmarkDarkSrc} alt="Nuqlei" className={styles.logoWordmark} />
            </div>
            <p className={styles.brandDesc}>
              The trusted B2B marketplace for industrial automation
              instrumentation and programming services.
            </p>
          </div>

          {/* Links */}
          <div className={styles.linkCols}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Platform</h4>
              <nav className={styles.colLinks}>
                <a href="#">Directory</a>
                <a href="#">Get started</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Resources</h4>
              <nav className={styles.colLinks}>
                <a href="#">News room</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms of service</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            <img src={symbolSrc} alt="Nuqlei" className={styles.symbolSmall} />
            <span className={styles.copyright}>All rights reserved. Nuqlei 2026.</span>
          </div>
          <p className={styles.producer}>
            Produced by <span>CTH Controls</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
