import { useCallback, useState } from 'react';
import * as R from 'ramda';
import { useTokenPriceHistoryQuery } from '@graphql/types/general_types';
import chainConfig from 'ui/chainConfig';
import type { HeroState } from './types';

export const useHero = () => {
  const [state, setState] = useState<HeroState>({
    loading: true,
    exists: true,
    tokenPriceHistory: [],
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useTokenPriceHistoryQuery({
    variables: {
      limit: 10,
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    },
    onCompleted: (data) => {
      const newState: any = {
        loading: false,
      };
      if (data.tokenPrice.length === 10) {
        newState.tokenPriceHistory = data.tokenPrice.reverse().map((x) => ({
            time: x.timestamp,
            value: x.price,
          }));
      }
      handleSetState(newState);
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
  });

  return {
    state,
  };
};
