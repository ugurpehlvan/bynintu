import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  UPDATE_QUANTITY_ERROR,
  UNAUTH_UPDATE_QUANTITY,
  // ADD_QUANTITY,
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
  (product, qty = 1, warehouseId) =>
  async (dispatch) => {
    const response = (await axiosClient.post(apiURL.checkProductQuantity, { productId: product.id, amount: qty, warehouseId })).data;
    // get product
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
  const response = (await axiosClient.post(apiURL.createIteminCard, product, authHeader())).data;
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
export const updateQuantity = ({ product, type }) => async (dispatch) => {
  let isAuthenticated = localStorage.getItem('token');
  if (isAuthenticated) {
    const response = (await axiosClient.put(apiURL.createIteminCard + `/${product.id}`, { product, type } , authHeader())).data;

    if (!response.error) {
      dispatch({ type: UPDATE_QUANTITY, response: { cardList: response } });
    } else {
      dispatch({ type: UPDATE_QUANTITY_ERROR });
      alert("You can't update product quantity");
    }
  } else {
    dispatch({ type: UNAUTH_UPDATE_QUANTITY, response: { product, type } });
  }
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
