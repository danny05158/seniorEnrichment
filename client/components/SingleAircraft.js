import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleAircraft} from '../store'
import Aircraft from './Aircraft';

const mapStateToProps = state =>{
  return {
    singleAircraft: state.singleAircraft
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getSingleAircraft: (aircraftid) => dispatch(getSingleAircraft(aircraftid))
  }
}


class SingleAircraft extends Component {

  componentDidMount(){
    const aircraftid = this.props.match.params.aircraftId
    this.props.getSingleAircraft(aircraftid)
  }

  render() {
    let singleAircraft = this.props.singleAircraft
    return (
      <div>
          <Aircraft aircraft={singleAircraft} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAircraft)
