import axios from 'axios';

const GET_TOP_FIVE = 'GET_TOP_FIVE';

export const getTopFive = topFiveCountries => ({
  type: GET_TOP_FIVE,
  topFiveCountries,
});

export const topFive = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/countries/top5');
      dispatch(getTopFive(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_TOP_FIVE:
      return { ...state, topFive: action.topFiveCountries };

    default:
      return state;
  }
}
