const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);               // GET /api/books
router.get('/:bookId', bookController.getBookById);        // GET /api/books/:bookId
router.post('/', bookController.createBook);               // POST /api/books

module.exports = router;
