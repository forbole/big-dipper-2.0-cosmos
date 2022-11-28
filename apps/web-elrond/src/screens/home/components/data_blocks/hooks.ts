import { LATEST_BLOCK_HEIGHT, POLLING_INTERVAL, STAKE, TRANSACTIONS_COUNT } from '@/api';
import { useInterval } from '@/hooks';
import type { DataBlockState } from '@/screens/home/components/data_blocks/types';
import axios from 'axios';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

export const useDataBlocks = () => {
  const [state, setState] = useState<DataBlockState>({
    blockHeight: 0,
    transactions: 0,
    validators: {
      total: 0,
      active: 0,
    },
  });

  const handleSetState = useCallback((stateChange: Partial<DataBlockState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getValidatorsCount = async () => {
      try {
        const { data: validators } = await axios.get(STAKE);
        handleSetState({
          validators: {
            total: validators?.totalValidators ?? 0,
            active: validators?.activeValidators ?? 0,
          },
        });
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getValidatorsCount();
  }, [handleSetState]);

  const getLatestBlockHeight = useCallback(async () => {
    try {
      const { data: blockHeight } = await axios.get(LATEST_BLOCK_HEIGHT);
      handleSetState({
        blockHeight,
      });
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  const getTransactionCount = useCallback(async () => {
    try {
      const { data: transactions } = await axios.get(TRANSACTIONS_COUNT);
      handleSetState({
        transactions,
      });
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  useInterval(getLatestBlockHeight, POLLING_INTERVAL);
  useInterval(getTransactionCount, POLLING_INTERVAL);

  return {
    state,
  };
};
