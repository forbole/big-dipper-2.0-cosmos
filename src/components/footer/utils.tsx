const LAVA_NET_URL = 'https://www.lavanet.xyz';
const BIG_DIPPER_URL = 'https://bigdipper.live';
const LAVA_NET_DOCS_URL = 'https://docs.lavanet.xyz/';
const LAVA_PRIVATE_TEST_NET_URL =
  'https://discord.com/channels/963778337904427018/1021420207740293151';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'Lava',
    links: [
      {
        key: 'About',
        url: LAVA_NET_URL,
      },
      {
        key: 'Docs',
        url: LAVA_NET_DOCS_URL,
      },
      {
        key: 'Private Testnet',
        url: LAVA_PRIVATE_TEST_NET_URL,
      },
    ],
  },
];
