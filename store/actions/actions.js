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
    AUTH_ERROR
} from './action-types/action-names'

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

//add compare action
export const addToCompare = (id) => {
    return {
        type: ADD_TO_COMPARE,
        id
    }
}
//remove item from compare action
export const removeItemFromCompare = (id) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        id
    }
}

//sign in action
export const signIn = (formValues) => async (dispatch, getState) => {
    const response = (await axiosClient.post(apiURL.signIn, formValues)).data;
    if (response.success) {
        dispatch({ type: AUTH_SUCCESS, payload: response });

    } else {
        dispatch({ type: AUTH_ERROR, payload: response?.error });
    }
};

export const signUp = (formValues) => async (dispatch) => {
    console.log('signiuop');
    const response = (await axiosClient.post(apiURL.signUp, formValues)).data;
    console.log('response', response);
    if (response.success) {
        dispatch({ type: AUTH_SUCCESS, payload: response });

    } else {
        dispatch({ type: AUTH_ERROR, payload: response?.error });
    }
};

export const forgetPassword = (formValues) => async (dispatch) => {
    const response = (await axiosClient.post(apiURL.forgetPassword, formValues)).data;
    console.log('response', response);
    // if (response.success) {
    //     dispatch({ type: AUTH_SUCCESS, payload: response });

    // } else {
    //     dispatch({ type: AUTH_ERROR, payload: response?.error });
    // }
};
