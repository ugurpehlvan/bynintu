import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  GET_CARD_LIST,
  ADD_QUANTITY_WITH_NUMBER,
  RESET_CART,
  ADD_TO_COMPARE,
  REMOVE_ITEM_FROM_COMPARE,
  CREATE_DEFAULT_CART,
} from './action-types/action-names';

import { apiURL, axiosClient } from 'service';
import authHeader from 'utils/authHeader';

//add card action
export const addToCard =
  (product, qty = 1) =>
  async (dispatch) => {
    const response = (await axiosClient.post(apiURL.checkProductQuantity, { productId: product.id, amount: qty })).data;

    if (!response.error) {
      dispatch({ type: ADD_TO_CART, product, qty });
    } else {
      dispatch({ type: ADD_TO_CART_ERROR });
    }
  };

export const viewCardPage = () => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.cardPage, {}, authHeader())).data;

  if (!response.error) {
    dispatch({ type: GET_CARD_LIST, payload: response });
  } else {
    dispatch({ type: GET_CARD_LIST });
  }
};

export const addLocalCardToDataBase = (card) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.createCardForLogin, card)).data;
  console.log('response32', response);
  // if (!response.error) {
  //   dispatch({ type: ADD_TO_CART, id });
  // } else {
  //   dispatch({ type: ADD_TO_CART_ERROR });
  // }
};

export const addCardToDatabase = (product) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.createIteminCard, product)).data;
  console.log('response123', response);
  // if (!response.error) {
  //   dispatch({ type: ADD_TO_CART, id });
  // } else {
  //   dispatch({ type: ADD_TO_CART_ERROR });
  // }
};

export const createDefaultCard = (card) => {
  return {
    type: CREATE_DEFAULT_CART,
    payload: card,
  };
};
//remove item action
export const removeItem = (product) => {
  return {
    type: REMOVE_ITEM,
    product,
  };
};
//subtract qt action
export const subtractQuantity = (product) => {
  return {
    type: SUB_QUANTITY,
    product,
  };
};
//add qt action
export const addQuantity = (product) => {
  return {
    type: ADD_QUANTITY,
    product,
  };
};

// Reset card after form submit
export const resetCard = () => {
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
