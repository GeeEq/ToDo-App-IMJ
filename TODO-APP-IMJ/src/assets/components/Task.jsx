import styles from "./Tasks.module.css";

export function Task() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks</p>
          <span>10</span>
        </div>
        <div>
          <p>Completed</p>
          <span>1 of 10</span>
        </div>
      </header>
    </section>
  );
}
