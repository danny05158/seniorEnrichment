import React, { Component } from 'react';
import { connect } from 'react-redux';
import Country from './Country'
import {getCountries} from '../store'
import {Link, NavLink} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => dispatch(getCountries())
  }
};

class Countries extends Component {

  componentDidMount(){
    this.props.getCountries()
  }
  render() {
    return (
      <div>
        <NavLink to="/countries/createCountry">
           <button id="createCountryButton"
           type="submit">Create a Country
           </button>
        </NavLink>
        {
          this.props.countries.map(country =>
            <Country key={country.id} country={country} />)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
