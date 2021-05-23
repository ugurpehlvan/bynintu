import { apiURL, axiosClient } from '../../service';
import authHeader from 'utils/authHeader';
import { supportedLanguages } from 'resources/strings';

import { CHANGE_APP_LANGUAGE, GET_LANGUAGES } from './keys';

export const changeAppLanguage = (language) => async (dispatch, getState) => {
  const lang = JSON.parse(language);
  const { auth: customer } = getState();

  const userId = customer.customer.id;

  if (supportedLanguages.indexOf(lang.code.toLowerCase()) >= 0) {
    const response = (await axiosClient.put(apiURL.updateLanguage, { id: userId, languageId: lang.id }, authHeader())).data;
    console.log('updateLang', response);

    dispatch({ type: CHANGE_APP_LANGUAGE, payload: lang });
    localStorage.setItem('appLanguage', lang.code.toLowerCase());
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
