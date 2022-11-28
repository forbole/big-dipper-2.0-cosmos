export interface AtomState {
  price: number | null;
  supply: TokenUnit;
  marketCap: number | null;
  inflation: number;
  communityPool: TokenUnit;
  apr: number;
}
