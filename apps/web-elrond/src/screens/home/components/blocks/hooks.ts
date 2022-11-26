import { useCallback, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, BLOCKS } from '@/api';
import { useInterval } from '@/hooks';
import type { BlockState } from '@/screens/home/components/blocks/types';

export const PAGE_SIZE = 7;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: Partial<BlockState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getBlocksByPage = useCallback(async () => {
    try {
      const { data: blocksData } = await axios.get(BLOCKS, {
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

      handleSetState({
        items,
      });
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  useInterval(getBlocksByPage, POLLING_INTERVAL);

  return {
    state,
  };
};
