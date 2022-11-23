export interface BlockType {
  height: number;
  txs: number;
  timestamp: string;
  proposer: string;
  hash: string;
}

export interface BlocksState {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>;
