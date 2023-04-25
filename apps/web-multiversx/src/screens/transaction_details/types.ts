export interface OverviewType {
  hash: string;
  fromShard: number;
  toShard: number;
  from: string;
  to: string;
  timestamp: number;
  status: string;
  miniblockHash: string;
  gasUsed: number;
  gasLimit: number;
  gasPrice: TokenUnit;
  price: number;
}

export type DataType = string;

export interface ActionType {
  category: string;
  name: string;
  description: string;
}

export interface OperationType {
  action: string;
  sender: string;
  receiver: string;
  identifier: string;
  value: TokenUnit;
}

export interface ResultType {
  hash: string;
  sender: string;
  receiver: string;
  data: string;
  value: TokenUnit;
}

export interface TransactionDetailsState {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  data: DataType;
  action?: ActionType;
  operations: OperationType[];
  results: ResultType[];
}
