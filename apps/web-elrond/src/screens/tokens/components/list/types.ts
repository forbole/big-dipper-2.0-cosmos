export type TokenType = {
  identifier: string;
  name: string;
  owner: string;
  accounts: number;
  transactions: number;
  imageUrl: string;
};

export type TokenState = {
  page: number;
  loading: boolean;
  total: number;
  items: TokenType[];
};
