const express = require('express');
const app = express();

// lire le JSON dans les requêtes POST/PUT
app.use(express.json());

// Importer le router des livres
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
