/* eslint-disable max-len */
import { useEffect } from 'react';
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
} from '@graphql/types/general_types';
import {
  Networks,
  Selected,
} from '@recoil/big_dipper_networks/types';

const LAVA_NETWORK_TESTNET = [
  {
    name: 'Lava',
    logo: '/icons/lava-icon.svg',
    cover: '/icon/lava-icon.svg',
    links: [
      {
        name: 'Testnet',
        chain_id: 'lava-testnet',
        url: 'http://bd.lavanet.xyz/',
      },
    ],
  },
];

export const useBigDipperNetworksRecoil = () => {
  const [_, setNetworks] = useRecoilState(writeNetworks) as [Networks, SetterOrUpdater<Networks>];
  const [selectedNetwork, setSelectedNetwork] = useRecoilState(writeSelectedNetwork) as [Selected, SetterOrUpdater<Selected>];

  useEffect(() => {
    const getNetworkList = async () => {
      const formattedData = LAVA_NETWORK_TESTNET
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
