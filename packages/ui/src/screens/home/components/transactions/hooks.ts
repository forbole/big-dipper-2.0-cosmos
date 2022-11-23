import { useState } from 'react';
import {
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@/graphql/types/general_types';
import { convertMsgType } from '@/utils/convert_msg_type';
import * as R from 'ramda';
import type { TransactionsState } from '@/screens/home/components/transactions/types';

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
    data.transactions?.map((x: any) => {
      const msgType =
        x.messages?.map((eachMsg: any) => {
          const eachMsgType = R.pathOr('none type', ['@type'], eachMsg);
          return eachMsgType ?? '';
        }) ?? [];
      const convertedMsgType = convertMsgType(msgType);

      return {
        height: x.height,
        hash: x.hash,
        type: convertedMsgType,
        success: x.success,
        timestamp: x.block.timestamp,
        messages: x.messages.length,
      };
    }) ?? [];

  return {
    state,
  };
};
