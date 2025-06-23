import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TASK", payload: input });
      setInput("");
    }
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "ALL") return true;
    if (state.filter === "ACTIVE") return !task.completed;
    if (state.filter === "COMPLETED") return task.completed;
    return true;
  });

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type="text"
        placeholder="New task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
