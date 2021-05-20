import { FETCH_CUSTOMER, FETCH_CUSTOMER_ERROR } from 'store/actions/action-types/action-names';

const initialState = {
  customer: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    case FETCH_CUSTOMER_ERROR:
      return {
        ...state,
        countries: null,
      };
    default:
      return state;
  }
};

export default customerReducer;
