import axios from 'axios';

//ACTION TYPES

const GET_AIRCRAFTS_FROM_SERVER = 'GET_AIRCRAFTS_FROM_SERVER';
const GET_SINGLE_AIRCRAFT = 'GET_SINGLE_AIRCRAFT';
const CREATE_AIRCRAFT = 'CREATE_AIRCRAFT';
const DELETE_AIRCRAFT = 'DELETE_AIRCRAFT';
const UPDATE_AIRCRAFT = 'UPDATE_AIRCRAFT';

//ACTION CREATORS

export const getAircraftsFromServer = aircrafts => ({
  type: GET_AIRCRAFTS_FROM_SERVER,
  aircrafts,
});

export const getSingleAircraftFromServer = aircraft => ({
  type: GET_SINGLE_AIRCRAFT,
  aircraft,
});

const createSingleAircraft = aircraft => ({
  type: CREATE_AIRCRAFT,
  aircraft,
});

const deleteSingleAircraft = aircraft => ({
  type: DELETE_AIRCRAFT,
  aircraft,
});

const updateSingleAircraft = aircraft => ({
  type: UPDATE_AIRCRAFT,
  aircraft,
});

//THUNK CREATORS

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

export const upDateAircraft = (aircraftId, aircraft) => {
  return async dispatch => {
    try {
      console.log('In the thunk', aircraft);
      const { data } = await axios.put(
        `/api/aircrafts/updateAircraft/${aircraftId}`,
        aircraft
      );
      dispatch(updateSingleAircraft(data));
      this.props.history.push('/aircrafts');
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  aircrafts: [],
  singleAircraft: {},
};

//REDUCER

export default function reducer (state = initialState, action) {
  switch(action.type){
    case GET_AIRCRAFTS_FROM_SERVER:
      return { ...state, aircrafts: action.aircrafts };
    case GET_SINGLE_AIRCRAFT:
      return { ...state, singleAircraft: action.aircraft };
    case CREATE_AIRCRAFT:
      return { ...state, aircrafts: [...state.aircrafts, action.aircraft] };
    case UPDATE_AIRCRAFT:
      let updatedAircraftArr = state.aircrafts.map(aircraft =>{
        return aircraft.id === action.aircraft.id
        ? action.aircraft : aircraft
      })
        return {...state, aircrafts: updatedAircraftArr}
    case DELETE_AIRCRAFT:
        let updateAirArr = state.aircrafts.filter(SingleAircraft =>
          SingleAircraft.id !== action.aircraft.id)
        return {...state, aircrafts: updateAirArr}
    case DELETE_COUNTRY:
        let updateCountryArr = state.countries.filter(SingleCountry =>
          SingleCountry.id !== action.country.id)
        return {...state, countries: updateCountryArr}
    default:
    return state;
  }
}
