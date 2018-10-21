import React, { Component } from 'react';
import {connect } from 'react-redux';
import {getAircrafts} from '../store';
import Aircraft from './Aircraft';
import {NavLink} from 'react-router-dom';

const mapStateToProps = state =>{
  return {
    aircrafts: state.aircrafts

  }
}

const mapDispachToProps = dispatch => {
  return {
    getAircrafts: () => dispatch(getAircrafts()),
  }
}

class Aircrafts extends Component {

  componentDidMount(){
    this.props.getAircrafts()
  }

  render() {
    return (
      <div>
        <NavLink to="/aircrafts/createAircraft">
          <button className="buttons" type="submit">Create a Aircraft</button>
        </NavLink>
        {
          this.props.aircrafts.map(aircraft =>
          <Aircraft key={aircraft.id} aircraft={aircraft} />)
        }
      </div>
    )
 }
}

export default connect(mapStateToProps, mapDispachToProps)(Aircrafts)
