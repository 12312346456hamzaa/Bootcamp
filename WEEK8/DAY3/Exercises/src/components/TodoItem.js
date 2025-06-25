import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
};

export default TodoItem;
