import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="navbar">
      <Link to="/countries">Countries</Link>
      <Link to="/aircrafts">Aircrafts</Link>
    </div>
  );
};

export default Navbar;
