import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, TRANSACTIONS, TRANSACTIONS_COUNT } from '@api';
import { useInterval } from 'ui/hooks';
import type { TransactionState } from './types';

export const PAGE_SIZE = 25;

export const useBlocks = () => {
  const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useEffect(() => {
    const getLatestTransactionCount = async () => {
      try {
        const { data: total } = await axios.get(TRANSACTIONS_COUNT);
        handleSetState({
          total,
        });
      } catch (error) {
        console.error((error as any).message);
      }
    };

    getLatestTransactionCount();
  }, [handleSetState]);

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: transactionsData } = await axios.get(TRANSACTIONS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
          },
        });

        const items = transactionsData.map((x: any) => {
          return {
            hash: x.txHash,
            fromShard: x.senderShard,
            toShard: x.receiverShard,
            from: x.sender,
            to: x.receiver,
            timestamp: x.timestamp,
            status: x.status,
          };
        });

        handleSetState({
          loading: false,
          items,
        });
      } catch (error) {
        console.error((error as any).message);
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
      await getTransactionsByPage(page);
    },
    [getTransactionsByPage, handleSetState]
  );

  const getTransactionsInterval = useCallback(async () => {
    if (state.page === 0) {
      await getTransactionsByPage(0);
    }
  }, [getTransactionsByPage, state.page]);

  useInterval(getTransactionsInterval, POLLING_INTERVAL);

  return {
    state,
    handlePageChangeCallback,
  };
};
