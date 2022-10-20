import {
  useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import {
  TRANSACTIONS,
  TRANSACTIONS_COUNT,
} from '@api';
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
  }, [router.query.hash]);

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
          miniBlockHash: router.query.hash,
        },
      });
      handleSetState({
        total,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTransactionsByPage = async (page: number) => {
    try {
      const { data: transactionsData } = await axios.get(
        TRANSACTIONS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            withLogs: false,
            miniBlockHash: router.query.hash,
          },
        },
      );

      const items = transactionsData.map((x) => {
        return ({
          hash: x.txHash,
          fromShard: x.senderShard,
          toShard: x.receiverShard,
          from: x.sender,
          to: x.receiver,
          timestamp: x.timestamp,
          status: x.status,
        });
      });

      handleSetState({
        loading: false,
        items,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return ({
    state,
    handlePageChangeCallback,
  });
};
