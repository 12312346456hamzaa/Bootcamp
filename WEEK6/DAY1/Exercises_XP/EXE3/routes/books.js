const express = require('express');
const router = express.Router();

// In-memory array for books
let books = [];
let nextId = 1;

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST create a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book 
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  res.json(book);
});

// DELETE a book 
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const deleted = books.splice(index, 1);
  res.json({ message: 'Book deleted', book: deleted[0] });
});

module.exports = router;
