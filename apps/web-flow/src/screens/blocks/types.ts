export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  hash: string;
};

export type BlocksState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: BlockType[];
};
