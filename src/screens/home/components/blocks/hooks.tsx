import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@graphql/types';
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
    onSubscriptionData: (data) => {
      handleSetState({
        items: formatBlocks(data.subscriptionData.data),
      });
    },
  });

  const formatBlocks = (data: BlocksListenerSubscription) => {
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

  return {
    state,
  };
};
