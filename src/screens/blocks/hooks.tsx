import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  useBlocksQuery,
  BlocksListenerSubscription,
} from '@graphql/types';
import { BlocksState } from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    rawDataTotal: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onSubscriptionData: (data) => {
      handleSetState({
        items: [
          ...formatBlocks(data.subscriptionData.data),
          ...state.items,
        ],
      });
    },
  });

  // ================================
  // block query
  // ================================
  const blockQuery = useBlocksQuery({
    variables: {
      limit: 50,
      offset: 1,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatBlocks(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < data.total.aggregate.count,
        isNextPageLoading: false,
        rawDataTotal: data.total.aggregate.count,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await blockQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatBlocks(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: newItems.length < data.total.aggregate.count,
        rawDataTotal: data.total.aggregate.count,
      });
    });
  };

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      return ({
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.validator.validatorInfo.operatorAddress,
      });
    });
  };

  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;

  return {
    state,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
