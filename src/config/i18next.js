import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import localeEN from '../locales/en.json';
import localeFR from '../locales/fr.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    resources: {
      en: {
        translation: localeEN,
      },
      fr: {
        translation: localeFR,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

export const getCurrentLang = () => i18next.languages[0];
