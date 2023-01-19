import axios from 'axios';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import type { StakingState } from '@/screens/home/components/staking/types';
import { ECONOMICS } from '@/api';

export const useStaking = () => {
  const [state, setState] = useState<StakingState>({
    staked: 0,
    circulatingSupply: 0,
    percentStaked: 0,
  });

  const handleSetState = useCallback((stateChange: (prevState: StakingState) => StakingState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getEconomics = async () => {
      try {
        const { data: economicsData } = await axios.get(ECONOMICS);

        handleSetState((prevState) => ({
          ...prevState,
          staked: economicsData.staked,
          circulatingSupply: economicsData.circulatingSupply,
          percentStaked: parseFloat(
            ((economicsData.staked * 100) / economicsData.circulatingSupply).toFixed(2)
          ),
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getEconomics();
  }, [handleSetState]);

  return {
    state,
  };
};
