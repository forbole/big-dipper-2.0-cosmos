import * as R from 'ramda';
import { useState } from 'react';
import {
  TransactionsListenerSubscription,
  useTransactionsListenerSubscription,
} from '@/graphql/types/general_types';
import type { TransactionsState } from '@/screens/home/components/transactions/types';
import { convertMsgType } from '@/utils/convert_msg_type';

const formatTransactions = (data: TransactionsListenerSubscription) =>
  data.transactions?.map((x) => {
    const msgType =
      x.messages?.map((eachMsg: object) => {
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
