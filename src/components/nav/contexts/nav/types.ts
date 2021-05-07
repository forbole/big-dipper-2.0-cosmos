export interface NavState {
  title?: string;
  rawData: {
    price: number;
    supply: number;
    marketCap: number;
    inflation: number;
    communityPool: number;
  }
  uiData?: {
    price: string;
    supply: string;
    marketCap: string;
    inflation: string;
    communityPool: string;
  }
}
