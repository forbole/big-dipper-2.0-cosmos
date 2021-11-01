export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  proposer: string;
  hash: string;
}

export type BlocksState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>
