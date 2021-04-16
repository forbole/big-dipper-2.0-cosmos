export interface NavState {
  title?: string;
  rawData: {
    price: number;
    marketCap: number;
    inflation: number;
    communityPool: number;
  }
  uiData?: {
    price: string;
    marketCap: string;
    inflation: string;
    communityPool: string;
  }
}
