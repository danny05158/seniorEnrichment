import React, { Component } from 'react';
import { connect } from 'react-redux';
import Country from './Country';
import { getCountries } from '../store';
import { Link, NavLink } from 'react-router-dom';

//IMPORTS FROM GROMMET
import { Box, Grid, Heading } from 'grommet';

const mapStateToProps = state => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => dispatch(getCountries()),
  };
};

class Countries extends Component {
  componentDidMount() {
    this.props.getCountries();
  }
  render() {
    return (
      <div>
        <Link to="/countries/createCountry">
          <button className="buttons" type="submit">
            Create a Country
          </button>
        </Link>

        <Box pad="large">
          <Grid columns="small" gap="small">
            {this.props.countries.map(country => (
              <Country key={country.id} country={country} />
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
