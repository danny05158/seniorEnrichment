import React, { Component } from 'react';
import { connect } from 'react-redux';
import Country from './Country'
import {getCountries} from '../store'

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
      this.props.countries.map(country =>
        <Country key={country.id} country={country} />)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
