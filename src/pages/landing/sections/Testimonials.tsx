import styles from "./Testimonials.module.css";

const avatarJenny = "https://www.figma.com/api/mcp/asset/5646908c-494b-4e5e-99ae-31934850e51e";
const quoteIcon = "https://www.figma.com/api/mcp/asset/7add89b9-8d47-4b85-a56c-8cb3a9ea5e08";
const arrowLeft = "https://www.figma.com/api/mcp/asset/babc53d2-5832-4c22-9354-73ddfc3faa46";
const arrowRight = "https://www.figma.com/api/mcp/asset/46288e83-5718-4e80-912e-e21f0a7a5629";

// Company logo assets
const logoIntel = "https://www.figma.com/api/mcp/asset/937514c4-5bb0-44ae-878e-5d8570f75107";
const logoOracle = "https://www.figma.com/api/mcp/asset/cc16b87b-e05f-4c57-a1fa-943def3dd08d";
const logoDell = "https://www.figma.com/api/mcp/asset/366a5931-e663-4a8f-b568-752d86989730";
const logoSamsung = "https://www.figma.com/api/mcp/asset/a877ffe4-5f45-41c8-bdcc-403cda37133b";
const logoInfosys = "https://www.figma.com/api/mcp/asset/5ae8201a-c52c-4f71-83f9-1c78312e5244";
const logoCapgemini = "https://www.figma.com/api/mcp/asset/a30c36e3-d726-403d-9a06-ad5057a47840";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Testimonial header */}
        <div className={styles.testimonialRow}>
          {/* Left: heading + nav */}
          <div className={styles.leftCol}>
            <div className={styles.textBlock}>
              <h2 className={styles.heading}>What our users think.</h2>
              <p className={styles.subheading}>
                Pellentesque varius semper odio non pretium.
              </p>
            </div>
            <div className={styles.nav}>
              <button className={styles.navBtn} aria-label="Previous">
                <img src={arrowLeft} alt="" />
              </button>
              <span className={styles.navCount}>1 / 5</span>
              <button className={styles.navBtn} aria-label="Next">
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className={styles.rightCol}>
            <p className={styles.quote}>
              Every feature designed to solve real problems in industrial
              procurement and vendor relationships.
            </p>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <img src={avatarJenny} alt="Jenny Wilson" className={styles.avatar} />
                <div>
                  <p className={styles.authorName}>Jenny Wilson</p>
                  <p className={styles.authorRole}>CEO &amp; Head of Comp Inc.</p>
                </div>
              </div>
              <div className={styles.quoteIconWrap}>
                <img src={quoteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Trusted by */}
        <div className={styles.trustedBlock}>
          <h2 className={styles.trustedHeading}>Trusted by</h2>
          <p className={styles.trustedSub}>
            Our robust analytics offer rich insights into the information buyers
            want, informing where teams
          </p>
        </div>

        {/* Logos */}
        <div className={styles.logos}>
          <img src={logoIntel} alt="Intel" className={styles.logo} style={{ height: "32px" }} />
          <img src={logoOracle} alt="Oracle" className={styles.logo} style={{ height: "18px" }} />
          <img src={logoDell} alt="Dell" className={styles.logo} style={{ height: "36px" }} />
          <img src={logoSamsung} alt="Samsung" className={styles.logo} style={{ height: "20px" }} />
          <img src={logoInfosys} alt="Infosys" className={styles.logo} style={{ height: "32px" }} />
          <img src={logoCapgemini} alt="Capgemini" className={styles.logo} style={{ height: "36px" }} />
        </div>

        <hr className={styles.dividerShort} />
      </div>
    </section>
  );
}
