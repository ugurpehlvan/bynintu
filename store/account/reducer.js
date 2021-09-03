import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_PHONE_CODES,
  FETCH_PHONE_CODES_ERROR,
  CREATE_ADDRESS,
  CREATE_ADDRESS_ERROR,
  SEARCH_ADDRESSES,
  SEARCH_ADDRESSES_ERROR,
  RESET_ADDRESS,
  SEARCH_IP_TO_COUNTRY,
  SEARCH_IP_TO_COUNTRY_ERROR,
  FETCH_CARGO_PRICE,
  FETCH_CARGO_PRICE_ERROR,
  UPDATE_IP_TO_COUNTRY
} from './keys';

const initialState = {
  countries: [],
  phoneCodes: [],
  addresses: [],
  address: null,
  ipToCountry: null,
  cargoPrice: null
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
    case SEARCH_IP_TO_COUNTRY:
      return {
        ...state,
        ipToCountry: action.payload,
    };
    case SEARCH_IP_TO_COUNTRY_ERROR:
      return {
        ...state,
        ipToCountry: null,
      };
    case FETCH_CARGO_PRICE:
      return {
        ...state,
        cargoPrice: action.payload,
    };
    case   FETCH_CARGO_PRICE_ERROR:
      return {
        ...state,
        cargoPrice: null,
      };
    case  UPDATE_IP_TO_COUNTRY:
      const selectedCountryID = Number(action?.payload);
      const selectedCountry = state?.ipToCountry?.countries.find(el => el.id === selectedCountryID);

      return {
        ...state,
        ipToCountry: {
          ...state.ipToCountry,
          defaultCountry: selectedCountry
        },
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
    case RESET_ADDRESS:
      return {
        ...state,
        address: null,
      };
    default:
      return state;
  }
};

export default countryReducer;
