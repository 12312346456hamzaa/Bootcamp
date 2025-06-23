import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Unknown operation';
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <button onClick={calculate}>Calculate</button>

      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;
