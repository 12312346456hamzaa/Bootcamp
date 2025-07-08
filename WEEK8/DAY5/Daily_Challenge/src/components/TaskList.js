import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasksByCategory,
  toggleTaskCompleted,
  editTask,
  deleteTask,
} from '../features/tasksSlice';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));
  const dispatch = useDispatch();
  const [editText, setEditText] = useState({});

  const handleToggle = useCallback((id) => {
    dispatch(toggleTaskCompleted(id));
  }, [dispatch]);

  const handleEdit = useCallback((id) => {
    if (editText[id]) {
      dispatch(editTask({ id, title: editText[id] }));
      setEditText((prev) => ({ ...prev, [id]: '' }));
    }
  }, [dispatch, editText]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          {editText[task.id] !== undefined ? (
            <>
              <input
                value={editText[task.id]}
                onChange={(e) => setEditText({ ...editText, [task.id]: e.target.value })}
              />
              <button onClick={() => handleEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
              <button onClick={() => setEditText({ ...editText, [task.id]: task.title })}>
                Edit
              </button>
            </>
          )}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
