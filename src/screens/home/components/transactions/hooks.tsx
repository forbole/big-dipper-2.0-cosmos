import { useState } from 'react';
import {
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@graphql/types';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const [state, setState] = useState<TransactionsState>({
    items: [],
  });

  // ================================
  // txs subscription
  // ================================
  useTransactionsListenerSubscription({
    onSubscriptionData: (data) => {
      setState({
        items: formatTransactions(data.subscriptionData.data),
      });
    },
  });

  const formatTransactions = (data: TransactionsListenerSubscription) => {
    return data.transactions.map((x) => {
      return ({
        height: x.height,
        hash: x.hash,
        success: x.success,
        timestamp: x.block.timestamp,
        messages: x.messages.length,
      });
    });
  };

  return {
    state,
  };
};
