import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar" className="row">
        <Link to="/countries">Countries</Link>
        <Link to="/aircrafts">Aircrafts</Link>
    </div>
  );
};

export default Navbar;
