import * as R from 'ramda';
import { useState } from 'react';
import {
  TransactionsListenerSubscription,
  useTransactionsListenerSubscription,
} from '@/graphql/types/general_types';
import type { TransactionsState } from '@/screens/home/components/transactions/types';

const formatTransactions = (data: TransactionsListenerSubscription) =>
  data.transactions.map((x) => ({
    height: x.height,
    hash: x.hash,
    timestamp: x.block.timestamp,
  }));

export const useTransactions = () => {
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    items: [],
  });

  // ================================
  // txs subscription
  // ================================
  useTransactionsListenerSubscription({
    onData: (data) => {
      setState((prevState) => {
        const newState = {
          loading: false,
          items: data.data.data ? formatTransactions(data.data.data) : [],
        };
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
  });

  return {
    state,
  };
};
