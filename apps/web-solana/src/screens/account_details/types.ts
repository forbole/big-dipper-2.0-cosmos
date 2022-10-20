export enum ACCOUNT_TYPES {
    TOKEN = 'TOKEN',
    TOKEN_ACCOUNT = 'TOKEN_ACCOUNT',
    NONCE_ACCOUNT = 'NONCE_ACCOUNT',
    NATIVE_ACCOUNT = 'NATIVE_ACCOUNT',
    STAKE_ACCOUNT = 'STAKE_ACCOUNT',
    VOTE_ACCOUNT = 'VOTE_ACCOUNT',
}

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  accountType: string;
}

// delete later
export type BalanceType = {
  native: TokenUnit;
  stake: TokenUnit;
  nonce: TokenUnit;
  vote: TokenUnit;
  total: TokenUnit;
}

export type OtherTokenType = {
  denom: string;
  available: TokenUnit;
  reward: TokenUnit;
  commission: TokenUnit;
}

export type DelegationType = {
  validator: string;
  validatorStatus: {
    status: number;
    jailed: boolean;
  }
  commission: number;
  amount: TokenUnit;
  reward: TokenUnit;
}

export type RedelegationType = {
  to: string;
  from: string;
  linkedUntil: string;
  amount: TokenUnit;
}

export type UnbondingType = {
  validator: string;
  commission: number;
  amount: TokenUnit;
  linkedUntil: string;
}
