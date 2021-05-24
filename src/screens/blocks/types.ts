export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  proposer: AvatarName;
  hash: string;
}

export type BlocksState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  // loadNextPage?: (any) => void;
  // itemCount?: number;
  // loadMoreItems?: (any) => void;
  // isItemLoaded?: (index: number) => boolean;
  rawDataTotal: number;
  items: BlockType[];
}
