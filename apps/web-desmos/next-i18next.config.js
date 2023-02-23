/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zht', 'zhs'],
  },
  localePath: resolve('./public/locales'),
};
