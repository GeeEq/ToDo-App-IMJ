import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>Add something to do</p>
      <button className={styles.deleteButton}></button>
    </div>
  );
}
