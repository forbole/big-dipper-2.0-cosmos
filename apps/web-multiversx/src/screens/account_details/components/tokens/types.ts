export interface OtherTokenType {
  identifier: string;
  name: string;
  balance: TokenUnit;
  imageUrl: string;
}

export interface OtherTokensState {
  page: number;
  loading: boolean;
  total: number;
  items: OtherTokenType[];
}
