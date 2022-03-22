import { useState } from 'react';
import * as R from 'ramda';
import {
  useTokenPriceHistoryQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
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
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    },
    onCompleted: (data) => {
      if (data.tokenPrice.length === 10) {
        handleSetState({
          loading: false,
          tokenPriceHistory: data.tokenPrice.reverse().map((x) => {
            return ({
              time: x.timestamp,
              value: x.price,
            });
          }),
        });
      }
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
