import axios from 'axios';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { POLLING_INTERVAL, TRANSACTIONS } from '@/api';
import { useInterval } from '@/hooks/use_interval';
import type { TransactionState } from '@/screens/home/components/transactions/types';

export const PAGE_SIZE = 7;

type TransactionsResult = Array<{
  txHash: string;
  sender: string;
  receiver: string;
  timestamp: number;
  status: string;
}>;

export const useBlocks = () => {
  const [state, setState] = useState<TransactionState>({
    items: [],
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

  const getTransactionsByPage = useCallback(async () => {
    try {
      const { data: transactionsData } = await axios.get<TransactionsResult>(TRANSACTIONS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = transactionsData.map((x) => ({
        hash: x.txHash,
        from: x.sender,
        to: x.receiver,
        timestamp: x.timestamp,
        status: x.status,
      }));

      handleSetState((prevState) => ({
        ...prevState,
        items,
      }));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  useInterval(getTransactionsByPage, POLLING_INTERVAL);

  return {
    state,
  };
};
