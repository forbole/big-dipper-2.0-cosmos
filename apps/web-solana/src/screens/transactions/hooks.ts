import { useState } from 'react';
import * as R from 'ramda';
import { useInterval } from '@hooks';
import {
  useTransactionsLazyQuery,
  TransactionsQuery,
} from '@graphql/types';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    exists: true,
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // tx query
  // ================================

  const [getTransactions] = useTransactionsLazyQuery({
    variables: {
      limit: 25,
      offset: 0,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        items: formatTransactions(data),
      });
    },
  });

  const formatTransactions = (data: TransactionsQuery) => {
    return data.transactions.map((x) => {
      return ({
        slot: x.slot,
        signature: x.signature,
        numInstructions: x.numInstructions,
        success: x.success,
        timestamp: x.block.timestamp,
      });
    });
  };

  useInterval(getTransactions, 5000);

  return {
    state,
  };
};
