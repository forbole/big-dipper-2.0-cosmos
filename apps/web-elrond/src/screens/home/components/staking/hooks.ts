import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { ECONOMICS } from '@api';
import type { StakingState } from './types';

export const useStaking = () => {
  const [state, setState] = useState<StakingState>({
    staked: 0,
    circulatingSupply: 0,
    percentStaked: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useEffect(() => {
    const getEconomics = async () => {
      try {
        const { data: economicsData } = await axios.get(ECONOMICS);

        handleSetState({
          staked: economicsData.staked,
          circulatingSupply: economicsData.circulatingSupply,
          percentStaked: ((economicsData.staked * 100) / economicsData.circulatingSupply).toFixed(
            2
          ),
        });
      } catch (error) {
        console.log((error as any).message);
      }
    };

    getEconomics();
  }, [handleSetState]);

  return {
    state,
  };
};
