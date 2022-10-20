export type OtherTokenType = {
  name: string;
  identifier: string;
  type: string;
}

export type OtherTokensState = {
  page: number;
  loading: boolean;
  total: number;
  items: OtherTokenType[];
}
