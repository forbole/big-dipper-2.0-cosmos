import React from 'react';
import {
  useValidatorsAddress, useMarket,
} from './hooks';
import { ChainState } from './types';

const initialState: ChainState = {
  market: {
    loading: true,
    price: 0,
    supply: {
      value: 0,
      denom: '',
    },
    marketCap: 0,
    inflation: 0,
    communityPool: {
      value: 0,
      denom: '',
    },
  },
  validatorsAddresses: {
    loading: true,
    validators: {},
    selfDelegateAddresses: {},
    consensusAddresses: {},
  },
};

const ChainContext = React.createContext<ChainState>(initialState);

const ChainProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    validatorsAddresses,
    findAddress,
    loading: addressLoading,
    findOperator,
    validatorToDelegatorAddress,
  } = useValidatorsAddress(initialState);

  const {
    state: marketState,
  } = useMarket(initialState);

  return (
    <ChainContext.Provider
      value={{
        validatorsAddresses,
        findAddress,
        findOperator,
        validatorToDelegatorAddress,
        loading: addressLoading || marketState.loading,
        market: {
          ...marketState,
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
