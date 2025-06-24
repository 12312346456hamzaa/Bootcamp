import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);
  const tasks = useSelector((state) => state.tasks[selectedDate] || []);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const handleSave = (taskId) => {
    dispatch(editTask(selectedDate, taskId, editText));
    setEditingId(null);
    setEditText('');
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button onClick={() => handleSave(task.id)}>Sauvegarder</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEdit(task)}>Modifier</button>
              <button onClick={() => dispatch(deleteTask(selectedDate, task.id))}>Supprimer</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
