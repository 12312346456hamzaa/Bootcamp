import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, text: inputRef.current.value },
    });
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      {isEditing ? (
        <>
          <input defaultValue={task.text} ref={inputRef} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default Task;
