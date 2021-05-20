import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_PHONE_CODES,
  FETCH_PHONE_CODES_ERROR,
} from 'store/actions/action-types/action-names';

const initialState = {
  countries: null,
  phoneCodes: null,
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
    case FETCH_PHONE_CODES:
      return {
        ...state,
        phoneCodes: action.payload,
      };
    case FETCH_PHONE_CODES_ERROR:
      return {
        ...state,
        error: action,
      };
    default:
      return state;
  }
};

export default countryReducer;
