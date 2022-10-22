/* eslint-disable no-template-curly-in-string */
const workaround = require('next-translate/lib/cjs/plugin/utils.js');

// fix: Critical dependency: the request of a dependency is an expression
workaround.defaultLoader =
  '(l, n) => import(`@public/locales/${l}/${n}.json`).then(m => m.default)';

module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/blocks': ['blocks', 'transactions'],
    'rgx:^/transactions': ['transactions', 'instructions'],
    'rgx:^/tokens': ['tokens', 'transactions'],
    'rgx:^/epoch': ['epoch'],
    'rgx:^/validators': ['validators', 'transactions', 'accounts'],
    'rgx:^/accounts': ['accounts', 'transactions', 'validators'],
    'rgx:^/params': ['params'],
  },
};
