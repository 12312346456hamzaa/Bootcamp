import React from 'react';
import Calendar from './components/Calendar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Daily Task Manager</h1>
      <Calendar />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
