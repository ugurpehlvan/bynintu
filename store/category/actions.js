import { apiURL, axiosClient } from 'service';

import { GET_CATEGORY_TREE_SUCCESS } from './keys';

export const getCategoryTree = () => async (dispatch) => {
  const response = (await axiosClient.get(apiURL.getCategoryTree)).data;

  if (!response.error) {
    dispatch({ type: GET_CATEGORY_TREE_SUCCESS, payload: response.categories });
  }
};
