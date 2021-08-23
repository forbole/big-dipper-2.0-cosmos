export type OverviewType = {
  hash: string;
  height: number;
  timestamp: string;
  fee: TokenUnit;
  gasUsed: number;
  gasWanted: number;
  success: boolean;
  memo: string;
  error: string;
}

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  messages: {
    filterBy: string;
    viewRaw: boolean;
    items: any[];
  }
}
