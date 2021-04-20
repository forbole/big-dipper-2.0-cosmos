export interface AccountState {
  rawData: {
    exists: boolean;
    loading: boolean;
    profile: {
      operatorAddress: string;
      selfDelegateAddress: string;
      description: string;
      status: number;
      jailed: boolean;
      website: string;
      condition: number;
      commission: number;
    }
  }
  uiData?: {
    profile: {
      operatorAddress: string;
      validator: {
        moniker: string;
        imageUrl?: string;
      }
      status: string;
    }
  //   balance: {
  //     chart: {
  //       key: string;
  //       display: string;
  //       value: number;
  //     }[]
  //     total: string;
  //   }
  //   staking: {
  //     delegations: {
  //       validatorMoniker: string;
  //       validator: React.ReactNode;
  //       commission: string;
  //       amount: string;
  //       reward: string;
  //     }[];
  //     redelegations: {
  //       to: React.ReactNode;
  //       from: React.ReactNode;
  //       linkedUntil: string;
  //       amount: string;
  //     }[];
  //     unbondings: {
  //       validator: React.ReactNode;
  //       commission: string;
  //       amount: string;
  //       linkedUntil: string;
  //     }[];
  //   }
  }
}
