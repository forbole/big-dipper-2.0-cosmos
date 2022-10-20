export type OverviewType = {
  address: string;
  withdrawalAddress: string;
}

export type BalanceType = {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total: TokenUnit;
}

export type OtherTokenType = {
  denom: string;
  available: TokenUnit;
  reward: TokenUnit;
  commission: TokenUnit;
}

export type RewardsType = {
  [value:string]: TokenUnit[];
}

export type CosmwasmType = {
  admin: string;
  code_id: string,
  label: string,
  result_contract_address: string,
  sender: string,
  success: boolean,
  transaction: any
}

export type Cw20TokenBalance = {
  tokenAddress: string,
  name: string
  denom: string,
  exponent: number,
  logo: string,
  balance: number
}
// todo
// export type Cw20TokenInfo = {
//   address: string,
//   name: string,
//   denom: string,
//   logo: string,
//   exponent: number,
//   circulatingSupply: number,
//   maxSupply: number,
//   minterAddress: string,
//   projectUrl: string,
//   holders: {
//     address: string,
//     balance: number
//   }[]
// }

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  balance: BalanceType;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  rewards: RewardsType;
  cosmwasm: CosmwasmType;
  tab: number;
  cw20TokenBalances: Cw20TokenBalance[];
}
