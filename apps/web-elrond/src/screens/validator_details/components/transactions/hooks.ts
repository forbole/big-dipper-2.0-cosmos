import { useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { ACCOUNT_DETAILS_TRANSACTIONS, ACCOUNT_DETAILS_TRANSACTIONS_COUNT } from '@api';
import { TransactionState } from './types';

export const PAGE_SIZE = 10;

export const useTransactions = (provider: string) => {
  const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  useEffect(() => {
    getLatestTransactionCount();
    getTransactionsByPage(0);
  }, [provider]);

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
      const { data: total } = await axios.get(ACCOUNT_DETAILS_TRANSACTIONS_COUNT(provider));
      handleSetState({
        total,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  const getTransactionsByPage = async (page: number) => {
    try {
      const { data: transactionsData } = await axios.get(ACCOUNT_DETAILS_TRANSACTIONS(provider), {
        params: {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
          withLogs: false,
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
