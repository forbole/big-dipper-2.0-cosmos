export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  hash: string;
};

export type BlocksState = {
  items: BlockType[];
};
