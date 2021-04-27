import {
  useState, useEffect,
} from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { BigDipperNetwork } from '@models';
import {
  useChainIdQuery, ChainIdQuery,
} from '@graphql/types';
import { NetworksState } from './types';

export const useNetwork = () => {
  const NETWORK_LIST_API = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

  const [networks, setNetworks] = useState<BigDipperNetwork[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getNetworkList = async () => {
      let data = [];
      try {
        const results = await axios.get(NETWORK_LIST_API);
        data = results?.data ?? [];
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
      const formattedData = data
        .map((x) => BigDipperNetwork.fromJson(x))
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
      setNetworks(formattedData);
    };
    getNetworkList();
  }, []);

  return {
    bigDipperNetworks: networks,
    loading,
  };
};

export const useSelectedNetwork = (initialState: NetworksState) => {
  const [selected, setSelected] = useState(initialState.selected);
  const [loading, setLoading] = useState(true);

  useChainIdQuery(
    {
      onError: () => {
        setLoading(false);
      },
      onCompleted: (data) => {
        setSelected(formatUseChainIdQuery(data));
        setLoading(false);
      },
    },
  );

  const formatUseChainIdQuery = (data: ChainIdQuery) => {
    return R.pathOr(initialState.selected, ['genesis', 0, 'chainId'], data);
  };

  return {
    selected,
    loading,
  };
};
