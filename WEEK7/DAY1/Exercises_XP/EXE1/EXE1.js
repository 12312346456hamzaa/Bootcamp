// App.js
import React from 'react';

function App() {
  // Display "Hello World!" message in a paragraph
  const helloMessage = <p>Hello World!</p>;

  // JSX element
  const myelement = <h1>I Love JSX!</h1>;

  // Create a sum variable 
  const sum = 5 + 5;
  const sentence = <h2>React is {sum} times better with JSX</h2>;

  return (
    <div>
      {helloMessage}
      {myelement}
      {sentence}
    </div>
  );
}

export default App;
