export type OverviewType = {
  slot: number;
  success: boolean;
  fee: TokenUnit;
  signature: string;
  timestamp: string;
}

export type LogType = string;

export type InstructionType = {
  type: string;
  index: number;
  innerIndex: number;
  program: string;
  value: any;
  rawData: string;
}

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  logs: LogType[];
  instructions: InstructionType[];
}
