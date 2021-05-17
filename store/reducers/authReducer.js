import { AUTH_SUCCESS, AUTH_ERROR, VALIDATE_ERROR, VALIDATE_SUCCESS } from 'store/actions/action-types/action-names';

const initialState = {
  user: null,
  isSignedIn: false,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
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
