export type Theme = 'light' | 'dark' | 'device';

export interface ChainState {
  loading?: boolean;
  market: {
    loading: boolean;
    rawData: {
      price: number;
      marketCap: number;
      inflation: number;
      communityPool: number;
    }
    uiData?: {
      price: string;
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
