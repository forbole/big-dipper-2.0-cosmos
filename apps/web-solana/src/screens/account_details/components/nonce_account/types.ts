export type OverviewType = {
  address: string;
  authority: string;
  balance: TokenUnit;
  blockhash: string;
  fee: number;
}

export type NonceAccountState = {
  loading: boolean;
  overview: OverviewType;
}
