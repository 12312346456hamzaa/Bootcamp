const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Données de base (simulateur de base de données)
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", publishedYear: 1943 },
  { id: 3, title: "L'Étranger", author: "Albert Camus", publishedYear: 1942 }
];

// READ ALL 
app.get('/api/books', (req, res) => {
  res.json(books);
});

// READ 
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// CREATE 
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
