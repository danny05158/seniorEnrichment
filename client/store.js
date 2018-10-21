import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';
import {push} from 'react-router-dom';
// https://github.com/gaearon/redux-thunk
import axios from 'axios';

//action types
const GET_COUNTRIES_FROM_SERVER = 'GET_COUNTRIES_FROM_SERVER';
const GET_AIRCRAFTS_FROM_SERVER = 'GET_AIRCRAFTS_FROM_SERVER';

const GET_COUNTRY_FROM_SERVER = 'GET_COUNTRY_FROM_SERVER';
const GET_TOP_FIVE = 'GET_TOP_FIVE';

const GET_SINGLE_AIRCRAFT = 'GET_SINGLE_AIRCRAFT';

const CREATE_COUNTRY = 'CREATE_COUNTRY';
const CREATE_AIRCRAFT = 'CREATE_AIRCRAFT';

const DELETE_COUNTRY = 'DELETE_COUNTRY';
const DELETE_AIRCRAFT = 'DELETE_AIRCRAFT';

const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
const UPDATE_AIRCRAFT = 'UPDATE_AIRCRAFT';

//action creators
export const getCountriesFromServer = countries => ({
  type: GET_COUNTRIES_FROM_SERVER,
  countries,
});

export const getAircraftsFromServer = aircrafts => ({
  type: GET_AIRCRAFTS_FROM_SERVER,
  aircrafts,
});

export const getCountryFromServer = country => ({
  type: GET_COUNTRY_FROM_SERVER,
  country,
});

export const getTopFive = topFiveCountries => ({
  type: GET_TOP_FIVE,
  topFiveCountries,
});

export const getSingleAircraftFromServer = aircraft => ({
  type: GET_SINGLE_AIRCRAFT,
  aircraft,
});

export const createSingleCountry = country => ({
  type: CREATE_COUNTRY,
  country,
});

const createSingleAircraft = aircraft => ({
  type: CREATE_AIRCRAFT,
  aircraft,
});

const deleteSingleCountry = country => ({
  type: DELETE_COUNTRY,
  country,
});

const deleteSingleAircraft = aircraft => ({
  type: DELETE_AIRCRAFT,
  aircraft,
});

const updateSingleCountry = country => ({
  type: UPDATE_COUNTRY,
  country,
});

const updateAircraft = aircraft => ({
  type: UPDATE_AIRCRAFT,
  aircraft,
});

//thunks
export const getCountries = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/countries/');
      dispatch(getCountriesFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAircrafts = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/aircrafts');
      dispatch(getAircraftsFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCountry = countryId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/countries/${countryId}`);
      dispatch(getCountryFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const topFive = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/countries/top5');
      console.log("IN THE THUNK", data)
      dispatch(getTopFive(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSingleAircraft = aircraftId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/aircrafts/${aircraftId}`);
      dispatch(getSingleAircraftFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createCountry = country => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/countries', country);
      dispatch(createSingleCountry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createAircraft = aircraft => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/aircrafts', aircraft);
      dispatch(createSingleAircraft(data));
      this.props.history.push('/aircrafts');
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCountry = countryId => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/countries/${countryId}`);
      dispatch(deleteSingleCountry(data));
      // this.props.history.push('/countries');
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteAircraft = aircraftId => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/aircrafts/${aircraftId}`);
      dispatch(deleteSingleAircraft(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const upDateCountry = (countryId, country) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/countries/updateCountry/${countryId}`, country);
      dispatch(updateSingleCountry(data));
      this.props.history.push('/countries');
    } catch (err) {
      console.log(err);
    }
  };
};

export const upDateAircraft = (aircraftId, aircraft) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/aircrafts/updateAircraft/${aircraftId}`, aircraft);
      dispatch(updateAircraft(data));
      this.props.history.push('/aircrafts');
    } catch (err) {
      console.log(err);
    }
  };
};
const initialState = {
  countries: [],
  aircrafts: [],
  singleCountry: {},
  topFive: [],
  singleAircraft: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_FROM_SERVER:
      return { ...state, countries: action.countries };
    case GET_COUNTRY_FROM_SERVER:
      return { ...state, singleCountry: action.country };
    case GET_AIRCRAFTS_FROM_SERVER:
      return { ...state, aircrafts: action.aircrafts };
    case GET_TOP_FIVE:
      return { ...state, topFive: action.topFiveCountries };
    case GET_SINGLE_AIRCRAFT:
      return { ...state, singleAircraft: action.aircraft };

      case CREATE_AIRCRAFT:
      return { ...state, aircrafts: [...state.aircrafts, action.aircraft] };
      case CREATE_COUNTRY:
        return { ...state, countries: [...state, action.country] };

      case UPDATE_AIRCRAFT:
      let updatedAircraftArr = state.aircrafts.map(aircraft =>{
        return aircraft.id === action.aircraft.id
        ? action.aircraft : aircraft
      })
      console.log("IN THE REDUCER", updatedAircraftArr)
        return {...state, aircrafts: updatedAircraftArr}


      case UPDATE_COUNTRY:
      let updatedCountryArr = state.countries.map(country =>{
        return country.id === action.country.id
        ? action.country : country
      })
      return { ...state, countries: updatedCountryArr};

      case DELETE_AIRCRAFT:
        let updateAirArr = state.aircrafts.filter(SingleAircraft =>
          SingleAircraft.id !== action.aircraft.id)
        return {...state, aircrafts: updateAirArr}

      case DELETE_COUNTRY:
        let updateCountryArr = state.countries.filter(SingleCountry =>
          SingleCountry.id !== action.country.id)
          console.log("IN REDUCER", updateCountryArr)
        return {...state, countries: updateCountryArr}

        default:
      return state;
  }
};

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);
