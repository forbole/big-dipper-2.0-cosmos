export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  proposer: string;
  hash: string;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>
