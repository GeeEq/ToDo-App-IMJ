import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components";
import { Task } from "./assets/components/Task";

function App() {
  return (
    <>
      <Header />
      <Task />
    </>
  );
}

export default App;
