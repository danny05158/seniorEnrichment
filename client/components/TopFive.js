import React, { Component } from 'react';
import { connect } from 'react-redux';
import { topFive } from '../store';
import Country from './Country';

//IMPORTS FROM GROMMET
import { Box, Grid, Heading } from 'grommet';

class TopFive extends Component {
  componentDidMount() {
    this.props.topFiveCountries();
  }

  render() {
    return (
      <div>
        <Heading level={2}>Welcome to the Aircraft Fanatics App</Heading>
        <Heading level={3}>Top Scoreboard of top 5 countries Global FirePower Index(GFI)</Heading>

        <Box pad="large">
          <Grid columns="small" gap="small">
            {this.props.topFive.map(country => (
              <Country key={country.id} country={country} />
            ))}
          </Grid>
        </Box>
        
      </div>
    );
  }
}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopFive);
