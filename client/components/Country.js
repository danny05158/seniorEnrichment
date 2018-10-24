import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteCountry} from '../store'
import Aircraft from './Aircraft'
//{props.country.aircraft}

export const Country = (props) => {
  //  console.log("Here2", props.country)
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


          <div>
           <h3>Aircrafts: </h3>
           {
             props.country.aircraft ? props.country.aircraft.map(aircraft =>
               <Aircraft key={aircraft.id} aircraft={aircraft} />) :
              // console.log("Mapping", aircraft)) :
              <h3>No Aircrafts</h3>
          }
        </div>


      </div>
    );
}

const mapDispatchToProps = dispach => {
  return {
    deleteCountry: (countryId) => dispach(deleteCountry(countryId))
  }
}

export default connect(null, mapDispatchToProps)(Country)
