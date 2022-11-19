import { useCallback, useEffect, useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import axios from 'axios';
import { PRICE_HISTORY } from '@api';
import type { PriceState } from './types';

export const usePrice = () => {
  const [state, setState] = useState<PriceState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useEffect(() => {
    const getPrices = async () => {
      try {
        const { data: prices } = await axios.get(PRICE_HISTORY);

        handleSetState({
          items: prices.slice(-7),
        });
      } catch (error) {
        console.log((error as any).message);
      }
    };

    getPrices();
  }, [handleSetState]);

  const tickPriceFormatter = useCallback((num: number) => {
    return `$${numeral(num).format('0,0')}`;
  }, []);

  return {
    state,
    tickPriceFormatter,
  };
};
