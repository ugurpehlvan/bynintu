import { CHANGE_APP_LANGUAGE, GET_LANGUAGES } from './keys';

export const initialState = {
  languages: [],
  language: null,
  appLanguage: 'en',
};

const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_APP_LANGUAGE:
      return { ...state, language: payload, appLanguage: payload.code.toLowerCase(), languageSetted: true };
    case GET_LANGUAGES:
      return { ...state, languages: payload };
    default:
      return state;
  }
};

export default languageReducer;
