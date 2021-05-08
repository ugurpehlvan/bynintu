import {
  AUTH_SUCCESS
} from 'store/actions/action-types/action-names'

export const initialState = {
  user: null,
  isSignedIn: null,
  userId: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default authReducer;
