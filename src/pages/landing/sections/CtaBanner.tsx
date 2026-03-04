import styles from "./CtaBanner.module.css";

const avatar1 = "https://www.figma.com/api/mcp/asset/a377645c-bf2c-414f-9caf-11a5acd099f6";
const avatar2 = "https://www.figma.com/api/mcp/asset/d6f58969-8804-4396-b07a-13ced6a873fa";

export function CtaBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.avatarStack}>
        <img src={avatar1} alt="" className={styles.avatar1} />
        <img src={avatar2} alt="" className={styles.avatar2} />
      </div>
      <p className={styles.message}>
        Save valuable time and effort spent searching for a solution.
      </p>
      <button className={styles.link}>Contact us now</button>
    </div>
  );
}
