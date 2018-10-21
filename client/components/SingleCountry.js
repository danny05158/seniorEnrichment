import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCountry} from '../store'
import Country from './Country';

const mapStateToProps = state => {
  return {
    singleCountry: state.singleCountry
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCountryFromServer: (countryId) => dispatch(getCountry(countryId))
  }
}


class SingleCountry extends Component {

  componentDidMount(){
    const countryId = this.props.match.params.countryId
    this.props.getCountryFromServer(countryId)
  }

  render() {
    let country = this.props.singleCountry;
    return (
      <div>
        <Country country={country} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry)
