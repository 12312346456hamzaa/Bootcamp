import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <h1>Sample form</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />

        {/* Gender */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />

        {/* Destination */}
        <label>
          Select your destination
          <br />
          <select
            name="destination"
            value={props.data.destination}
            onChange={props.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Germany">Germany</option>
            <option value="Norway">Norway</option>
            <option value="Japan">Japan</option>
          </select>
        </label>

        <br />
        <br />
        {/* Dietary restrictions */}
        <label>
          <strong>Dietary restrictions:</strong>
          <br />
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={props.data.nutsFree}
              onChange={props.handleChange}
            />{" "}
            Nuts free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={props.data.lactoseFree}
              onChange={props.handleChange}
            />{" "}
            Lactose free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={props.data.isVegan}
              onChange={props.handleChange}
            />{" "}
            Vegan
          </label>
        </label>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <div className="info">
        <h2>Entered information:</h2>
        <p><em>Your name:</em> {props.data.firstName} {props.data.lastName}</p>
        <p><em>Your age:</em> {props.data.age}</p>
        <p><em>Your gender:</em> {props.data.gender}</p>
        <p><em>Your destination:</em> {props.data.destination}</p>
        <p><em>Your dietary restrictions:</em></p>
        <p>**Nuts free : {props.data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {props.data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {props.data.isVegan ? "Yes" : "No"}</p>
      </div>
    </main>
  );
}

export default FormComponent;
