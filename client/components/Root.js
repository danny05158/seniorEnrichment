import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome to the Field</h1>
      </div>
    );
  }
}
