import styles from "./BannerHeader.module.css";

export function BannerHeader() {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>New</span>
          <span className={styles.message}>Frontend Pages Added</span>
        </div>
      </div>
    </div>
  );
}
