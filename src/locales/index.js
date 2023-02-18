import {I18n} from 'i18n-js';

import en from './en';
import vi from './vi';

I18n.locale = 'vi';
I18n.translations = {
  default: en,
  'en-US': en,
  en,
  vi,
  'vi-VN': vi,
};

I18n.fallbacks = true;

export default I18n;
