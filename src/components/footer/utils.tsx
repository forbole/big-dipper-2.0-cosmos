const FORBOLE_URL = 'https://skynet.paullovette.com';
const BIG_DIPPER_URL = 'https://skynet.paullovette.com';

export const donateLink = {
  key: 'donate',
  url: `${FORBOLE_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'forbole',
        url: FORBOLE_URL,
      },
      {
        key: 'stakeNow',
        url: `${FORBOLE_URL}/stake-now`,
      },
      {
        key: 'contact',
        url: `${FORBOLE_URL}/contact`,
      },
    ],
  },
  {
    key: 'bigDipper',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
];
