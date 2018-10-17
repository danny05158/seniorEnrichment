import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';
// https://github.com/gaearon/redux-thunk
import axios from 'axios';

//action types
const GET_COUNTRIES_FROM_SERVER = 'GET_COUNTRIES_FROM_SERVER';
const GET_AIRCRAFTS_FROM_SERVER = 'GET_AIRCRAFTS_FROM_SERVER';

const GET_COUNTRY_FROM_SERVER = 'GET_COUNTRY_FROM_SERVER';
const GET_TOP_FIVE = 'GET_TOP_FIVE';

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

export const getTopFive = topFive => ({
  type: GET_TOP_FIVE,
  topFive,
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
      const { data } = await axios.get('/api/aircraft');
      dispatch(getAircraftsFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCountry = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/:countryId');
      dispatch(getCountryFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const TopFive = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/countries/top5');
      dispatch(getTopFive(data));
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
      return { ...state, topFive: action.topFive };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);
