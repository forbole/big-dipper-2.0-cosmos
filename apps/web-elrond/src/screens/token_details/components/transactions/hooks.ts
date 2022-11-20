import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TRANSACTIONS_COUNT, TRANSACTIONS } from '@api';
import type { TransactionState } from './types';

export const PAGE_SIZE = 10;

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: transactionsData } = await axios.get(TRANSACTIONS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            withLogs: false,
            token: router.query.token as string,
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
      } catch (error) {
        console.error((error as any).message);
      }
    },
    [handleSetState, router.query.token]
  );

  useEffect(() => {
    const getLatestTransactionCount = async () => {
      try {
        const { data: total } = await axios.get(TRANSACTIONS_COUNT, {
          params: {
            token: router.query.token as string,
          },
        });
        handleSetState({
          total,
        });
      } catch (error) {
        console.error((error as any).message);
      }
    };

    getLatestTransactionCount();
    getTransactionsByPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

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
