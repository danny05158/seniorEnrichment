import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCountries} from '../store'

const mapStateToProps = state => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => dispatch(getCountries())
  }
};

class Countries extends Component {
  render() {
    return <div />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
