export type Theme = 'light' | 'dark' | 'device';

export interface ChainState {
  loading?: boolean;
  market: {
    loading: boolean;
    rawData: {
      supply: number;
      marketCap: number;
      inflation: number;
      communityPool: number;
    }
    uiData?: {
      supply: string;
      marketCap: string;
      inflation: string;
      communityPool: string;
    }
  }
  validatorsAddresses: {
    loading: boolean;
    validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
    selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
    consensusAddresses: {
      [key: string]: string;
    }
  }
  findAddress?: (address: string) => {
    moniker: string;
    imageUrl?: string;
  } | null;
  findOperator?: (consensusAddress: string) => string | null;
}
