export type TokenType = {
  token: string;
  address: string;
  logo: string;
  price?: number;
  marketCap?: number;
  volume?: number;
}

export type TokensState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: TokenType[];
  sortKey: string;
  sortDirection: 'asc' | 'desc';
}
