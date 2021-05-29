import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

//reducers
import otherReducer from 'store/reducers/otherReducer';
import authReducer from 'store/auth/reducer';
import accountReducer from 'store/account/reducer';
import languageReducer from 'store/language/reducer';
import searchedProductReducer from 'store/product/reducer';
import categoryReducer from 'store/category/reducer';

let store;

const initStore = (preloadedState) => {
  return createStore(
    combineReducers({
      auth: authReducer,
      other: otherReducer,
      language: languageReducer,
      account: accountReducer,
      searchedProducts: searchedProductReducer,
      category: categoryReducer,
    }),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
