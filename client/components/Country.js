import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCountry } from '../store';
import Aircraft from './Aircraft';

export const Country = props => {
  //  console.log("Here", props.country.aircraft)
  if (!props.country.aircraft) {
    return (
      <div>
        <img id="countryImg" src={props.country.flagUrl} />
        <Link to={`/countries/${props.country.id}`}>
          <h3>{props.country.name}</h3>
        </Link>
        <h3>GFI: {props.country.GFI}</h3>
      </div>
    );
  }
  return (
    <div>
      <img id="countryImg" src={props.country.flagUrl} />

      <Link to={`/countries/${props.country.id}`}>
        <h3>{props.country.name}</h3>
      </Link>
      <h3>GRI: {props.country.GFI}</h3>

      <Link to={`/countries/updateCountry/${props.country.id}`}>
        <button className="buttons" id="UpdateButton" type="submit">
          Update Country
        </button>
      </Link>

      <Link to="/aircrafts/createAircraft">
        <button className="buttons" type="submit">
          Create a Aircraft
        </button>
      </Link>
      <button
        className="buttons"
        type="submit"
        onClick={event => {
          event.preventDefault();
          props.deleteCountry(props.country.id);
        }}
      >
        Delete Country
      </button>
      <h3>Aircrafts: </h3>
      <div>
        {props.country.aircraft.length ? (
          props.country.aircraft.map(aircraft => (
            <Aircraft key={aircraft.id} aircraft={aircraft} />
          ))
        ) : (
          <h3>{props.country.name} is not interested in planes!</h3>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispach => {
  return {
    deleteCountry: countryId => dispach(deleteCountry(countryId)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Country);
