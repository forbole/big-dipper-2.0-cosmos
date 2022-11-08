import { useState } from 'react';
import * as R from 'ramda';
import { useBlocksListenerSubscription, BlocksListenerSubscription } from '@graphql/types';
import { BlocksState } from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
        txs: x.txs.aggregate.count,
        hash: x.hash,
        timestamp: x.timestamp,
      };
    });
  };

  return {
    state,
  };
};
