// src/components/TaskList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, deleteTask } from '../features/planner/plannerSlice';

const TaskList = () => {
  const { selectedDate, tasksByDate } = useSelector(state => state.planner);
  const dispatch = useDispatch();
  const tasks = tasksByDate[selectedDate] || [];

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleSave = () => {
    dispatch(editTask({ date: selectedDate, id: editId, newText: editText }));
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map(task =>
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input value={editText} onChange={e => setEditText(e.target.value)} />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}>
                Delete
              </button>
            </>
          )}
        </li>
      )}
    </ul>
  );
};

export default TaskList;
