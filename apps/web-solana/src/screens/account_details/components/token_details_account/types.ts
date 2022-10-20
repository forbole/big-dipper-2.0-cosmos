export type OverviewType = {
  address: string;
  mint: string;
  mintImageUrl: string;
  balance: TokenUnit;
  owner: string;
}

export type NonceAccountState = {
  loading: boolean;
  overview: OverviewType;
}
