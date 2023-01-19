import axios from 'axios';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import { LATEST_BLOCK_HEIGHT, POLLING_INTERVAL, STAKE, TRANSACTIONS_COUNT } from '@/api';
import { useInterval } from '@/hooks/use_interval';
import type { DataBlockState } from '@/screens/home/components/data_blocks/types';

export const useDataBlocks = () => {
  const [state, setState] = useState<DataBlockState>({
    blockHeight: 0,
    transactions: 0,
    validators: {
      total: 0,
      active: 0,
    },
  });

  const handleSetState = useCallback(
    (stateChange: (prevState: DataBlockState) => DataBlockState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getValidatorsCount = async () => {
      try {
        const { data: validators } = await axios.get(STAKE);
        handleSetState((prevState) => ({
          ...prevState,
          validators: {
            total: validators?.totalValidators ?? 0,
            active: validators?.activeValidators ?? 0,
          },
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getValidatorsCount();
  }, [handleSetState]);

  const getLatestBlockHeight = useCallback(async () => {
    try {
      const { data: blockHeight } = await axios.get(LATEST_BLOCK_HEIGHT);
      handleSetState((prevState) => ({
        ...prevState,
        blockHeight,
      }));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [handleSetState]);

  const getTransactionCount = useCallback(async () => {
    try {
      const { data: transactions } = await axios.get(TRANSACTIONS_COUNT);
      handleSetState((prevState) => ({
        ...prevState,
        transactions,
      }));
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
