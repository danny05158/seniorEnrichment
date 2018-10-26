import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAircraft } from '../store';

const mapDispatchToProps = dispatch => {
  return {
    createAircraft: aircraft => dispatch(createAircraft(aircraft)),
  };
};

class CreateAircraft extends Component {
  constructor() {
    super();
    this.state = {
      make: '',
      model: '',
      year: '',
      cost: '',
      imageUrl: '',
      type: 'Attack', //default type
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createAircraft(this.state);
    this.props.history.push('/aircrafts');
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form id="createAirForm" onSubmit={this.handleSubmit}>
        <div id="container">
          <h1>Create an Aircraft</h1>
          <p>Fill this form with Aircraft specifications.</p>

          <label>
            <b>Make:</b>
          </label>
          <input
            type="text"
            name="make"
            className="createAircraftInput"
            placeholder="Make"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Model:</b>
          </label>
          <input
            type="text"
            name="model"
            className="createAircraftInput"
            placeholder="Enter Model"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Year:</b>
          </label>
          <input
            type="text"
            name="year"
            className="createAircraftInput"
            placeholder="Enter Year"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Cost: (in Mill)</b>
          </label>
          <input
            type="text"
            name="cost"
            className="createAircraftInput"
            placeholder="Enter Cost"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Image Url:</b>
          </label>
          <input
            type="text"
            name="imageUrl"
            className="createAircraftInput"
            placeholder="Enter Image Url"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Description:</b>
          </label>
          <input
            type="text"
            name="description"
            className="createAircraftInput"
            placeholder="Enter Description"
            onChange={this.handleChange}
            required
          />
          <b>Type: </b>
          <select name="type" onChange={this.handleChange}>
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
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateAircraft);
