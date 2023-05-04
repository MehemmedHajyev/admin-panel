import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: ['en' , 'az'],
  lng: 'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    az: {
      translations: require('./locales/az/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'az'];

export default i18n;