export type OverviewType = {
  identifier: string;
  collection: string;
  name: string;
  type: string;
  creator: string;
  owner: string; // may be null
  minted: number;
  ticker: string;
}

export type BlockDetailsState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
