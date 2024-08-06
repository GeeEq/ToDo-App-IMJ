import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components";
import { Tasks } from "./assets/components/Tasks";
// import { ErrorBoundary } from "./assets/components/ErrorBoundary";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      {/* <ErrorBoundary> */}
      <Tasks task={tasks} />
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
