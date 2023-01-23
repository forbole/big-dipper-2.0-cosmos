import type { ChainIdQuery, useChainIdQuery } from '@/graphql/types/general_types';
import { BigDipperNetwork } from '@/models';
import { writeNetworks, writeSelectedNetwork } from '@/recoil/big_dipper_networks/selectors';
import type { Networks, Selected } from '@/recoil/big_dipper_networks/types';
import { gql, useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

const query = gql`
  query Rest {
    networks @rest(type: "BigDipperNetworks", path: "networks.json") {
      name
      logo
      cover
      links
    }
  }
`;

/**
 * `useBigDipperNetworksRecoil` is a React Hook that fetches a list of networks from the BigDipper API
 * and stores them in a Recoil state
 * @param [useQuery] - This is the query that will be used to get the chainId.
 * @returns A function that takes in a useQuery and returns a function that takes in a
 * useQuery and returns a function that takes in a useQuery and returns a function that
 * takes in a useQuery and returns a function that takes in a useQuery and returns a
 * function that takes in a useQuery and returns a function that takes in a useChain
 */
export function useBigDipperNetworksRecoil(useQuery?: typeof useChainIdQuery) {
  const disabledSelection = !useQuery;
  const [_, setNetworks] = useRecoilState(writeNetworks) as [Networks, SetterOrUpdater<Networks>];
  const [selectedNetwork, setSelectedNetwork] = useSelectedHook(disabledSelection);
  const client = useApolloClient();

  useEffect(() => {
    const getNetworkList = async () => {
      let data: BigDipperNetwork[] = [];
      try {
        /* Making a GET request to the NETWORK_LIST_API and storing the response in the results
        variable. */
        const results = await client.query({ query });
        data = results?.data.networks ?? [];
      } catch (error) {
        console.error(error);
      }
      /* Sorting the data alphabetically by name. */
      const formattedData = data
        .map((x) => BigDipperNetwork.fromJson(x))
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

      /* Setting the value of the writeNetworks atom to formattedData. */
      setNetworks(formattedData);
    };
    getNetworkList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  /* A function that takes in a useQuery and returns a function that takes in a
  useQuery and returns a function that takes in a useQuery and returns a function that
  takes in a useQuery and returns a function that takes in a useQuery and returns a
  function that takes in a useQuery and returns a function that takes in a useChain */
  useQuery?.({
    onCompleted: (data) => {
      if (disabledSelection) return;
      setSelectedNetwork(formatUseChainIdQuery(data));
    },
    onError: (error) => {
      console.error((error as Error).message);
    },
  });

  function formatUseChainIdQuery(data: ChainIdQuery) {
    return data?.genesis?.[0]?.chainId ?? selectedNetwork;
  }
}

/**
 * If the disabledSelection parameter is true, return a tuple of null and a function that does
 * nothing. Otherwise, return a tuple of the current value of the writeSelectedNetwork atom and a
 * function that can be used to update the value of the writeSelectedNetwork atom
 * @param {boolean} disabledSelection - boolean
 * @returns A tuple of the selected network and a function to set the selected network.
 */
function useSelectedHook(disabledSelection: boolean): [Selected, SetterOrUpdater<Selected>] {
  const result = useRecoilState(writeSelectedNetwork);
  if (disabledSelection) {
    return [
      '',
      () => {
        // do nothing
      },
    ];
  }
  return result;
}
