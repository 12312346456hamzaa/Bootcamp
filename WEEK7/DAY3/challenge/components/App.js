import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(this.state)) {
      if (typeof value === "boolean") {
        if (value) {
          params.append(key, "on");
        }
      } else {
        params.append(key, value);
      }
    }

    window.history.pushState({}, "", `?${params.toString()}`);
  };

  render() {
    return (
      <div>
        <FormComponent
          handleChange={this.handleChange}
          data={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
