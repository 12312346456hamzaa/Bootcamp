import React, { useState } from "react";
import Garage from "./Garage";

function Car(props) {
  const [color] = useState("red");
  const model = props.car.model;

  return (
    <div>
      <h1>This car is a {color} {model}.</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;
