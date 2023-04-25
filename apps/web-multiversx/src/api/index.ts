// ==================================
// DEFAULTS
// ==================================
export const BASE_URL = 'https://api.multiversx.com';
export const POLLING_INTERVAL = 15000;

// ==================================
// APIS
// ==================================
export const LATEST_BLOCK_HEIGHT = `${BASE_URL}/blocks/count`;
export const TRANSACTIONS_COUNT = `${BASE_URL}/transactions/count`;
export const NODES_COUNT = `${BASE_URL}/nodes/count`;
export const ECONOMICS = `${BASE_URL}/economics`;
export const BLOCKS = `${BASE_URL}/blocks`;
export const BLOCK_DETAILS = (hash: string) => `${BASE_URL}/blocks/${hash}`;
export const MINIBLOCK_DETAILS = (hash: string) => `${BASE_URL}/miniblocks/${hash}`;
export const TRANSACTIONS = `${BASE_URL}/transactions`;
export const TRANSACTION_DETAILS = (hash: string) => `${BASE_URL}/transactions/${hash}`;
export const STATS = `${BASE_URL}/stats`;
export const PRICE_HISTORY =
  'https://data.multiversx.com/latestcomplete/quoteshistorical/egld/price';
export const IDENTITIES = `${BASE_URL}/identities`;
export const IDENTITY = (identity: string) => `${BASE_URL}/identities/${identity}`;
export const PROVIDERS = `${BASE_URL}/providers`;
export const PROVIDER_DETAILS = (provider: string) => `${BASE_URL}/providers/${provider}`;
export const STAKE = `${BASE_URL}/stake`;
export const ROUNDS = `${BASE_URL}/rounds`;
export const NODES = `${BASE_URL}/nodes`;
export const NODE_DETAILS = (node: string) => `${BASE_URL}/nodes/${node}`;
export const ACCOUNT_DETAILS = (account: string) => `${BASE_URL}/accounts/${account}`;
export const ACCOUNT_DETAILS_TOKEN_COUNT = (account: string) =>
  `${BASE_URL}/accounts/${account}/tokens/count`;
export const ACCOUNT_DETAILS_TRANSACTIONS = (account: string) =>
  `${BASE_URL}/accounts/${account}/transactions`;
export const ACCOUNT_DETAILS_TRANSACTIONS_COUNT = (account: string) =>
  `${BASE_URL}/accounts/${account}/transactions/count`;
export const ACCOUNT_DETAILS_TOKENS_COUNT = (account: string) =>
  `${BASE_URL}/accounts/${account}/tokens/count`;
export const ACCOUNT_DETAILS_TOKENS = (account: string) => `${BASE_URL}/accounts/${account}/tokens`;
export const ACCOUNT_DETAILS_NFTS_COUNT = (account: string) =>
  `${BASE_URL}/accounts/${account}/nfts/count`;
export const ACCOUNT_DETAILS_NFTS = (account: string) => `${BASE_URL}/accounts/${account}/nfts`;
export const TOKENS = `${BASE_URL}/tokens`;
export const TOKENS_COUNT = `${BASE_URL}/tokens/count`;
export const TOKEN_DETAILS = (token: string) => `${BASE_URL}/tokens/${token}`;
export const NFTS = `${BASE_URL}/nfts`;
export const NFTS_COUNT = `${BASE_URL}/nfts/count`;
export const NFT_DETAILS = (nft: string) => `${BASE_URL}/nfts/${nft}`;

// tx detail with hero tag
// https://elrondscan.com/transaction/d9ff0b785e9b794b0538669db18f7e5911549834283d05200bec0d7b63b123b4

// https://elrondscan.com/api/address/name
// This gets the hero names
// https://elrondscan.com/api/address/herotag

// address reference
// https://api.elrondscan.com/address/erd184lfpask626dwrpdsxzheznf7wngeknlrck4rst0ppxp76jq537qjd7v5z
// https://api.elrondscan.com/accounts/erd184lfpask626dwrpdsxzheznf7wngeknlrck4rst0ppxp76jq537qjd7v5z

// has staked
// https://elrondscan.com/account/erd16gtp7fcyhrjthpg85kzglppxnlvqdwmvauqrxj5ww92mkhs44gsq2j7ven
