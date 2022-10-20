/* eslint-disable */

module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
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
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
