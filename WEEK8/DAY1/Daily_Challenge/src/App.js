import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <TaskList />
        <FilterButtons />
      </div>
    </TaskProvider>
  );
};

export default App;
