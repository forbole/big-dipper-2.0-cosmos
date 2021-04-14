export interface TransactionState {
  rawData: {
    exists: boolean;
    loading: boolean;
    transaction: {
      hash: string;
      height: number;
      timestamp: string;
      fee: number;
      gasUsed: number;
      gasWanted: number;
      result: boolean;
      memo: string;
    }
    messages: any[];
  }
  onMessageFilterCallback?: (value: string) => void;
}
