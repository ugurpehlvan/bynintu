import { CHANGE_APP_LANGUAGE } from 'store/actions/action-types/action-names';

export const initialState = {
  appLanguage: 'en',
};

const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_APP_LANGUAGE:
      return { ...state, appLanguage: payload, languageSetted: true };
    default:
      return state;
  }
};

export default languageReducer;
