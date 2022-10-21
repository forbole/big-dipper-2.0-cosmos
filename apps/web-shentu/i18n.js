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
    'rgx:^/@*': ['profiles', 'accounts'],
    'rgx:^/blocks': ['blocks', 'transactions', 'message_labels', 'message_contents'],
    'rgx:^/transactions': ['transactions', 'message_labels', 'message_contents'],
    'rgx:^/proposals': ['proposals'],
    'rgx:^/validators': ['validators', 'transactions', 'accounts', 'message_labels', 'message_contents'],
    'rgx:^/accounts': ['accounts', 'transactions', 'validators', 'message_labels', 'message_contents'],
    'rgx:^/params': ['params'],
  },
};
