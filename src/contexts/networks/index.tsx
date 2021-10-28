import React from 'react';
import { chainConfig } from '@configs';
import {
  useNetwork,
  useSelectedNetwork,
} from './hooks';
import { NetworksState } from './types';

const initialState: NetworksState = {
  networks: [],
  selected: chainConfig.network,
  loading: true,
};

const NetworksContext = React.createContext<NetworksState>(initialState);

const NetworksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    bigDipperNetworks,
    loading: networkLoading,
  } = useNetwork();
  const {
    selected,
    loading: selectedLoading,
  } = useSelectedNetwork(initialState);

  return (
    <NetworksContext.Provider
      value={{
        networks: bigDipperNetworks,
        selected,
        loading: networkLoading || selectedLoading,
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
