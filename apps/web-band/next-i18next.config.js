/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  localeDetection: false,
  localePath: resolve('../../packages/ui/public/locales'),
};
