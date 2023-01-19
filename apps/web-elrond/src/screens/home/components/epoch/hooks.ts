import axios from 'axios';
import * as R from 'ramda';
import { useEffect, useState } from 'react';
import type { EpochState } from '@/screens/home/components/epoch/types';
import { STATS } from '@/api';

export const useEpoch = () => {
  const [state, setState] = useState<EpochState>({
    epoch: 0,
    roundsPassed: 0,
    roundsPerEpoch: 0,
  });

  useEffect(() => {
    const handleSetState = (stateChange: (prevState: EpochState) => EpochState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    };

    const getEpoch = async () => {
      try {
        const { data: statsData } = await axios.get(STATS);

        handleSetState((prevState) => ({
          ...prevState,
          epoch: statsData.epoch,
          roundsPassed: statsData.roundsPassed,
          roundsPerEpoch: statsData.roundsPerEpoch,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getEpoch();
  }, []);

  return {
    state,
  };
};
