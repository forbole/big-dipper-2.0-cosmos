/* eslint-disable no-template-curly-in-string */
const workaround = require('next-translate/lib/cjs/plugin/utils.js');

// fix: Critical dependency: the request of a dependency is an expression
workaround.defaultLoader =
  '(l, n) => import(`@/public/locales/${l}/${n}.json`).then(m => m.default)';

module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/blocks': ['blocks'],
    'rgx:^/miniblocks': ['blocks', 'transactions'],
    'rgx:^/transactions': ['transactions', 'blocks'],
    'rgx:^/validators': ['validators', 'nodes', 'transactions'],
    'rgx:^/nodes': ['nodes', 'blocks'],
    'rgx:^/accounts': ['accounts', 'transactions'],
    'rgx:^/tokens': ['tokens', 'transactions'],
    'rgx:^/nfts': ['nfts', 'transactions'],
  },
};
