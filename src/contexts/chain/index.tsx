import React from 'react';
import {
  useValidatorsAddress, useMarket,
} from './hooks';
import { ChainState } from './types';

const initialState: ChainState = {
  market: {
    loading: true,
    rawData: {
      price: 0,
      marketCap: 0,
      inflation: 0,
      communityPool: 0,
    },
  },
  validatorsAddresses: {
    loading: true,
    validators: {},
    selfDelegateAddresses: {},
  },
};

const ChainContext = React.createContext<ChainState>(initialState);

const ChainProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    validatorsAddresses,
    findAddress,
    loading: addressLoading,
  } = useValidatorsAddress(initialState);

  const {
    rawData,
    uiData,
    loading: marketLoading,
  } = useMarket(initialState);

  return (
    <ChainContext.Provider
      value={{
        validatorsAddresses,
        findAddress,
        loading: addressLoading && marketLoading,
        market: {
          loading: marketLoading,
          rawData,
          uiData,
        },
      }}
    >
      {children}
    </ChainContext.Provider>
  );
};

const useChainContext = () => React.useContext(ChainContext);

export {
  useChainContext,
  ChainContext,
  ChainProvider,
};
