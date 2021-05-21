import { apiURL, axiosClient } from '../../service';
import { SEARCH_ADDRESSES, SEARCH_ADDRESSES_ERROR } from './action-types/action-names';

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
    await axiosClient.delete(`${apiURL.deleteAddress}/${id}`, {
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
