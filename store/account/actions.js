import { apiURL, axiosClient } from '../../service';
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
} from './keys';

export const searchAddress = () => async (dispatch) => {
  const response = (
    await axiosClient.post(
      apiURL.searchAddress,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  ).data;

  if (!response.error) {
    dispatch({ type: SEARCH_ADDRESSES, payload: response.data });
  } else {
    dispatch({ type: SEARCH_ADDRESSES_ERROR, payload: response?.error });
  }
};

export const deleteAddress = (id, callback) => async (dispatch) => {
  const response = (
    await axiosClient.delete(`${apiURL.address}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  if (!response.error) {
    callback(response);
  } else {
    callback(response);
  }
};

export const getAddress = (id) => async (dispatch) => {
  const response = (
    await axiosClient.get(`${apiURL.address}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  if (!response.error) {
    dispatch({ type: CREATE_ADDRESS, payload: response });
  } else {
    dispatch({ type: CREATE_ADDRESS_ERROR, payload: response?.error });
  }
};

export const fetchCountries = (payload) => async (dispatch) => {
  const response = (
    await axiosClient.post(apiURL.countries, payload, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  if (!response.error) {
    dispatch({ type: FETCH_COUNTRIES, payload: response.data });
  } else {
    dispatch({ type: FETCH_COUNTRIES_ERROR, payload: response?.error });
  }
};

export const createAddress = (payload, callback) => async (dispatch) => {
  const response = (
    await axiosClient.post(apiURL.createAddress, payload, {
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

export const getPhoneCodes = () => async (dispatch) => {
  const response = (
    await axiosClient.post(
      apiURL.getPhoneCodes,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  ).data;

  if (!response.error) {
    dispatch({ type: FETCH_PHONE_CODES, payload: response });
  } else {
    dispatch({ type: FETCH_PHONE_CODES_ERROR, payload: response?.error });
  }
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
