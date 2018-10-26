import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { deleteAircraft } from '../store';
import { connect } from 'react-redux';

const mapDispatchToProps = dispach => {
  return {
    deleteAircraft: aircraftId => dispach(deleteAircraft(aircraftId)),
  };
};

export const Aircraft = props => {
  if (props.aircraftMake) {
    return (
      <React.Fragment>
        <Link to={`/aircrafts/${props.aircraftMake.id}`}>
          <h3>{props.aircraftMake.make}</h3>
        </Link>
        <button
          type="submit"
          className="buttons"
          onClick={event => {
            event.preventDefault();
            props.deleteAircraft(props.aircraftMake.id);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  return (
    <div>
      <img id="aircraftImg" src={props.aircraft.imageUrl} />
      <NavLink to={`/aircrafts/${props.aircraft.id}`}>
        <h3>{props.aircraft.make}</h3>
      </NavLink>
      <h3>Model: {props.aircraft.model}</h3>
      <h3>Year: {props.aircraft.year} </h3>
      <h3>Cost: {props.aircraft.cost} </h3>
      <h3>Type: {props.aircraft.type}</h3>
      <h3>Description: {props.aircraft.description}</h3>
      {props.aircraft.country ? (
        <h3>{props.aircraft.country.name}</h3>
      ) : (
        <div />
      )}
      <NavLink to={`/aircrafts/updateAircraft/${props.aircraft.id}`}>
        <button className="buttons" id="UpdateAircraft" type="submit">
          Update Aircraft
        </button>
      </NavLink>
      <button
        type="submit"
        className="buttons"
        onClick={event => {
          event.preventDefault();
          props.deleteAircraft(props.aircraft.id);
          props.history.push('/aircrafts');
        }}
      >
        Delete Aircraft
      </button>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Aircraft);
