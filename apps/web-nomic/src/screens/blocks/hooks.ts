import {
  BlocksListenerSubscription,
  useBlocksListenerSubscription,
  useBlocksQuery,
} from '@/graphql/types/general_types';
import type { BlocksState, BlockType } from '@/screens/blocks/types';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
  });

  const handleSetState = useCallback((stateChange: (prevState: BlocksState) => BlocksState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // This is a bandaid as it can get extremely
  // expensive if there is too much data
  /**
   * Helps remove any possible duplication
   * and sorts by height in case it bugs out
   */
  const uniqueAndSort = R.pipe(
    R.uniqBy((r: BlockType) => r?.height),
    R.sort(R.descend((r) => r?.height))
  );

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onData: (data) => {
      const newItems = uniqueAndSort([
        ...(data.data.data ? formatBlocks(data.data.data) : []),
        ...state.items,
      ]);
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: newItems,
      }));
    },
  });

  // ================================
  // block query
  // ================================
  const LIMIT = 51;
  const blockQuery = useBlocksQuery({
    variables: {
      limit: LIMIT,
      offset: 1,
    },
    onError: () => {
      handleSetState((prevState) => ({ ...prevState, loading: false }));
    },
    onCompleted: (data) => {
      const itemsLength = data.blocks.length;
      const newItems = uniqueAndSort([...state.items, ...formatBlocks(data)]);
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
      }));
    },
  });

  const loadNextPage = async () => {
    handleSetState((prevState) => ({ ...prevState, isNextPageLoading: true }));
    // refetch query
    await blockQuery
      .fetchMore({
        variables: {
          offset: state.items.length,
          limit: LIMIT,
        },
      })
      .then(({ data }) => {
        const itemsLength = data.blocks.length;
        const newItems = uniqueAndSort([...state.items, ...formatBlocks(data)]);

        // set new state
        handleSetState((prevState) => ({
          ...prevState,
          items: newItems,
          isNextPageLoading: false,
          hasNextPage: itemsLength === 51,
        }));
      });
  };

  const formatBlocks = (data: BlocksListenerSubscription): BlockType[] => {
    let formattedData = data.blocks;
    if (data.blocks.length === 51) {
      formattedData = data.blocks.slice(0, 51);
    }
    return formattedData.map((x) => ({
      height: x.height,
      txs: x.txs ?? 0,
      hash: x.hash,
      timestamp: x.timestamp,
      proposer: x.proposerAddress,
    }));
  };

  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index: number) => !state.hasNextPage || index < state.items.length;

  return {
    state,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
