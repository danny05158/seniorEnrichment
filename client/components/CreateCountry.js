import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCountry } from '../store';

const mapDispatchToProps = dispatch => {
  return {
    createCountry: country => dispatch(createCountry(country)),
  };
};

class CreateCountry extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      GFI: 1, //default value
      flagUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createCountry(this.state);
    this.props.history.push('/countries');
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
          <h1>Create a Country</h1>
          <p>Please fill in this form with Country specifications</p>

          <label>
            <b>Name:</b>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="createAircraftInput"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>FlagUrl:</b>
          </label>
          <input
            type="text"
            name="flagUrl"
            placeholder="flagUrl"
            className="createAircraftInput"
            onChange={this.handleChange}
            />

          <b>Global Firepower Index decimal between 0 - 10 </b>
          <select name="GFI" onChange={this.handleChange}>
            <option value="1" name="1">
              1
            </option>
            <option value="2" name="2">
              2
            </option>
            <option value="3" name="3">
              3
            </option>
            <option value="4" name="4">
              4
            </option>
            <option value="5" name="5">
              5
            </option>
            <option value="6" name="6">
              6
            </option>
            <option value="7" name="7">
              7
            </option>
            <option value="8" name="8">
              8
            </option>
            <option value="9" name="9">
              9
            </option>
            <option value="10" name="10">
              10
            </option>
          </select>
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCountry);
