import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL, LATEST_BLOCK_HEIGHT, TRANSACTIONS_COUNT, STAKE } from '@api';
import { useInterval } from 'ui/hooks';
import type { DataBlockState } from './types';

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
            total: R.pathOr(0, ['totalValidators'], validators),
            active: R.pathOr(0, ['activeValidators'], validators),
          },
        });
      } catch (error: any) {
        console.error(error.message);
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
    } catch (error: any) {
      console.error(error.message);
    }
  }, [handleSetState]);

  const getTransactionCount = useCallback(async () => {
    try {
      const { data: transactions } = await axios.get(TRANSACTIONS_COUNT);
      handleSetState({
        transactions,
      });
    } catch (error: any) {
      console.error(error.message);
    }
  }, [handleSetState]);

  useInterval(getLatestBlockHeight, POLLING_INTERVAL);
  useInterval(getTransactionCount, POLLING_INTERVAL);

  return {
    state,
  };
};
