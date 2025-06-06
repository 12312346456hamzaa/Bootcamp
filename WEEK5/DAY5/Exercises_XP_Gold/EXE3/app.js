const express = require('express');
const app = express();

app.use(express.json());

// "Base de données" en mémoire
let todos = [];
let nextId = 1;

// Créer une nouvelle todo
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const todo = { id: nextId++, title, completed: !!completed };
  todos.push(todo);
  res.status(201).json(todo);
});

// Obtenir toutes les todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Obtenir une todo par ID
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Modifier une todo par ID
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = !!completed;

  res.json(todo);
});

// Supprimer une todo par ID
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  todos.splice(index, 1);
  res.json({ message: 'Todo deleted' });
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
