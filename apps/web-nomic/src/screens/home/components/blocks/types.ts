export interface BlockType {
  height: number;
  txs: number;
  timestamp: string;
  hash: string;
}

export interface BlocksState {
  loading: boolean;
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>;
