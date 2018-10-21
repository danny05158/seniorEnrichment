import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteCountry} from '../store'

export const Country = (props) => {
    return (
      <div>
          <img id="countryImg" src={props.country.flagUrl} />
          <h3 id="countryName">Country:</h3>
          <NavLink to={`/countries/${props.country.id}`}>
          <h3>Country: {props.country.name}</h3>
          </NavLink>
          <h3>GRI: {props.country.GFI}</h3>

         <NavLink to={`/countries/updateCountry/${props.country.id}`}>
           <button id="UpdateButton" type="submit">Update Country</button>
         </NavLink>
         <button
           id="deleteButton"
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            props.deleteCountry(props.country.id)
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
