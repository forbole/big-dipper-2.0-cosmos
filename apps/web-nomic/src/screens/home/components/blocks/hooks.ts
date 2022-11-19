import { useCallback, useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@graphql/types/general_types';
import type { BlocksState } from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
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

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      return {
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.proposerAddress,
      };
    });
  };

  return {
    state,
  };
};
