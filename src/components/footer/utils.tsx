const CUDOS_URL = 'https://www.cudos.org';
const BIG_DIPPER_URL = 'https://bigdipper.live';
const CUDO_VENTURES_URL = 'https://www.cudoventures.com'

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'cudos',
        url: CUDOS_URL,
      },
      {
        key: 'earn',
        url: `${CUDOS_URL}/earn`,
      },
      {
        key: 'blog',
        url: `${CUDOS_URL}/blog`,
      },
      {
        key: 'about',
        url: `${CUDOS_URL}/about`,
      },
    ],
  },
  {
    key: 'policies',
    links: [
      {
        key: 'privacyPolicy',
        url: `${CUDOS_URL}/privacy-policy`,
      },
      {
        key: 'cookiesPolicy',
        url: `${CUDO_VENTURES_URL}/cookie-policy/`,
      },
      {
        key: 'termsAndConditions',
        url: `${CUDOS_URL}/terms-and-conditions`,
      },
    ],
  },
];
