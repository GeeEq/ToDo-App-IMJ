import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.p}>
        <span className={styles.to}>To</span>
        <span className={styles.do}>Do</span> App
      </p>
      <form className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" />
        <button>Create</button>
      </form>
    </header>
  );
}
