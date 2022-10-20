import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import {
  POLLING_INTERVAL,
  BLOCKS,
} from '@api';
import { useInterval } from '@hooks';
import { BlockState } from './types';

export const PAGE_SIZE = 7;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const getBlocksByPage = async () => {
    try {
      const { data: blocksData } = await axios.get(BLOCKS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = blocksData.map((x) => {
        return ({
          block: x.round,
          timestamp: x.timestamp,
          hash: x.hash,
          txs: x.txCount,
        });
      });

      handleSetState({
        items,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useInterval(getBlocksByPage, POLLING_INTERVAL);

  return ({
    state,
  });
};
