import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

function App() {
  const getRandomQuote = (excludeIndex) => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === excludeIndex);
    return { ...quotes[index], index };
  };

  const getRandomColor = () => {
    const colors = ['#2c3e50', '#16a085', '#8e44ad', '#d35400', '#c0392b'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [quoteState, setQuoteState] = useState(() => {
    const { quote, author, index } = getRandomQuote(-1);
    return { quote, author, index, color: getRandomColor() };
  });

  const handleClick = () => {
    const { quote, author, index } = getRandomQuote(quoteState.index);
    const color = getRandomColor();
    setQuoteState({ quote, author, index, color });
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: quoteState.color }}
    >
      <div className="quote-box">
        <h1 style={{ color: quoteState.color }}>"{quoteState.quote}"</h1>
        <p className="author">- {quoteState.author} -</p>
        <button
          onClick={handleClick}
          style={{ backgroundColor: quoteState.color }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
