export interface TransactionsState {
  rawData: {
    height: number;
    hash: string;
    success: boolean;
    timestamp: string;
    messages: number;
  }[];
  formatUi?: (screen?: 'mobile' | 'desktop') => {
    block: React.ReactNode;
    hash: React.ReactNode;
    result: React.ReactNode;
    time: string;
    messages: string;
  }[];
}
