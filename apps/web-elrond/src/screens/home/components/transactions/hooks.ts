import { useCallback, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, TRANSACTIONS } from '@/api';
import { useInterval } from '@/hooks';
import type { TransactionState } from '@/screens/home/components/transactions/types';

export const PAGE_SIZE = 7;

export const useBlocks = () => {
  const [state, setState] = useState<TransactionState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: Partial<TransactionState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getTransactionsByPage = useCallback(async () => {
    try {
      const { data: transactionsData } = await axios.get(TRANSACTIONS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = transactionsData.map((x: any) => ({
        hash: x.txHash,
        from: x.sender,
        to: x.receiver,
        timestamp: x.timestamp,
        status: x.status,
      }));

      handleSetState({
        items,
      });
    } catch (error: any) {
      console.error(error.message);
    }
  }, [handleSetState]);

  useInterval(getTransactionsByPage, POLLING_INTERVAL);

  return {
    state,
  };
};
