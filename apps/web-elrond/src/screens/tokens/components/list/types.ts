export interface TokenType {
  identifier: string;
  name: string;
  owner: string;
  accounts: number;
  transactions: number;
  imageUrl: string;
}

export interface TokenState {
  page: number;
  loading: boolean;
  total: number;
  items: TokenType[];
}
