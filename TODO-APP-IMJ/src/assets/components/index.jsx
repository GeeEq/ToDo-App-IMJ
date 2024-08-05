import { useState } from "react";
import styles from "./Header.module.css";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <p className={styles.p}>
        <span className={styles.to}>To</span>
        <span className={styles.do}>Do</span> App
      </p>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          onChange={onChangeTitle}
          placeholder="Add a new task"
          type="text"
        />
        <button>Create</button>
      </form>
    </header>
  );
}
