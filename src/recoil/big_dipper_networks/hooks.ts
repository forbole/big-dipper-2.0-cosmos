/* eslint-disable max-len */
import { useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import { BigDipperNetwork } from '@models';
import {
  writeNetworks,
  writeSelectedNetwork,
} from '@recoil/big_dipper_networks';
import {
  useChainIdQuery,
  ChainIdQuery,
} from '@graphql/types';
import {
  Networks,
  Selected,
} from '@recoil/big_dipper_networks/types';

const NETWORK_LIST_API = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

export const useBigDipperNetworksRecoil = () => {
  const [_, setNetworks] = useRecoilState(writeNetworks) as [Networks, SetterOrUpdater<Networks>];
  const [selectedNetwork, setSelectedNetwork] = useRecoilState(writeSelectedNetwork) as [Selected, SetterOrUpdater<Selected>];

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

  useChainIdQuery({
    onError: (error) => {
      console.error(error?.message);
    },
    onCompleted: (data) => {
      setSelectedNetwork(formatUseChainIdQuery(data));
    },
  });

  const formatUseChainIdQuery = (data: ChainIdQuery) => {
    return R.pathOr(selectedNetwork, ['genesis', 0, 'chainId'], data);
  };
};
