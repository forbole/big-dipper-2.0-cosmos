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
      commission?: number;
      total: number;
    }
  }
  uiData?: {
    account: {
      address: string;
      withdrawalAddress: string;
    }
    balance: {
      chart: {
        key: string;
        display: string;
        value: number;
      }[]
      total: string;
    }
  }
}
