export type BlockType = {
  block: number; // round
  timestamp: number;
  txs: number;
  hash: string;
}

export type BlockState = {
  items: BlockType[];
}
