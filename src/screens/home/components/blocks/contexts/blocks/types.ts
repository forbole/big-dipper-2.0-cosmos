export interface BlocksState {
  blocks: any[];
  rawData: {
    height: number;
    txs: number;
    timestamp: string;
    proposer: string;
    hash: string;
  }[];
  uiData: {
    height: string;
    txs: string;
    timestamp: string;
    proposer: string;
    hash: string;
  }[];
}
