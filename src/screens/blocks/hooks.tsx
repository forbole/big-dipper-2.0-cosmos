import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  useBlocksQuery,
  BlocksListenerSubscription,
} from '@graphql/types';
import {
  BlocksState, BlockType,
} from './types';

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
        loading: false,
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
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatBlocks(data)]);
      handleSetState({
        loading: false,
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

  const formatBlocks = (data: BlocksListenerSubscription): BlockType[] => {
    return data.blocks.map((x) => {
      const proposerAddress = R.pathOr('', ['validator', 'validatorInfo', 'operatorAddress'], x);
      return ({
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: proposerAddress,
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
