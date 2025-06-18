import React, { useState } from "react";
import './Events.css';

function Events() {
  // State for Part II (input)
  const [inputValue, setInputValue] = useState("");

  // State for Part III (toggle)
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I: click handler
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II: handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${inputValue}`);
    }
  };

  // Part III: toggle ON/OFF
  const handleToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div className="event-container">
      {/* Part I */}
      <h3>Exercise 9:</h3>
      <button onClick={clickMe}>OK</button>

      {/* Part II */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Press the ENTER key!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Part III */}
      <div className="toggle-section">
        <p>{isToggleOn ? "ON" : "OFF"}</p>
        <button onClick={handleToggle}>
          {isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}

export default Events;
