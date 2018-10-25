import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'reactstrap';

const Navbar = () => {
  return (
    <div id="navbar" className="row">
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/aircrafts">Aircrafts</Link>
    </div>
  );
};

export default Navbar;
