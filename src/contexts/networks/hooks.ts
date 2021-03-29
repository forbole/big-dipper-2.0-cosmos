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
  const NETWORK_LIST_API = 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/bd-networks.json';

  const [networks, setNetworks] = useState<BigDipperNetwork[]>([]);

  useEffect(() => {
    const getNetworkList = async () => {
      let data = [];
      try {
        const results = await axios.get(NETWORK_LIST_API);
        data = results?.data ?? [];
      } catch (error) {
        console.error(error);
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
  };
};

export const useSelectedNetwork = (initialState: NetworksState) => {
  const [selected, setSelected] = useState(initialState.selected);

  useChainIdQuery(
    {
      onCompleted: (data) => {
        setSelected(formatUseChainIdQuery(data));
      },
    },
  );

  const formatUseChainIdQuery = (data: ChainIdQuery) => {
    return R.pathOr(initialState.selected, ['genesis', 0, 'chainId'], data);
  };

  return {
    selected,
  };
};
