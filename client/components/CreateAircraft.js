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
        model: "",
        year: '',
        cost: "",
        imageUrl: '',
        type: 'Attack', //default type
        description: ''
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createAircraft(this.state);
  }

  handleChange(event){
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form id="createAirForm" onSubmit={this.handleSubmit}>
        <div id="container">
          <h1>Create an Aircraft</h1>
          <p>Please fill in this form with Aircraft specifications.</p>

          <label>
            <b>Make:</b>
          </label>
          <input type="text" name="make" placeholder="Make"  onChange={this.handleChange} required />

          <label>
            <b>Model:</b>
          </label>
          <input type="text" name="model" placeholder="Enter Model"  onChange={this.handleChange} required />

         <b>Type: </b>
          <select name="type" onChange={this.handleChange}>
            <option value="Attack" name="Attack">Attack</option>
            <option value="Bomber" name="Attack">Bomber</option>
            <option value="Versatile" name="Versatile">Versatile</option>
            <option value="Transport" name="Transport">Transport</option>
            <option value="Reconoissance" name="Reconoissance">Reconoissance</option>
            <option value="Rescue" name="Rescue">Rescue</option>
          </select>

          <label>
            <b>Year:</b>
          </label>
          <input type="text" name="year" placeholder="Enter Year"  onChange={this.handleChange} required />

          <label>
            <b>Cost: (in Millions)</b>
          </label>
          <input type="text" name="cost" placeholder="Enter Cost" onChange={this.handleChange} required />

          <label>
            <b>Image Url:</b>
          </label>
          <input type="text" name="imageUrl" placeholder="Enter Image Url" onChange={this.handleChange} required />

          <label>
            <b>Description:</b>
          </label>
          <input type="text" name="description" placeholder="Enter Description"  onChange={this.handleChange} required />

          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateAircraft);
