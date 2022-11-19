import { useCallback, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, BLOCKS } from '@api';
import { useInterval } from 'ui/hooks';
import type { BlockState } from './types';

export const PAGE_SIZE = 7;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  const getBlocksByPage = useCallback(async () => {
    try {
      const { data: blocksData } = await axios.get(BLOCKS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = blocksData.map((x: any) => {
        return {
          block: x.round,
          timestamp: x.timestamp,
          hash: x.hash,
          txs: x.txCount,
        };
      });

      handleSetState({
        items,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  }, [handleSetState]);

  useInterval(getBlocksByPage, POLLING_INTERVAL);

  return {
    state,
  };
};
