export interface AccountState {
  rawData: {
    exists: boolean;
    loading: boolean;
    account: {
      address: string;
      withdrawalAddress: string;
    }
    balance: {
      available: number;
      delegate: number;
      unbonding: number;
      reward: number;
      total: 0,
      commission?: number;
    }
  }
  uiData?: {
    account: {
      address: string;
      withdrawalAddress: string;
    }
  }
}
