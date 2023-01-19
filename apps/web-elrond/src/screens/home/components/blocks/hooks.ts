import { useCallback, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, BLOCKS } from '@/api';
import { useInterval } from '@/hooks/use_interval';
import type { BlockState } from '@/screens/home/components/blocks/types';

export const PAGE_SIZE = 7;

type BlocksResult = Array<{
  round: BlockState['items'][number]['block'];
  timestamp: BlockState['items'][number]['timestamp'];
  hash: BlockState['items'][number]['hash'];
  txCount: BlockState['items'][number]['txs'];
}>;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    loading: true,
    items: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: BlockState) => BlockState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getBlocksByPage = useCallback(async () => {
    try {
      const { data: blocksData } = await axios.get<BlocksResult>(BLOCKS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = blocksData.map((x) => ({
        block: x.round,
        timestamp: x.timestamp,
        hash: x.hash,
        txs: x.txCount,
      }));

      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items,
      }));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  useInterval(getBlocksByPage, POLLING_INTERVAL);

  return {
    state,
  };
};
