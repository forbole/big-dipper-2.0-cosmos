/* eslint-disable max-len */
import { useEffect } from 'react';
import axios from 'axios';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import { BigDipperNetwork } from '@models';
import {
  writeNetworks,
} from '@recoil/big_dipper_networks';
import {
  Networks,
} from '@recoil/big_dipper_networks/types';

const NETWORK_LIST_API = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

export const useBigDipperNetworksRecoil = () => {
  const [_, setNetworks] = useRecoilState(writeNetworks) as [Networks, SetterOrUpdater<Networks>];

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
};
