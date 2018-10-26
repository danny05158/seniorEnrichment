import React, { Component } from 'react';
import {connect} from 'react-redux';
import {upDateCountry} from '../store'
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    upDateCountry: (countryId, country) => dispatch(upDateCountry(countryId, country)),
  }
}

class UpdateCountry extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      flagUrl: '',
      GFI: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    const countryId = this.props.match.params.countryId;
    const {data} = await axios.put(`/api/countries/updateCountry/${countryId}`)
    this.setState({
      name: data.name,
      model: data.model,
      flagUrl: data.flagUrl,
      GFI: data.GFI
    })
  }

  handleChange(event){
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
   }

  handleSubmit(event){
    const countryId = this.props.match.params.countryId
    event.preventDefault();
    this.props.upDateCountry(countryId, this.state);
    this.props.history.push('/countries');

  }

  render() {
    let country = this.state;
    return (
      <React.Fragment>
      <img id="countryImg" src={country.flagUrl}/>
      <form id="createAirForm" onSubmit={this.handleSubmit}>
      <div id="container">
        <h1>Update Country Fields</h1>

        <label>
          <b>Name:</b>
        </label>
        <input
        type="text"
        name="name"
        className="createAircraftInput"
        value={this.state.name}
        placeholder={country.name}
        onChange={this.handleChange}
         />

        <label>
          <b>FlagUrl:</b>
        </label>
        <input
         type="text"
         name="flagUrl"
         className="createAircraftInput"
         placeholder={country.flagUrl}
         value={this.state.flagUrl}
         onChange={this.handleChange}
          />

        <b>Global Firepower Index decimal between 0 - 10  </b>
        <select  name="GFI" value={this.state.GFI} onChange={this.handleChange}>
          <option value="1" name="1">1</option>
          <option value="2" name="2">2</option>
          <option value="3" name="3">3</option>
          <option value="4" name="4">4</option>
          <option value="5" name="5">5</option>
          <option value="6" name="6">6</option>
          <option value="7" name="7">7</option>
          <option value="8" name="8">8</option>
          <option value="9" name="9">9</option>
          <option value="10" name="10">10</option>
        </select>
      </div>
        <button type="submit" className="button" >Submit</button>
      </form>
      </React.Fragment>
    );
  }
}

export default connect(null, mapDispatchToProps)(UpdateCountry)
