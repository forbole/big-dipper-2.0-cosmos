import type { QueryHookOptions, QueryResult } from '@apollo/client';
import { useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import { BigDipperNetwork } from 'ui/models';
import { writeNetworks, writeSelectedNetwork } from './selectors';
import type { Networks, Selected } from './types';

export type UseChainIdQuery<TData, TVariables> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

const NETWORK_LIST_API =
  'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

/**
 * `useBigDipperNetworksRecoil` is a React Hook that fetches a list of networks from the BigDipper API
 * and stores them in a Recoil state
 * @param [useChainIdQuery] - This is the query that will be used to get the chainId.
 * @returns A function that takes in a useChainIdQuery and returns a function that takes in a
 * useChainIdQuery and returns a function that takes in a useChainIdQuery and returns a function that
 * takes in a useChainIdQuery and returns a function that takes in a useChainIdQuery and returns a
 * function that takes in a useChainIdQuery and returns a function that takes in a useChain
 */
export function useBigDipperNetworksRecoil<TData, TVariables>(
  useChainIdQuery?: UseChainIdQuery<TData, TVariables>
) {
  const disabledSelection = !useChainIdQuery;
  const [_, setNetworks] = useRecoilState(writeNetworks) as [Networks, SetterOrUpdater<Networks>];
  const [selectedNetwork, setSelectedNetwork] = useSelectedHook(disabledSelection);

  useEffect(() => {
    const getNetworkList = async () => {
      let data: BigDipperNetwork[] = [];
      try {
        /* Making a GET request to the NETWORK_LIST_API and storing the response in the results
        variable. */
        const results = await axios.get(NETWORK_LIST_API);
        data = results?.data ?? [];
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
  }, [setNetworks]);

  /* A function that takes in a useChainIdQuery and returns a function that takes in a
  useChainIdQuery and returns a function that takes in a useChainIdQuery and returns a function that
  takes in a useChainIdQuery and returns a function that takes in a useChainIdQuery and returns a
  function that takes in a useChainIdQuery and returns a function that takes in a useChain */
  useChainIdQuery?.({
    onError: (error) => {
      console.error(error?.message);
    },
    onCompleted: (data) => {
      if (disabledSelection) return;
      setSelectedNetwork(formatUseChainIdQuery(data));
    },
  });

  function formatUseChainIdQuery(data: TData) {
    return R.pathOr(selectedNetwork, ['genesis', 0, 'chainId'], data);
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
