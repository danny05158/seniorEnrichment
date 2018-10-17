import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';
// https://github.com/gaearon/redux-thunk
import axios from 'axios';

//action types
const GET_COUNTRIES_FROM_SERVER = 'GET_COUNTRIES_FROM_SERVER';
const GET_AIRCRAFTS_FROM_SERVER = 'GET_AIRCRAFTS_FROM_SERVER';

//action creators
export const getCountriesFromServer = countries => ({
  type: GET_COUNTRIES_FROM_SERVER,
  countries,
});

export const getAircraftsFromServer = aircrafts => ({
  type: GET_AIRCRAFTS_FROM_SERVER,
  aircrafts,
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

const initialState = {
  countries: [],
  aircrafts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_FROM_SERVER:
      return { ...state, countries: action.countries };
    case GET_AIRCRAFTS_FROM_SERVER:
      return { ...state, aircrafts: action.aircrafts };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);
