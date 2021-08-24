import { apiURL, axiosClient } from '../../service';
import authHeader from 'utils/authHeader';

import { AUTH_SUCCESS, AUTH_ERROR, VALIDATE_ERROR, VALIDATE_SUCCESS } from './keys';

export const signIn = (formValues, router) => async (dispatch, getState) => {
  const response = (await axiosClient.post(apiURL.signIn, formValues)).data;
  if (response.user) {
    dispatch({ type: AUTH_SUCCESS, payload: response.user });
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

export const signUp = (formValues, router, notify) => async (dispatch) => {
  const response = (await axiosClient.post(apiURL.signUp, formValues)).data;

  if (response.user) {
    dispatch({ type: AUTH_SUCCESS, payload: response.user });
    localStorage.setItem('token', response.token);
    router('/login');
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
  const response = (await axiosClient.get(apiURL.customer, authHeader())).data;

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
  const response = (await axiosClient.put(apiURL.updatePassword, formValues, authHeader())).data;

  // if (response.success) {
  //     dispatch({ type: AUTH_SUCCESS, payload: response });

  // } else {
  //     dispatch({ type: AUTH_ERROR, payload: response?.error });
  // }
};

export const updateCustomerProfile = (payload) => async (dispatch) => {
  const response = (await axiosClient.put(apiURL.customer, payload, authHeader())).data;

  if (!response.error) {
    dispatch({ type: AUTH_SUCCESS, payload: response });
  } else {
    dispatch({ type: AUTH_SUCCESS_ERROR, payload: response?.error });
  }
};
