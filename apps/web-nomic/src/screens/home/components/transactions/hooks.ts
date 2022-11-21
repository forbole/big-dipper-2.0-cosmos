import { useState } from 'react';
import {
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@graphql/types/general_types';
import { convertMsgType } from 'ui/utils/convert_msg_type';
import type { TransactionsState } from './types';

export const useTransactions = () => {
  const [state, setState] = useState<TransactionsState>({
    items: [],
  });

  // ================================
  // txs subscription
  // ================================
  useTransactionsListenerSubscription({
    onData: (data) => {
      setState({
        items: data.data.data ? (formatTransactions(data.data.data) as any) : [],
      });
    },
  });

  const formatTransactions = (data: TransactionsListenerSubscription) =>
    data.transactions.map((x: any) => ({
      height: x.height,
      hash: x.hash,
      timestamp: x.block.timestamp,
    }));

  return {
    state,
  };
};
