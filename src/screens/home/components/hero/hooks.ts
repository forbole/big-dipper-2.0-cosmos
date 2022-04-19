import { useState } from 'react';
import * as R from 'ramda';
import {
  useTokenPriceHistoryQuery,
} from '@graphql/types';
import { HeroState } from './types';

export const useHero = () => {
  const [state, setState] = useState<HeroState>({
    loading: true,
    exists: true,
    tokenPriceHistory: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useTokenPriceHistoryQuery({
    variables: {
      limit: 10,
      denom: 'erowan',
    },
    onCompleted: (data) => {
      const newState: any = {
        loading: false,
      };
      if (data.tokenPrice.length === 10) {
        newState.tokenPriceHistory = data.tokenPrice.reverse().map((x) => {
          return ({
            time: x.timestamp,
            value: x.price,
          });
        });
      }
      handleSetState(newState);
    },
    onError: (() => {
      handleSetState({
        loading: false,
      });
    }),
  });

  return {
    state,
  };
};
