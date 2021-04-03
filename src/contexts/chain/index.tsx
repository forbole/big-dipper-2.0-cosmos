import React from 'react';
import { useValidatorsAddress } from './hooks';
import { ChainState } from './types';

const initialState: ChainState = {
  loading: true,
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
    loading,
  } = useValidatorsAddress(initialState);

  return (
    <ChainContext.Provider
      value={{
        validatorsAddresses,
        findAddress,
        loading,
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
