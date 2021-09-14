module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/blocks': ['blocks', 'transactions'],
    'rgx:^/transactions': ['transactions', 'message_labels', 'message_contents'],
    'rgx:^/proposals': ['proposals'],
    'rgx:^/validators': ['validators', 'transactions', 'accounts'],
    'rgx:^/accounts': ['accounts', 'transactions', 'validators'],
    'rgx:^/params': ['params'],
    'rgx:^/iscns': ['iscns'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
