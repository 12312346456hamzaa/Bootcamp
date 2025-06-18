import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaSript", votes: 5 },
    { name: "Java", votes: 1 },
  ]);

  const handleVote = (index) => {
    const updated = [...languages];
    updated[index].votes += 1;
    setLanguages(updated);
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div className="card" key={index}>
          <span>{lang.votes}</span>
          <span>{lang.name}</span>
          <button onClick={() => handleVote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
