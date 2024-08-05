import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components";
import { Tasks } from "./assets/components/Tasks";

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
      <Tasks task={tasks} />
    </>
  );
}

export default App;
