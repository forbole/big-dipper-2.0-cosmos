export interface BlockType {
  block: number; // round
  timestamp: number;
  txs: number;
  hash: string;
}

export interface BlockState {
  items: BlockType[];
}
