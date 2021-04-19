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
    staking: {
      delegations: {
        validator: string;
        commission: number;
        amount: number;
        reward: number;
      }[];
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
    staking: {
      delegations: {
        validator: React.ReactNode;
        commission: string;
        amount: string;
        reward: string;
      }[];
    }
  }
}
