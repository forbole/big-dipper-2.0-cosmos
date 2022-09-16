import { useState } from 'react';
import * as R from 'ramda';
import {
  useProvidersQuery,
  useProvidersListenerSubscription,
  ProvidersListenerSubscription,
} from '@graphql/types/general_types';
import { convertMsgsToModels } from '@msg';
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
  useProvidersListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onSubscriptionData: (data) => {
      const newItems = uniqueAndSort([
        ...formatProviders(data.subscriptionData.data),
        ...state.items,
      ]);
      handleSetState({
        loading: false,
        items: newItems,
      });
    },
  });

  // ================================
  // tx query
  // ================================
  const LIMIT = 51;
  const transactionQuery = useProvidersQuery({
    variables: {
      limit: LIMIT,
      offset: 1,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const itemsLength = data.providers.length;
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
    await transactionQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: LIMIT,
      },
    }).then(({ data }) => {
      const itemsLength = data.providers.length;
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

  const formatProviders = (data: ProvidersListenerSubscription) => {
    let formattedData = data.transactions;
    if (data.providers.length === 51) {
      formattedData = data.providers.slice(0, 51);
    }

    return formattedData.map((x) => {
      return ({
        height: x.height,
        hash: x.hash,
        success: x.success,
        timestamp: x.block.timestamp,
      });
    });
  };

  return {
    state,
    loadNextPage,
  };
};
