import { useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, BLOCKS, LATEST_BLOCK_HEIGHT } from '@api';
import { useInterval } from 'ui/hooks';
import type { BlockState } from './types';

export const PAGE_SIZE = 25;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  useEffect(() => {
    getLatestBlockHeight();
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handlePageChangeCallback = async (page: number, _rowsPerPage: number) => {
    handleSetState({
      page,
      loading: true,
    });
    await getBlocksByPage(page);
  };

  const getLatestBlockHeight = async () => {
    try {
      const { data: total } = await axios.get(LATEST_BLOCK_HEIGHT);
      handleSetState({
        total,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  const getBlocksByPage = async (page: number) => {
    try {
      const { data: blocksData } = await axios.get(BLOCKS, {
        params: {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
        },
      });

      const items = blocksData.map((x: any) => {
        return {
          block: x.round,
          timestamp: x.timestamp,
          hash: x.hash,
          txs: x.txCount,
          shard: x.shard,
          size: x.sizeTxs,
        };
      });

      handleSetState({
        loading: false,
        items,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  const getBlocksInterval = async () => {
    if (state.page === 0) {
      await getBlocksByPage(0);
    }
  };

  useInterval(getBlocksInterval, POLLING_INTERVAL);

  return {
    state,
    handlePageChangeCallback,
  };
};
