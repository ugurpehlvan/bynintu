import { apiURL, axiosClient } from '../../service';
import { SEARCH_ADDRESSES, SEARCH_ADDRESSES_ERROR, CREATE_ADDRESS, CREATE_ADDRESS_ERROR } from './keys';

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

  console.log('getAddress', response);

  if (!response.error) {
    dispatch({ type: CREATE_ADDRESS, payload: response.data });
  } else {
    dispatch({ type: CREATE_ADDRESS_ERROR, payload: response?.error });
  }
};
