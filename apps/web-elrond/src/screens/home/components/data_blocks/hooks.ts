import { useEffect, useState } from 'react';
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

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    getValidatorsCount();
  }, []);

  const getValidatorsCount = async () => {
    try {
      const { data: validators } = await axios.get(STAKE);
      handleSetState({
        validators: {
          total: R.pathOr(0, ['totalValidators'], validators),
          active: R.pathOr(0, ['activeValidators'], validators),
        },
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  const getLatestBlockHeight = async () => {
    try {
      const { data: blockHeight } = await axios.get(LATEST_BLOCK_HEIGHT);
      handleSetState({
        blockHeight,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  const getTransactionCount = async () => {
    try {
      const { data: transactions } = await axios.get(TRANSACTIONS_COUNT);
      handleSetState({
        transactions,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  useInterval(getLatestBlockHeight, POLLING_INTERVAL);
  useInterval(getTransactionCount, POLLING_INTERVAL);

  return {
    state,
  };
};
