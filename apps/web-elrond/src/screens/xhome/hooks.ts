import { useState, useEffect } from 'react';
import axios from 'axios';
import { PRICE_HISTORY } from '@api';
import * as R from 'ramda';
import { HomeState } from './types';

export const useHome = () => {
  const [state, setState] = useState<HomeState>({
    loading: true,
    exists: true,
    price: [],
  });

  useEffect(() => {
    // moved the prices up a level as they load the longest
    // and we can use it as a loading indicator
    getPrices();
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const getPrices = async () => {
    try {
      const { data: prices } = await axios.get(PRICE_HISTORY);

      handleSetState({
        loading: false,
        price: prices.slice(-7),
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  return {
    state,
  };
};
