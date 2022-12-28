import {
  BlocksListenerSubscription,
  useBlocksListenerSubscription,
} from '@/graphql/types/general_types';
import type { BlocksState } from '@/screens/home/components/blocks/types';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

const formatBlocks = (data: BlocksListenerSubscription) =>
  data.blocks.map((x) => ({
    height: x.height,
    txs: x.txs ?? 0,
    hash: x.hash,
    timestamp: x.timestamp,
    proposer: x.proposerAddress,
  }));

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    items: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: BlocksState) => BlocksState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    onData: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: data.data.data ? formatBlocks(data.data.data) : [],
      }));
    },
  });

  return {
    state,
  };
};
