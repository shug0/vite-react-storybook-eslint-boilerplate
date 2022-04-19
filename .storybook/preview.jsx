import * as jest from 'jest-mock';
import i18next from '../src/config/i18next';

import '../src/assets/index.css';

window.jest = jest;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'fr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Francais' },
      ],
    },
  },
};

export const decorators = [
  function (Story, { globals: { locale } }) {
    i18next.changeLanguage(locale);
    return <Story />;
  },
];
