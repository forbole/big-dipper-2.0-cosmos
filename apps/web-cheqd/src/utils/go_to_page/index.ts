import chainConfig from '@/chainConfig';

const network = process.env.NEXT_PUBLIC_CHAIN_TYPE;

const { prefix } = chainConfig();

export const HOME = '/';
export const BLOCKS = '/blocks';
export const BLOCK_DETAILS = (slot: string | number): string => `/blocks/${slot}`;
export const VALIDATOR_DETAILS = (address: string): string => `/validators/${address}`;
export const VALIDATORS = '/validators';
export const TRANSACTIONS = '/transactions';
export const TRANSACTION_DETAILS = (tx: string): string => `/transactions/${tx}`;
export const PROPOSALS = '/proposals';
export const PROPOSAL_DETAILS = (id: string | number): string => `/proposals/${id}`;
export const ACCOUNT_DETAILS = (address: string): string => `/accounts/${address}`;
export const PARAMS = '/params';
export const PROFILE_DETAILS = (dtag: string): string => `/${dtag}`;

/* This is a route to the accounts page. */
export const ACCOUNTS = '/accounts';

/**
 * Helper to determine if we are routing to validator details or account details
 * @param address
 * @returns
 */
export const ADDRESS_DETAILS = (address: string) =>
  address.includes(prefix.validator) ? VALIDATOR_DETAILS(address) : ACCOUNT_DETAILS(address);

export const DID_URL = (did: string) => `https://resolver.cheqd.net/1.0/identifiers/${did}`;

export const RESOURCE_URL = (collection: string, id: string) =>
  `https://resolver.cheqd.net/1.0/identifiers/did:cheqd:${network}:${collection}/resources/${id}`;
