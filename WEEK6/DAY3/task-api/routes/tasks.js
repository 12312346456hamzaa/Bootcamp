const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const TASKS_FILE = path.join(__dirname, '../tasks.json');

// Fonction utilitaire pour lire les tâches
function readTasks() {
  try {
    const data = fs.readFileSync(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Fonction utilitaire pour écrire les tâches
function writeTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
}

// Générer un nouvel ID simple (auto-incrément)
function getNextId(tasks) {
  return tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
}

// Validation d'une tâche
function validateTask(data) {
  if (!data || typeof data.title !== 'string' || !data.title.trim()) {
    return 'Task "title" is required and must be a non-empty string.';
  }
  if (data.status && !['pending', 'in progress', 'completed'].includes(data.status)) {
    return 'Status must be "pending", "in progress", or "completed".';
  }
  return null;
}

// GET /tasks
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// POST /tasks
router.post('/', (req, res) => {
  const tasks = readTasks();
  const error = validateTask(req.body);
  if (error) {
    return res.status(400).json({ error });
  }
  const newTask = {
    id: getNextId(tasks),
    title: req.body.title.trim(),
    description: req.body.description ? String(req.body.description) : '',
    status: req.body.status || 'pending',
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  try {
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save task.' });
  }
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const error = validateTask(req.body);
  if (error) {
    return res.status(400).json({ error });
  }
  tasks[idx] = {
    ...tasks[idx],
    title: req.body.title.trim(),
    description: req.body.description ? String(req.body.description) : '',
    status: req.body.status || tasks[idx].status
  };
  try {
    writeTasks(tasks);
    res.json(tasks[idx]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task.' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const deleted = tasks.splice(idx, 1)[0];
  try {
    writeTasks(tasks);
    res.json({ message: 'Task deleted.', task: deleted });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task.' });
  }
});

module.exports = router;
