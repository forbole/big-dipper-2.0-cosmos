import * as R from 'ramda';
import { useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useTokenPriceHistoryQuery } from '@/graphql/types/general_types';
import type { HeroState } from '@/screens/home/components/hero/types';

const { primaryTokenUnit, tokenUnits } = chainConfig();

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
      limit: 48,
      denom: tokenUnits?.[primaryTokenUnit]?.display,
    },
    onCompleted: (data) => {
      handleSetState((prevState) => {
        const newState = {
          ...prevState,
          loading: false,
          tokenPriceHistory:
            data.tokenPrice.length === 48
              ? [...data.tokenPrice].reverse().map((x) => ({
                  time: x.timestamp,
                  value: x.price,
                }))
              : prevState.tokenPriceHistory,
        };
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    onError: () => {
      handleSetState((prevState) => ({ ...prevState, loading: false }));
    },
  });

  return {
    state,
  };
};
