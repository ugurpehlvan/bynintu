import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_PHONE_CODES,
  FETCH_PHONE_CODES_ERROR,
  CREATE_ADDRESS,
  CREATE_ADDRESS_ERROR,
  SEARCH_ADDRESSES,
  SEARCH_ADDRESSES_ERROR,
} from 'store/actions/action-types/action-names';

const initialState = {
  countries: [],
  phoneCodes: [],
  addresses: [],
  address: null,
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
        countries: [],
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
    case CREATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case CREATE_ADDRESS_ERROR:
      return {
        ...state,
        address: null,
      };
    case SEARCH_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };
    case SEARCH_ADDRESSES_ERROR:
      return {
        ...state,
        addresses: null,
      };
    default:
      return state;
  }
};

export default countryReducer;
