import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const availableLanguages = ['en', 'sv', 'pt'];

// Pass the i18n instance to react-i18next
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'sv',
  detection: {
    checkWhitelist: true
  },
  debug: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
});

export default i18n;