import { AUTH_SUCCESS, AUTH_ERROR, VALIDATE_ERROR, VALIDATE_SUCCESS } from './keys';

const initialState = {
  customer: null,
  isSignedIn: false,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        isSignedIn: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        customer: null,
      };
    case VALIDATE_SUCCESS:
      return {
        ...state,
      };
    case VALIDATE_ERROR:
      return {
        ...state,
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
