export type TokenType = {
  token: string;
  mint: string;
  amount: TokenUnit;
}

export type TokensState = {
  loading: boolean;
  tokens: TokenType[];
}
