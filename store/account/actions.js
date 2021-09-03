import { apiURL, axiosClient } from '../../service';
import authHeader from 'utils/authHeader';
import {
  FETCH_PHONE_CODES,
  FETCH_PHONE_CODES_ERROR,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  SEARCH_ADDRESSES,
  SEARCH_ADDRESSES_ERROR,
  CREATE_ADDRESS,
  CREATE_ADDRESS_ERROR,
  RESET_ADDRESS,
  SEARCH_IP_TO_COUNTRY,
  SEARCH_IP_TO_COUNTRY_ERROR,
  FETCH_CARGO_PRICE,
  FETCH_CARGO_PRICE_ERROR,
  UPDATE_IP_TO_COUNTRY
} from './keys';

export const searchAddress = () => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.searchAddress, {}, authHeader())).data;

  if (!response.error) {
    dispatch({ type: SEARCH_ADDRESSES, payload: response.data });
  } else {
    dispatch({ type: SEARCH_ADDRESSES_ERROR, payload: response?.error });
  }
};

export const deleteAddress = (id, callback) => async (dispatch) => {
  const response = (await axiosClient.delete(`${apiURL.address}/${id}`, authHeader())).data;

  if (!response.error) {
    callback(response);
  } else {
    callback(response);
  }
};

export const getAddress = (id) => async (dispatch) => {
  const response = (await axiosClient.get(`${apiURL.address}/${id}`, authHeader())).data;

  if (!response.error) {
    dispatch({ type: CREATE_ADDRESS, payload: response });
  } else {
    dispatch({ type: CREATE_ADDRESS_ERROR, payload: response?.error });
  }
};

export const fetchCountries = (payload) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.countries, payload, authHeader())).data;

  if (!response.error) {
    dispatch({ type: FETCH_COUNTRIES, payload: response.data });
  } else {
    dispatch({ type: FETCH_COUNTRIES_ERROR, payload: response?.error });
  }
};

export const createAddress = (payload, callback) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.createAddress, payload, authHeader())).data;

  if (!response.error) {
    dispatch({ type: CREATE_ADDRESS, payload: response });
    callback(response);
  } else {
    dispatch({ type: CREATE_ADDRESS_ERROR, payload: response?.error });
    callback(response);
  }
};

export const getPhoneCodes = () => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.getPhoneCodes, {}, authHeader())).data;

  if (!response.error) {
    dispatch({ type: FETCH_PHONE_CODES, payload: response });
  } else {
    dispatch({ type: FETCH_PHONE_CODES_ERROR, payload: response?.error });
  }
};

export const searchIpToCountry = () => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.ipToCountry, {})).data;

  if (!response.error) {
    dispatch({ type: SEARCH_IP_TO_COUNTRY, payload: response });
  } else {
    dispatch({ type: SEARCH_IP_TO_COUNTRY_ERROR, payload: response?.error });
  }
};

export const getCargoPrice = (payload) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.getCargoPrice, payload)).data;

  if (!response.error) {
    dispatch({ type: FETCH_CARGO_PRICE, payload: response });
  } else {
    dispatch({ type: FETCH_CARGO_PRICE_ERROR, payload: response?.error });
  }
};

export const changeAppCountry = (payload) => async (dispatch) => {
  dispatch({ type: UPDATE_IP_TO_COUNTRY, payload });
};

export const resetAddressState = () => async (dispatch) => {
  dispatch({ type: RESET_ADDRESS });
};

export const updateAddress =
  ({ id, payload, callback }) =>
  async (dispatch) => {
    const response = (
      await axiosClient.put(`${apiURL.address}/${id}`, payload, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
    ).data;

    if (!response.error) {
      dispatch({ type: CREATE_ADDRESS, payload: response });
      callback(response);
    } else {
      dispatch({ type: CREATE_ADDRESS_ERROR, payload: response?.error });
      callback(response);
    }
  };
