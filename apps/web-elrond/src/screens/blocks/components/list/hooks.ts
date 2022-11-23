import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, BLOCKS, LATEST_BLOCK_HEIGHT } from '@/api';
import { useInterval } from '@/hooks';
import type { BlockState } from '@/screens/blocks/components/list/types';

export const PAGE_SIZE = 25;

export const useBlocks = () => {
  const [state, setState] = useState<BlockState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: Partial<BlockState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getLatestBlockHeight = async () => {
      try {
        const { data: total } = await axios.get(LATEST_BLOCK_HEIGHT);
        handleSetState({
          total,
        });
      } catch (error: any) {
        console.error(error.message);
      }
    };

    getLatestBlockHeight();
  }, [handleSetState]);

  const getBlocksByPage = useCallback(
    async (page: number) => {
      try {
        const { data: blocksData } = await axios.get(BLOCKS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
          },
        });

        const items = blocksData.map((x: any) => ({
          block: x.round,
          timestamp: x.timestamp,
          hash: x.hash,
          txs: x.txCount,
          shard: x.shard,
          size: x.sizeTxs,
        }));

        handleSetState({
          loading: false,
          items,
        });
      } catch (error: any) {
        console.error(error.message);
      }
    },
    [handleSetState]
  );

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState({
        page,
        loading: true,
      });
      await getBlocksByPage(page);
    },
    [getBlocksByPage, handleSetState]
  );

  const getBlocksInterval = useCallback(async () => {
    if (state.page === 0) {
      await getBlocksByPage(0);
    }
  }, [getBlocksByPage, state.page]);

  useInterval(getBlocksInterval, POLLING_INTERVAL);

  return {
    state,
    handlePageChangeCallback,
  };
};
