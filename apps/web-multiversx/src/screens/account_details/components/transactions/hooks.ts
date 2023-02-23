import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import { ACCOUNT_DETAILS_TRANSACTIONS, ACCOUNT_DETAILS_TRANSACTIONS_COUNT } from '@/api';
import type { TransactionState } from '@/screens/account_details/components/transactions/types';

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
        const { data: transactionsData } = await axios.get<TransactionsResult>(
          ACCOUNT_DETAILS_TRANSACTIONS(router.query.address as string),
          {
            params: {
              from: page * PAGE_SIZE,
              size: PAGE_SIZE,
              withLogs: false,
            },
          }
        );

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
    [handleSetState, router.query.address]
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
        const { data: total } = await axios.get(
          ACCOUNT_DETAILS_TRANSACTIONS_COUNT(router.query.address as string)
        );
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
