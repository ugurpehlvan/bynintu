import { FETCH_COUNTRIES, FETCH_COUNTRIES_ERROR } from 'store/actions/action-types/action-names';

const initialState = {
  countries: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        countries: action,
      };
    default:
      return state;
  }
};

export default countryReducer;
