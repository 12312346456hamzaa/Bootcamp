const express = require('express');
const app = express();


app.use(express.json());

// Importer le router todos
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
