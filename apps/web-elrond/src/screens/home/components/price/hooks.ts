import axios from 'axios';
import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import type { PriceState } from '@/screens/home/components/price/types';
import { PRICE_HISTORY } from '@/api';

export const usePrice = () => {
  const [state, setState] = useState<PriceState>({
    items: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: PriceState) => PriceState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getPrices = async () => {
      try {
        const { data: prices } = await axios.get(PRICE_HISTORY);

        handleSetState((prevState) => ({
          ...prevState,
          items: prices.slice(-7),
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getPrices();
  }, [handleSetState]);

  const tickPriceFormatter = useCallback((num: number) => `$${numeral(num).format('0,0')}`, []);

  return {
    state,
    tickPriceFormatter,
  };
};
