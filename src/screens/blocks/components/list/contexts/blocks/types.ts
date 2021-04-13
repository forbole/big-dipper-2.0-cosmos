export interface BlocksState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  loadNextPage?: (any) => void;
  itemCount?: number;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  rawData: {
    height: number;
    txs: number;
    timestamp: string;
    proposer: string;
    hash: string;
  }[];
  formatUi?: (screen?: 'mobile' | 'desktop') => {
    height: React.ReactNode;
    txs: string;
    time: string;
    proposer: React.ReactNode;
    hash: string;
  }[];
}
