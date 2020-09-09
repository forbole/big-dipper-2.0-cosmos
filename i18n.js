module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/blocks': ['blocks', 'transactions'],
    'rgx:^/transactions': ['transactions'],
    'rgx:^/tokens': ['tokens', 'transactions'],
    'rgx:^/validators': ['validators', 'transactions'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
