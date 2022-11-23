import { useCallback, useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@/graphql/types/general_types';
import type { BlocksState } from '@/screens/home/components/blocks/types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: Partial<BlocksState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    onData: (data) => {
      handleSetState({
        items: data.data.data ? formatBlocks(data.data.data) : [],
      });
    },
  });

  const formatBlocks = (data: BlocksListenerSubscription) =>
    data.blocks.map((x) => ({
      height: x.height,
      txs: x.txs,
      hash: x.hash,
      timestamp: x.timestamp,
      proposer: x.proposerAddress,
    }));

  return {
    state,
  };
};
