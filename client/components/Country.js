import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteCountry} from '../store'

export const Country = (props) => {
    return (
      <div>
          <img id="countryImg" src={props.country.flagUrl} />
          <NavLink to={`/countries/${props.country.id}`}>
           <h3>{props.country.name}</h3>
          </NavLink>
          <h3>GRI: {props.country.GFI}</h3>

         <NavLink to={`/countries/updateCountry/${props.country.id}`}>
           <button className="buttons" id="UpdateButton" type="submit">Update Country</button>
         </NavLink>
         <button
           className="buttons"
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            props.deleteCountry(props.country.id)
            // props.history.push('/countries');

          }}
          >Delete Country
         </button>
      </div>
    );
}

const mapDispatchToProps = dispach => {
  return {
    deleteCountry: (countryId) => dispach(deleteCountry(countryId))
  }
}

export default connect(null, mapDispatchToProps)(Country)
