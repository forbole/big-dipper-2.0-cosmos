export {
  HOME,
  BLOCKS,
  BLOCK_DETAILS,
  VALIDATOR_DETAILS,
  VALIDATORS,
  TRANSACTIONS,
  TRANSACTION_DETAILS,
  PROPOSALS,
  PROPOSAL_DETAILS,
  ACCOUNT_DETAILS,
  PARAMS,
  PROFILE_DETAILS,
  ADDRESS_DETAILS,
} from 'ui/utils/go_to_page';
export const NODE_DETAILS = (hash: string) => `/nodes/${hash}`;
export const TOKENS = '/tokens';
export const TOKEN_DETAILS = (token: string) => `/tokens/${token}`;
export const NFTS = '/nfts';
export const NFT_DETAILS = (nft: string) => `/nfts/${nft}`;
