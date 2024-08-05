import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components";
import { Tasks } from "./assets/components/Tasks";

function App() {
  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}

export default App;
