import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h2>📝 Todo List avec Redux</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
