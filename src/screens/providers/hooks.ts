import { useState } from 'react';
import * as R from 'ramda';
import {
  useProvidersQuery,
  ProvidersQuery,
  useActiveProvidersListenerSubscription,
  ActiveProvidersListenerSubscription,
  useActiveLeasesListenerSubscription,
  ActiveLeasesListenerSubscription,
  useCircledGraphsListenerSubscription,
  CircledGraphsListenerSubscription,
} from '@graphql/types/general_types';
import { ProvidersState } from './types';

export const useProviders = () => {
  const [state, setState] = useState<ProvidersState>({
    loading: true,
    exists: true,
    hasNextPage: false,
    isNextPageLoading: false,
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // This is a bandaid as it can get extremely
  // expensive if there is too much data
  /**
   * Helps remove any possible duplication
   * and sorts by height in case it bugs out
   */
  const uniqueAndSort = R.pipe(
    R.uniqBy(R.prop('hash')),
    R.sort(R.descend(R.prop('height'))),
  );

  // ================================
  // tx subscription
  // ================================
  // useActiveProvidersListenerSubscription({
  //   variables: {
  //     limit: 1,
  //     offset: 0,
  //   },
  //   onSubscriptionData: (data) => {
  //     const newItems = uniqueAndSort([
  //       ...formatActiveProviders(data.subscriptionData.data),
  //       ...state.items,
  //     ]);
  //     handleSetState({
  //       loading: false,
  //       items: newItems,
  //     });
  //   },
  // });

  // useActiveLeasesListenerSubscription({
  //   variables: {
  //     limit: 1,
  //     offset: 0,
  //   },
  //   onSubscriptionData: (data) => {
  //     const newItems = uniqueAndSort([
  //       ...formatActiveLeases(data.subscriptionData.data),
  //       ...state.items,
  //     ]);
  //     handleSetState({
  //       loading: false,
  //       items: newItems,
  //     });
  //   },
  // });

  // useCircledGraphsListenerSubscription({
  //   variables: {
  //     limit: 1,
  //     offset: 0,
  //   },
  //   onSubscriptionData: (data) => {
  //     const newItems = uniqueAndSort([
  //       ...formatCircledGraphs(data.subscriptionData.data),
  //       ...state.items,
  //     ]);
  //     handleSetState({
  //       loading: false,
  //       items: newItems,
  //     });
  //   },
  // });

  // ================================
  // tx query
  // ================================
  const LIMIT = 51;
  const providersQuery = useProvidersQuery({
    // variables: {
    //   limit: LIMIT,
    //   offset: 1,
    // },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      // const itemsLength = data.providers.length;
      const itemsLength = 51;
      const newItems = uniqueAndSort([
        ...state.items,
        ...formatProviders(data),
      ]);
      handleSetState({
        loading: false,
        items: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await providersQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: LIMIT,
      },
    }).then(({ data }) => {
      // const itemsLength = data.providers.length;
      const itemsLength = 51;
      const newItems = uniqueAndSort([
        ...state.items,
        ...formatProviders(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: itemsLength === 51,
      });
    });
  };

  const formatProviders = (data: ProvidersQuery) => {
    console.log('data => ', data);
    // let formattedData = data.providers;
    // if (data.providers.length === 51) {
    //   formattedData = data.providers.slice(0, 51);
    // }

    // return formattedData.map((x) => {
    //   return ({
    //     dataBlocks: {
    //       activeProviders: x.dataBlocks.activeProviders,
    //       activeLeases: x.dataBlocks.activeLeases,
    //     },
    //     memory: {
    //       used: x.memory.used,
    //       available: x.memory.available,
    //     },
    //     compute: {
    //       used: x.compute.used,
    //       available: x.compute.available,
    //     },
    //     storage: {
    //       used: x.storage.used,
    //       available: x.storage.available,
    //       pending: x.storage.pending,
    //     },
    //     title: {
    //       ownerAdress: x.title.ownerAdress,
    //       hostUri: x.title.hostUri,
    //       region: x.region,
    //       organization: x.organization,
    //       email: x.email,
    //       website: x.website,
    //     },
    //   });
    // });
  };

  return {
    state,
    loadNextPage,
  };
};
