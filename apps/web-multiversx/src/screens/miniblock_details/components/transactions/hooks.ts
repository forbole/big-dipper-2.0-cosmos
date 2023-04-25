import axios from 'axios';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import type { TransactionState } from '@/screens/miniblock_details/components/transactions/types';
import { TRANSACTIONS, TRANSACTIONS_COUNT } from '@/api';

export const PAGE_SIZE = 10;

type TransactionsResult = Array<{
  txHash: string;
  senderShard: number;
  receiverShard: number;
  sender: string;
  receiver: string;
  timestamp: number;
  status: string;
}>;

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback(
    (stateChange: (prevState: TransactionState) => TransactionState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: transactionsData } = await axios.get<TransactionsResult>(TRANSACTIONS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            withLogs: false,
            miniBlockHash: router.query.hash,
          },
        });

        const items = transactionsData.map((x) => ({
          hash: x.txHash,
          fromShard: x.senderShard,
          toShard: x.receiverShard,
          from: x.sender,
          to: x.receiver,
          timestamp: x.timestamp,
          status: x.status,
        }));

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          items,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [handleSetState, router.query.hash]
  );

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState((prevState) => ({
        ...prevState,
        page,
        loading: true,
      }));
      await getTransactionsByPage(page);
    },
    [getTransactionsByPage, handleSetState]
  );

  useEffect(() => {
    const getLatestTransactionCount = async () => {
      try {
        const { data: total } = await axios.get(TRANSACTIONS_COUNT, {
          params: {
            miniBlockHash: router.query.hash,
          },
        });
        handleSetState((prevState) => ({
          ...prevState,
          total,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getLatestTransactionCount();
    getTransactionsByPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

  return {
    state,
    handlePageChangeCallback,
  };
};
