import { CHANGE_APP_LANGUAGE, GET_LANGUAGES } from './keys';

import { supportedLanguages } from 'resources/strings';

export const changeAppLanguage = (language) => (dispatch) => {
  if (supportedLanguages.indexOf(language.toLowerCase()) >= 0) {
    dispatch({ type: CHANGE_APP_LANGUAGE, payload: language });
    localStorage.setItem('appLanguage', language);
    localStorage.setItem('languageSetted', true);
  }
};

export const getLanguages = () => async (dispatch) => {
  const response = (await axiosClient.get(apiURL.language, {})).data;

  if (!response.error) {
    dispatch({ type: GET_LANGUAGES, payload: response });
  } else {
    //dispatch({ type: AUTH_ERROR, payload: response?.error });
  }
};
