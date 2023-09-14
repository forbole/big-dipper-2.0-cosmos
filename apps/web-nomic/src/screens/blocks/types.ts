export interface BlockType {
  height: number;
  txs: number;
  timestamp: string;
  hash: string;
}

export interface BlocksState {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: BlockType[];
}

export type ValidatorWithAvatar = Override<BlockType, { proposer: AvatarName }>;
