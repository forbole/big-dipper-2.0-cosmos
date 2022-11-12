import { useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TRANSACTIONS_COUNT, TRANSACTIONS } from '@api';
import { TransactionState } from './types';

export const PAGE_SIZE = 10;

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  useEffect(() => {
    getLatestTransactionCount();
    getTransactionsByPage(0);
  }, [router.query.token]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handlePageChangeCallback = async (page: number, _rowsPerPage: number) => {
    handleSetState({
      page,
      loading: true,
    });
    await getTransactionsByPage(page);
  };

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
      console.log((error as any).message);
    }
  };

  const getTransactionsByPage = async (page: number) => {
    try {
      const { data: transactionsData } = await axios.get(TRANSACTIONS, {
        params: {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
          withLogs: false,
          token: router.query.token as string,
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
      console.log((error as any).message);
    }
  };

  return {
    state,
    handlePageChangeCallback,
  };
};
