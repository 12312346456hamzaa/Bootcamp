import React, { useState, useEffect } from "react";
import './Color.css';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect runs once after the component mounts
  useEffect(() => {
    alert("useEffect reached");
    setFavoriteColor("yellow");
  }, []);

  // Function to change color on button click
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div className="color-container">
      <h1>
        My Favorite Color is <span style={{ color: favoriteColor }}>{favoriteColor}</span>
      </h1>
      <button onClick={changeColor}>Change to blue</button>
    </div>
  );
}

export default Color;
