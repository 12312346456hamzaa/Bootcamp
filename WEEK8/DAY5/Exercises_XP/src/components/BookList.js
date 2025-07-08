import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Horror':
        return horrorBooks;
      case 'Fantasy':
        return fantasyBooks;
      case 'Science Fiction':
        return sciFiBooks;
      default:
        return allBooks;
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>📚 Book Inventory</h2>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul style={{ marginTop: '20px' }}>
        {getBooksByGenre().map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} [{book.genre}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

