import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(selectedDate, { id: uuidv4(), text }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nouvelle tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;
