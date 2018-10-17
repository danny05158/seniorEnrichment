import React, { Component } from 'react';

export default function Country (props) {
    return (
      <div>
          <h3 id="countryName">{props.country.name} GRI: {props.country.GFI}</h3>
          <img id="countryImg" src={props.country.flagUrl} />
      </div>
    );

}
