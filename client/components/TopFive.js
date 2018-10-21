import React, { Component } from 'react';
import { connect } from 'react-redux';
import { topFive } from '../store';
import Country from './Country';

const mapStateToProps = state => {
  return {
    topFive: state.topFive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    topFiveCountries: () => dispatch(topFive()),
  };
};

class TopFive extends Component {

  componentDidMount() {
    this.props.topFiveCountries();
  }

  render() {
    return (
      <div>
        <h1 id="welcomeHeader">Welcome to Aircraft Fanatics Website!</h1>
        <h2> Top Scoreboard of the Top 5 Countries based on GFI</h2>
        {
            this.props.topFive.map(country => (
            <Country key={country.id} country={country} />))
        }
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopFive);
