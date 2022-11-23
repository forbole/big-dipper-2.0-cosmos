import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { ECONOMICS } from '@/api';
import type { StakingState } from '@/screens/home/components/staking/types';

export const useStaking = () => {
  const [state, setState] = useState<StakingState>({
    staked: 0,
    circulatingSupply: 0,
    percentStaked: 0,
  });

  const handleSetState = useCallback((stateChange: Partial<StakingState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
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
      } catch (error: any) {
        console.error(error.message);
      }
    };

    getEconomics();
  }, [handleSetState]);

  return {
    state,
  };
};
