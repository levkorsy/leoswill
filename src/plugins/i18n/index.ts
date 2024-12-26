import { createI18n } from 'vue-i18n';
import { AvailableLanguages } from './available-languages.enum';

import en from './translations/en.json';
import es from './translations/es.json';

const i18n = createI18n({
  locale: AvailableLanguages.EN,
  fallbackLocale: AvailableLanguages.ES,
  messages: {
    en,
    es,
  },
});

export default i18n;
