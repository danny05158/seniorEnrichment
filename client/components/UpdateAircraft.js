import React, { Component } from 'react';
import { connect } from 'react-redux';
import {upDateAircraft } from '../store';
import axios from 'axios';


const mapDispachToProps = dispatch => {
  return {
    upDateAircraft: (aircraftId, aircraft) => dispatch(upDateAircraft(aircraftId, aircraft)),
  };
};

class UpdateAircraft extends Component {
  constructor() {
    super();
    this.state = {
      make: '',
      model: '',
      year: '',
      cost: '',
      imageUrl: '',
      type: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const aircraftId = this.props.match.params.aircraftId;
    const { data } = await axios.put(`/api/aircrafts/updateAircraft/${aircraftId}`);
    this.setState({
      make: data.make,
      model: data.model,
      year: data.year,
      cost: data.cost,
      imageUrl: data.imageUrl,
      type: data.type,
      description: data.description
    })

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    const aircraftId = this.props.match.params.aircraftId
    event.preventDefault();
    this.props.upDateAircraft(aircraftId, this.state);
    this.props.history.push('/aircrafts');
  }

  render() {
    let aircraft = this.state;

    return (
      <React.Fragment>
      <img id="aircraftImg" src={aircraft.imageUrl}/>
      <form id="createAirForm" onSubmit={this.handleSubmit}>
        <div id="container">
          <h3>Please Update the fields on this form</h3>

          <label>
            <b>Make:</b>
          </label>
          <input
            type="text"
            name="make"
            value={this.state.make}
            placeholder={aircraft.make}
            onChange={this.handleChange}

            />

          <label>
            <b>Model:</b>
          </label>
          <input
            type="text"
            name="model"
            placeholder={aircraft.model}
            onChange={this.handleChange}
            value={this.state.model}

            />

          <select
            name="type"
            placeholder={aircraft.type}
            onChange={this.handleChange}
            value={this.state.type}
            >
            <option value="Attack" name="Attack">
              Attack
            </option>
            <option value="Bomber" name="Attack">
              Bomber
            </option>
            <option value="Versatile" name="Versatile">
              Versatile
            </option>
            <option value="Transport" name="Transport">
              Transport
            </option>
            <option value="Reconoissance" name="Reconoissance">
              Reconoissance
            </option>
            <option value="Rescue" name="Rescue">
              Rescue
            </option>
          </select>

          <label>
            <b>Year:</b>
          </label>
          <input
            type="text"
            name="year"
            placeholder={aircraft.year}
            onChange={this.handleChange}
            value={this.state.year}

            />

          <label>
            <b>Cost: (in Millions)</b>
          </label>
          <input
            type="text"
            name="cost"
            placeholder={aircraft.cost}
            onChange={this.handleChange}
            value={this.state.cost}

            />

          <label>
            <b>Image Url:</b>
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder={aircraft.imageUrl}
            onChange={this.handleChange}
            value={this.state.imageUrl}
            />

          <label>
            <b>Description:</b>
          </label>
          <input
            type="text"
            name="description"
            placeholder={aircraft.description}
            onChange={this.handleChange}
            value={this.state.description}

            />

          <button id="createAirBtn " type="submit">
            Submit
          </button>
        </div>
      </form>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  mapDispachToProps
)(UpdateAircraft);
