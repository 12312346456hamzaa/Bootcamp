import React, { Component } from 'react';
import data from '../data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: 'crimson', fontStyle: 'italic' }}>Example2 Component</h3>
        {data.Skills.map((skillArea, index) => (
          <div key={index}>
            <strong>{skillArea.Area}</strong>
            <ul>
              {skillArea.SkillSet.map((skill, idx) => (
                <li key={idx}>{skill.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
