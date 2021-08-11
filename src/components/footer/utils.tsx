const FORBOLE_URL = 'https://www.forbole.com';
const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
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
      {
        key: 'blog',
        url: `${FORBOLE_URL}/blog`,
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
