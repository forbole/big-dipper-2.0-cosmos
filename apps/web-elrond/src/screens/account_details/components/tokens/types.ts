export type OtherTokenType = {
  identifier: string;
  name: string;
  balance: TokenUnit;
  imageUrl: string;
};

export type OtherTokensState = {
  page: number;
  loading: boolean;
  total: number;
  items: OtherTokenType[];
};
