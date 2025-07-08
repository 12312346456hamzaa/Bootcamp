import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';
import { selectCompletedTasks } from './features/tasksSlice';

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📈 Productivity Tracker</h1>
      <p>Completed Tasks: {completedCount}</p>
      <CategorySelector selectedId={selectedCategoryId} setSelectedId={setSelectedCategoryId} />
      <TaskList categoryId={selectedCategoryId} />
    </div>
  );
}

export default App;
