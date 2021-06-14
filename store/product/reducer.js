import { GET_PRODUCTS, PRODUCT_ERROR, SEARCH_PRODUCTS, SEARCH_PRODUCTS_ERROR } from './keys';

export const initialState = {
  errorMessage: '',
  searchedProductsTotalCount: null,
  searchedProducts: [],
};

const searchedProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, searchedProducts: payload.data, searchedProductsTotalCount: payload.count };
    case SEARCH_PRODUCTS:
      return { ...state, searchedProducts: payload.data, searchedProductsTotalCount: payload.count };
    case PRODUCT_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

export default searchedProductReducer;
