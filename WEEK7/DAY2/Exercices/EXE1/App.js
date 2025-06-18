import React from "react";
import Car from "./Components/Car";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car car={carinfo} />
    </div>
  );
}

export default App;
