import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        <strong>Click on the numbers to increase the counters.</strong><br />
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
      </p>

      <hr />
      <h2>Simulation 1: Two counters in one error boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      <h2>Simulation 2: Each counter has its own error boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      <h2>Simulation 3: Counter not inside error boundary</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;
