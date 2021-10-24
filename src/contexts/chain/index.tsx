import React from 'react';
import {
  useValidatorsAddress,
} from './hooks';
import { ChainState } from './types';

const initialState: ChainState = {
  // market: {
  //   loading: true,
  //   price: null,
  //   supply: initialTokenUnit,
  //   marketCap: null,
  //   inflation: 0,
  //   communityPool: initialTokenUnit,
  // },
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

  return (
    <ChainContext.Provider
      value={{
        validatorsAddresses,
        findAddress,
        findOperator,
        validatorToDelegatorAddress,
        loading: addressLoading,
        // market: {
        //   ...marketState,
        // },
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
