const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();
const PORT = 3000;

// Pour lire les body en JSON
app.use(express.json());

// Utilisation du routeur
app.use('/tasks', tasksRouter);

// 404 handler pour toute autre route
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
