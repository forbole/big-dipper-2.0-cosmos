import React from 'react';
import { chainConfig } from '@src/chain_config';
import {
  useNetwork,
  useSelectedNetwork,
} from './hooks';
import { NetworksState } from './types';

const initialState: NetworksState = {
  networks: [],
  selected: chainConfig.network,
};

const NetworksContext = React.createContext<NetworksState>(initialState);

const NetworksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const { bigDipperNetworks } = useNetwork();
  const { selected } = useSelectedNetwork(initialState);

  return (
    <NetworksContext.Provider
      value={{
        networks: bigDipperNetworks,
        selected,
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
