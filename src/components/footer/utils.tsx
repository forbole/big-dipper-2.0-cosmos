const CUDOS_URL = 'https://www.cudos.org';
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
