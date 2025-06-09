const express = require('express');
const router = express.Router();

// In-memory array for todos
let todos = [];
let nextId = 1;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST create a new todo
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = { id: nextId++, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update a todo by id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// DELETE a todo by id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const deleted = todos.splice(index, 1);
  res.json({ message: 'Todo deleted', todo: deleted[0] });
});

module.exports = router;
