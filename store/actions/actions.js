import { apiURL, axiosClient } from '../../service';
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_QUANTITY_WITH_NUMBER,
  RESET_CART,
  ADD_TO_COMPARE,
  REMOVE_ITEM_FROM_COMPARE,
  AUTH_SUCCESS,
  AUTH_ERROR,
  VALIDATE_ERROR,
  VALIDATE_SUCCESS,
  CHANGE_APP_LANGUAGE,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  GET_LANGUAGES,
  FETCH_PHONE_CODES,
  FETCH_PHONE_CODES_ERROR,
  FETCH_CUSTOMER,
  FETCH_CUSTOMER_ERROR,
} from './action-types/action-names';

import { supportedLanguages } from 'resources/strings';

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
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

//sign in action
export const signIn = (formValues, router) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.signIn, formValues)).data;
  if (response.success) {
    dispatch({ type: AUTH_SUCCESS, payload: response });
    localStorage.setItem('token', response.token);
    router('/');
  } else {
    dispatch({ type: AUTH_ERROR, payload: response?.error });
  }
};

export const validateAccount = (token, route) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.validateAccount, token)).data;
  if (response?.result === 'OK') {
    dispatch({ type: VALIDATE_SUCCESS, payload: response });
  } else {
    dispatch({ type: VALIDATE_ERROR, payload: response?.error });
    route('/signup');
  }
};

export const signUp = (formValues, notify) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.signUp, formValues)).data;

  if (response.id) {
    dispatch({ type: AUTH_SUCCESS, payload: response });
    localStorage.setItem('token', response.token);
    notify(true);
  } else {
    dispatch({ type: AUTH_ERROR, payload: response?.error });
    notify(false);
  }
};

export const forgetPassword = (formValues) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.forgetPassword, formValues)).data;

  // if (response.success) {
  //     dispatch({ type: AUTH_SUCCESS, payload: response });

  // } else {
  //     dispatch({ type: AUTH_ERROR, payload: response?.error });
  // }
};

export const getCustomer = () => async (dispatch) => {
  const response = (
    await axiosClient.get(apiURL.customer, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  if (!response.error) {
    dispatch({ type: AUTH_SUCCESS, payload: response });
  } else {
    dispatch({ type: AUTH_ERROR, payload: response?.error });
  }
};

export const resetPassword = (formValues) => async (dispatch) => {
  const response = (await axiosClient.put(apiURL.resetPassword, formValues)).data;

  // if (response.success) {
  //     dispatch({ type: AUTH_SUCCESS, payload: response });

  // } else {
  //     dispatch({ type: AUTH_ERROR, payload: response?.error });
  // }
};

export const updatePassword = (formValues) => async (dispatch) => {
  const response = (
    await axiosClient.put(apiURL.updatePassword, formValues, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  // if (response.success) {
  //     dispatch({ type: AUTH_SUCCESS, payload: response });

  // } else {
  //     dispatch({ type: AUTH_ERROR, payload: response?.error });
  // }
};

export const changeAppLanguage = (language) => (dispatch) => {
  if (supportedLanguages.indexOf(language.toLowerCase()) >= 0) {
    dispatch({ type: CHANGE_APP_LANGUAGE, payload: language });
    localStorage.setItem('appLanguage', language);
    localStorage.setItem('languageSetted', true);
  }
};

export const fetchCounries = () => async (dispatch) => {
  const response = (
    await axiosClient.post(
      apiURL.countries,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  ).data;
  console.log('response', response);
  if (response.success) {
    dispatch({ type: FETCH_COUNTRIES, payload: response });
  } else {
    dispatch({ type: FETCH_COUNTRIES_ERROR, payload: response?.error });
  }
};

export const createAddress = () => async (dispatch) => {
  const response = (
    await axiosClient.post(
      apiURL.createAddress,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  ).data;
  console.log('response', response);
  // if (response.success) {
  //   dispatch({ type: FETCH_COUNTRIES, payload: response });
  // } else {
  //   dispatch({ type: FETCH_COUNTRIES_ERROR, payload: response?.error });
  // }
};

export const getLanguages = () => async (dispatch) => {
  const response = (await axiosClient.get(apiURL.language, {})).data;

  console.log('response', response);
  if (!response.error) {
    dispatch({ type: GET_LANGUAGES, payload: response });
  } else {
    //dispatch({ type: AUTH_ERROR, payload: response?.error });
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

export const updateCustomerProfile = (payload) => async (dispatch) => {
  const response = (
    await axiosClient.put(apiURL.customer, payload, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
  ).data;

  if (!response.error) {
    dispatch({ type: FETCH_CUSTOMER, payload: response });
  } else {
    dispatch({ type: FETCH_CUSTOMER_ERROR, payload: response?.error });
  }
};
