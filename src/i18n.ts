import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // load file từ public
  .use(LanguageDetector) // tự detect ngôn ngữ
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['vi', 'en'],
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
