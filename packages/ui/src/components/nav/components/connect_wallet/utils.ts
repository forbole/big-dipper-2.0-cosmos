export const CHAIN_REGISTRY_URL =
  'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main';
export const wcBridgeURL = 'https://bridge.walletconnect.org';
export const keplrURL = "https://lcd-cosmoshub.keplr.app/rest'";
export const keplrChainID = process?.env?.NEXT_PUBLIC_KEPLR_CHAIN_ID ?? '';
// export const keplrURL = process?.env?.NEXT_PUBLIC_KEPLR_LCD_URL ?? '';
// export const wcBridgeURL = process?.env?.NEXT_PUBLIC_WC_BRIDGE_URL ?? '';
export const keplrCustomChainInfo = process?.env?.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO
  ? JSON.parse(process.env.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO)
  : undefined;
