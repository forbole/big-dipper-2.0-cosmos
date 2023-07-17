import chainConfig from '@/chainConfig';

const { basePath } = chainConfig();

const siteUrl = process.env.SITE_URL || `https://bigdipper.live${basePath}`;

export const walletConnectRelayURL =
  process?.env.NEXT_PUBLIC_WALLET_CONNECT_RELAY_URL ?? 'wss://relay.walletconnect.com';
export const walletConnectProjectID =
  process?.env?.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '479ef4c34890ad2226193483069863c4';
export const bigDipperURL = siteUrl ?? 'https://github.com/forbole/big-dipper-2.0-cosmos';
export const bigDipperIcon =
  'https://github.com/forbole/big-dipper-2.0-cosmos/blob/main/apps/web/public/icons/favicon-32x32.png?raw=true';
