import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { ACCOUNT_DETAILS_TRANSACTIONS, ACCOUNT_DETAILS_TRANSACTIONS_COUNT } from '@api';
import type { TransactionState } from './types';

export const PAGE_SIZE = 10;

export const useTransactions = (provider: string) => {
    const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: Partial<TransactionState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: transactionsData } = await axios.get(ACCOUNT_DETAILS_TRANSACTIONS(provider), {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            withLogs: false,
          },
        });

        const items = transactionsData.map((x: any) => ({
          hash: x.txHash,
          fromShard: x.senderShard,
          toShard: x.receiverShard,
          from: x.sender,
          to: x.receiver,
          timestamp: x.timestamp,
          status: x.status,
        }));

        handleSetState({
          loading: false,
          items,
        });
      } catch (error: any) {
        console.error(error.message);
      }
    },
    [handleSetState, provider]
  );

  useEffect(() => {
    const getLatestTransactionCount = async () => {
      try {
        const { data: total } = await axios.get(ACCOUNT_DETAILS_TRANSACTIONS_COUNT(provider));
        handleSetState({
          total,
        });
      } catch (error: any) {
        console.error(error.message);
      }
    };

    getLatestTransactionCount();
    getTransactionsByPage(0);
  }, [getTransactionsByPage, handleSetState, provider]);

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

  return {
    state,
    handlePageChangeCallback,
  };
};
