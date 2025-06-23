import React, { Component } from 'react';
import data from '../data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: 'crimson', fontStyle: 'italic' }}>Example1 Component</h3>
        <ul>
          {data.SocialMedias.map((link, index) => (
            <li key={index}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
