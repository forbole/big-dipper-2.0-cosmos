export interface OverviewType {
  hash: string;
  receiverBlockHash: string;
  receiverShard: number;
  senderBlockHash: string;
  senderShard: number;
  timestamp: number;
  type: string;
}

export interface BlockDetailsState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
