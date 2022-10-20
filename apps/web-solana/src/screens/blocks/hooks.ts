import { useState } from 'react';
import * as R from 'ramda';
import { useInterval } from '@hooks';
import {
  useBlocksLazyQuery,
  BlocksQuery,
} from '@graphql/types';
import {
  BlocksState, BlockType,
} from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    exists: true,
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // block query
  // ================================
  const [getBlocks] = useBlocksLazyQuery({
    variables: {
      limit: 25,
      offset: 0,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        items: formatBlocks(data),
      });
    },
  });

  const formatBlocks = (data: BlocksQuery): BlockType[] => {
    return data.blocks.map((x) => {
      return ({
        slot: x.slot,
        txs: x.numTxs,
        hash: x.hash,
        timestamp: x.timestamp,
        leader: R.pathOr('', ['validator', 0, 'address'], x),
      });
    });
  };

  useInterval(getBlocks, 5000);

  return {
    state,
  };
};
