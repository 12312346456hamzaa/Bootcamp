import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.show && <Child />}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;
