import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_QUANTITY_WITH_NUMBER,
  RESET_CART,
  ADD_TO_COMPARE,
  REMOVE_ITEM_FROM_COMPARE,
  CREATE_DEFAULT_CART,
} from './action-types/action-names';

import { apiURL, axiosClient } from 'service';
import authHeader from 'utils/authHeader';

//add cart action
export const addToCart = (id) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.checkProductQuantity, { productId: id, amount: 1 })).data;

  if (!response.error) {
    dispatch({ type: ADD_TO_CART, id });
  } else {
    dispatch({ type: ADD_TO_CART_ERROR });
  }
};

export const viewCartPage = (id) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.cardPage, {})).data;

  // if (!response.error) {
  //   dispatch({ type: ADD_TO_CART, id });
  // } else {
  //   dispatch({ type: ADD_TO_CART_ERROR });
  // }
};

export const addLocalCartToDataBase = (cart) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.createCardForLogin, cart)).data;
  console.log('response32', response);
  // if (!response.error) {
  //   dispatch({ type: ADD_TO_CART, id });
  // } else {
  //   dispatch({ type: ADD_TO_CART_ERROR });
  // }
};

export const addCartToDatabase = (product) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.createIteminCart, product)).data;
  console.log('response123', response);
  // if (!response.error) {
  //   dispatch({ type: ADD_TO_CART, id });
  // } else {
  //   dispatch({ type: ADD_TO_CART_ERROR });
  // }
};

export const createDefaultCart = (cart) => {
  return {
    type: CREATE_DEFAULT_CART,
    payload: cart,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
  return {
    type: ADD_QUANTITY_WITH_NUMBER,
    id,
    qty,
  };
};

// Reset cart after form submit
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

//add compare action
export const addToCompare = (id) => {
  return {
    type: ADD_TO_COMPARE,
    id,
  };
};
//remove item from compare action
export const removeItemFromCompare = (id) => {
  return {
    type: REMOVE_ITEM_FROM_COMPARE,
    id,
  };
};
