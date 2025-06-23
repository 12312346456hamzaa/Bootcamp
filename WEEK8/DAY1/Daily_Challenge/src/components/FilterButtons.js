import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterButtons = () => {
  const { dispatch, state } = useContext(TaskContext);

  const changeFilter = (filter) => {
    dispatch({ type: "FILTER_TASKS", payload: filter });
  };

  return (
    <div>
      <button
        onClick={() => changeFilter("ALL")}
        disabled={state.filter === "ALL"}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("ACTIVE")}
        disabled={state.filter === "ACTIVE"}
      >
        Active
      </button>
      <button
        onClick={() => changeFilter("COMPLETED")}
        disabled={state.filter === "COMPLETED"}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
