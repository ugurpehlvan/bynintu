import { apiURL, axiosClient } from '../../service';
import { SEARCH_ADDRESSES, SEARCH_ADDRESSES_ERROR } from './action-types/action-names';

export const searchAddress = () => async (dispatch) => {
  const response = (
    await axiosClient.post(
      apiURL.searchCountries,
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
