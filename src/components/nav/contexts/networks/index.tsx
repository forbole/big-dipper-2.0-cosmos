import React from 'react';
import { useNetwork } from './hooks';
import { NetworksState } from './types';

const initialState: NetworksState = {
  networks: [],
};

const NetworksContext = React.createContext<NetworksState>(initialState);

const NetworksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    bigDipperNetworks,
  } = useNetwork();

  return (
    <NetworksContext.Provider
      value={{
        networks: bigDipperNetworks,
      }}
    >
      {children}
    </NetworksContext.Provider>
  );
};

const useNetworksContext = () => React.useContext(NetworksContext);

export {
  NetworksContext,
  useNetworksContext,
  NetworksProvider,
};
