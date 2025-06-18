import React, { useState } from "react";
import './Phone.css';

function Phone() {
  // Déclaration des variables d'état
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [year] = useState(2020);
  const [color, setColor] = useState("black");

  // Fonction pour changer la couleur
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div className="phone-container">
      <h1>My phone is a {brand}</h1>
      <p>It is a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
