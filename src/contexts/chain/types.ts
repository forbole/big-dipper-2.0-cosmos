export type Theme = 'light' | 'dark' | 'device';

export interface ChainState {
  loading?: boolean;
  market: {
    loading: boolean;
    price: number;
    supply: TokenUnit;
    marketCap: number;
    inflation: number;
    communityPool: TokenUnit;
  }
  validatorsAddresses: {
    loading: boolean;
    validators: {
      [key: string]: {
        moniker: string;
        imageUrl: string | null;
      }
    };
    selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl: string | null;
      }
    };
    consensusAddresses: {
      [key: string]: string;
    }
  }
  findAddress?: (address: string) => {
    moniker: string;
    imageUrl: string | null;
  };
  findOperator?: (consensusAddress: string) => string | null;
  validatorToDelegatorAddress?: (validatorAddress: string) => string;
}
