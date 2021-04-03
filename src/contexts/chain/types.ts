export type Theme = 'light' | 'dark' | 'device';

export interface ChainState {
  loading: boolean;
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
  }
  findAddress?: (address: string) => {
    moniker: string;
    imageUrl?: string;
  } | null;
}
