import React, { Component } from 'react';
import data from '../data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: 'crimson', fontStyle: 'italic' }}>Example3 Component</h3>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <img src={exp.logo} alt="company logo" style={{ width: 100 }} />
            <p><a href={exp.url}>{exp.companyName}</a></p>
            {exp.roles.map((role, idx) => (
              <div key={idx}>
                <strong>{role.title}</strong><br />
                <p>{role.startDate} | {role.location}</p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
