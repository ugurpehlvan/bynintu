import {
  AUTH_SUCCESS
} from 'store/actions/action-types/action-names'

const INTIAL_STATE = {
  user: null,
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
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
