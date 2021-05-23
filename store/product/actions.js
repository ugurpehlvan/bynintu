import { apiURL, axiosClient } from 'service';
import authHeader from 'utils/authHeader';

import { GET_PRODUCTS, PRODUCT_ERROR } from './keys';

export const getProducts = (filter) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.searchProduct, {}, authHeader())).data;

  if (!response.error) {
    dispatch({ type: GET_PRODUCTS, payload: response });
  } else {
    dispatch({ type: PRODUCT_ERROR, payload: response.error });
  }
};
