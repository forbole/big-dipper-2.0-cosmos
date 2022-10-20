export type BlockType = {
  slot: number;
  hash: string;
  txs: number;
  timestamp: string;
  leader: string;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { leader: AvatarName }>
