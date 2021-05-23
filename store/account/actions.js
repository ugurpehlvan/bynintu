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
    dispatch({ type: CREATE_ADDRESS, payload: response.data });
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
