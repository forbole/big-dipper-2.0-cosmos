import { useTokenPriceHistoryQuery } from '@/graphql/types/general_types';
import type { HeroState } from '@/screens/home/components/hero/types';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

export const useHero = () => {
  const [state, setState] = useState<HeroState>({
    loading: true,
    exists: true,
    tokenPriceHistory: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: HeroState) => HeroState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useTokenPriceHistoryQuery({
    variables: {
      limit: 10,
      denom: 'erowan',
    },
    onCompleted: (data) => {
      const newState: Partial<HeroState> = {
        loading: false,
      };
      if (data.tokenPrice.length === 10) {
        newState.tokenPriceHistory = data.tokenPrice.reverse().map((x) => ({
          time: x.timestamp,
          value: x.price,
        }));
      }
      handleSetState((prevState) => ({ ...prevState, ...newState }));
    },
    onError: () => {
      handleSetState((prevState) => ({ ...prevState, loading: false }));
    },
  });

  return {
    state,
  };
};
