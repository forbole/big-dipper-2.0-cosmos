module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
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
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
