export const keplrChainID = process?.env?.NEXT_PUBLIC_KEPLR_CHAIN_ID ?? '';
export const wcBridgeURL = process?.env?.NEXT_PUBLIC_WC_BRIDGE_URL ?? '';
export const keplrCustomChainInfo = process?.env?.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO
  ? JSON.parse(process.env.NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO)
  : undefined;
