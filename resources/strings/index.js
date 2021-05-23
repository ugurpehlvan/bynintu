const translations = {
  en: require('resources/strings/translations/en.json'),
  tr: require('resources/strings/translations/tr.json'),
  ar: require('resources/strings/translations/ar.json'),
  nl: require('resources/strings/translations/nl.json'),
  de: require('resources/strings/translations/de.json'),
  fr: require('resources/strings/translations/fr.json'),
};

export const languageCode = { current: 'tr' };
export const en = 'en';
export const tr = 'tr';

export const setLanguageCode = (code) => (languageCode.current = code);

export const getString = (key) => translations[languageCode.current][key];

export const supportedLanguages = Object.keys(translations).map((languageCode) => languageCode.toLowerCase());

export default translations;
