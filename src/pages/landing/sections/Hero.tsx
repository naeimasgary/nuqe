import styles from "./Hero.module.css";

const illustrationSrc = "https://www.figma.com/api/mcp/asset/0fd598fb-de61-40d8-a1a6-b05d0628b8e4";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h1 className={styles.headline}>
              Source Industrial
              <br />
              Automation with{" "}
              <span className={styles.headlineBold}>Confidence</span>
            </h1>
            <p className={styles.subheadline}>
              The vetted B2B marketplace where buyers and sellers of
              instrumentation and programming services connect anonymously —
              with trust built in.
            </p>
          </div>
          <button className={styles.cta}>Create Project</button>
        </div>
        <div className={styles.illustration}>
          <img src={illustrationSrc} alt="Industrial automation illustration" />
        </div>
      </div>
    </section>
  );
}
