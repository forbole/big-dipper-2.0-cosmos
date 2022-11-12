import { useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { STATS } from '@api';
import { EpochState } from './types';

export const useEpoch = () => {
  const [state, setState] = useState<EpochState>({
    epoch: 0,
    roundsPassed: 0,
    roundsPerEpoch: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    getEpoch();
  }, []);

  const getEpoch = async () => {
    try {
      const { data: statsData } = await axios.get(STATS);

      handleSetState({
        epoch: statsData.epoch,
        roundsPassed: statsData.roundsPassed,
        roundsPerEpoch: statsData.roundsPerEpoch,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  };

  return {
    state,
  };
};
