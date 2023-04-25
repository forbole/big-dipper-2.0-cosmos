export interface OtherTokenType {
  name: string;
  identifier: string;
  type: string;
}

export interface OtherTokensState {
  page: number;
  loading: boolean;
  total: number;
  items: OtherTokenType[];
}
