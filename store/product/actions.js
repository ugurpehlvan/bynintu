import { apiURL, axiosClient } from 'service';
import authHeader from 'utils/authHeader';

import { GET_PRODUCTS, PRODUCT_ERROR, SEARCH_PRODUCTS, SEARCH_PRODUCTS_ERROR } from './keys';

export const getProducts = (filter) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.searchProduct, {}, authHeader())).data;

  if (!response.error) {
    dispatch({ type: GET_PRODUCTS, payload: response });
  } else {
    dispatch({ type: PRODUCT_ERROR, payload: response.error });
  }
};

export const makeSearch = (filter, goToFilterPage) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.makeSearch, filter)).data;
  console.log('response', response);

  if (!response.error) {
    dispatch({ type: SEARCH_PRODUCTS, payload: response });
    goToFilterPage();
  } else {
    dispatch({ type: SEARCH_PRODUCTS_ERROR, payload: response.error });
  }
};
