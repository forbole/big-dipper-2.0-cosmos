export interface NavState {
  title?: string;
  rawData: {
    supply: number;
    marketCap: number;
    inflation: number;
    communityPool: number;
  }
  uiData?: {
    supply: string;
    marketCap: string;
    inflation: string;
    communityPool: string;
  }
}
