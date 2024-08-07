import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./assets/components";
import { Tasks } from "./assets/components/Tasks";
// import { ErrorBoundary } from "./assets/components/ErrorBoundary";

const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      {/* <ErrorBoundary> */}
      <Tasks
        task={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
