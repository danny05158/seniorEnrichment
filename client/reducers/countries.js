import axios from 'axios';

//ACTION TYPES
const GET_COUNTRIES_FROM_SERVER = 'GET_COUNTRIES_FROM_SERVER';
const GET_COUNTRY_FROM_SERVER = 'GET_COUNTRY_FROM_SERVER';

const CREATE_COUNTRY = 'CREATE_COUNTRY';
const DELETE_COUNTRY = 'DELETE_COUNTRY';

const UPDATE_COUNTRY = 'UPDATE_COUNTRY';

//ACTION CREATORS
export const getCountriesFromServer = countries => ({
  type: GET_COUNTRIES_FROM_SERVER,
  countries,
});

export const getCountryFromServer = country => ({
  type: GET_COUNTRY_FROM_SERVER,
  country,
});

export const createSingleCountry = country => ({
  type: CREATE_COUNTRY,
  country,
});

const deleteSingleCountry = country => ({
  type: DELETE_COUNTRY,
  country,
});

const updateSingleCountry = country => ({
  type: UPDATE_COUNTRY,
  country,
});

//THUNK CREATORS
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

export const deleteCountry = countryId => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/countries/${countryId}`);
      dispatch(deleteSingleCountry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const upDateCountry = (countryId, country) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(
        `/api/countries/updateCountry/${countryId}`,
        country
      );
      dispatch(updateSingleCountry(data));
      this.props.history.push('/countries');
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  countries: [],
  singleCountry: {},
};

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_FROM_SERVER:
      return { ...state, countries: action.countries };
    case GET_COUNTRY_FROM_SERVER:
      return { ...state, singleCountry: action.country };
    case CREATE_COUNTRY:
      return { ...state, countries: [...state, action.country] };
    case UPDATE_COUNTRY:
      let updatedCountryArr = state.countries.map(country => {
        return country.id === action.country.id ? action.country : country;
      });
      return { ...state, countries: updatedCountryArr };

    case DELETE_COUNTRY:
      let updateCountryArr = state.countries.filter(
        SingleCountry => SingleCountry.id !== action.country.id
      );
      return { ...state, countries: updateCountryArr };

    default:
      return state;
  }
}
