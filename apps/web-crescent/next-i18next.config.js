/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zht', 'zhs', 'it', 'pl'],
  },
  localeDetection: false,
  localePath: resolve('../../packages/ui/public/locales'),
};
