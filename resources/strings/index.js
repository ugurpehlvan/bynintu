import english from 'resources/strings/translations/en.json';
import turkish from 'resources/strings/translations/tr.json';
import arabish from 'resources/strings/translations/ar.json';

const translations = {
  en: english,
  tr: turkish,
  ar: arabish,
};

export const languageCode = { current: 'tr' };
export const en = 'en';
export const tr = 'tr';

export const setLanguageCode = (code) => (languageCode.current = code);

export const getString = (key) => translations[languageCode.current][key];

export const supportedLanguages = Object.keys(translations).map((languageCode) => languageCode.toLowerCase());

export default translations;
