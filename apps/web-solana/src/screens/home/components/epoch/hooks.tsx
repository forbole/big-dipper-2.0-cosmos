import { useState } from 'react';
import * as R from 'ramda';
import {
  useEpochQuery,
  EpochQuery,
} from '@graphql/types';
import Big from 'big.js';
import { EpochState } from './types';

export const useEpoch = () => {
  const [state, setState] = useState<EpochState>({
    epochRate: '0',
    epochNumber: '0',
    epochHours: 0,
    epochMinutes: 0,
  });

  useEpochQuery({
    onCompleted: (data) => {
      setState(formatEpoch(data));
    },
  });

  const formatEpoch = (data: EpochQuery): EpochState => {
    const SLOTS_PER_EPOCH = 432000;
    const averageSlotTime = Big(R.pathOr(0, ['averageSlotTimePerHour', 0, 'averageTime'], data)).toPrecision(1);
    const slot = R.pathOr(0, ['block', 0, 'slot'], data);

    // epoch number
    const epochNumber = Big(slot).div(SLOTS_PER_EPOCH).toFixed(0, Big.roundDown);

    // epoch %
    const nextEpochSlot = Big(epochNumber).plus(1).times(SLOTS_PER_EPOCH).toString();

    const epochDone = Big(slot).minus(Big(epochNumber).times(SLOTS_PER_EPOCH)).toString();
    const epochRate = Big(epochDone).div(SLOTS_PER_EPOCH).times(100).toPrecision(2);

    // epoch time
    const epochTimeRaw = Big(nextEpochSlot).minus(slot).times(averageSlotTime).toNumber();
    const epochTimeHour = Math.floor(epochTimeRaw / (60 * 60));
    const epochTimeMinute = Math.floor((epochTimeRaw % (60 * 60)) / 60);

    return {
      epochRate,
      epochNumber,
      epochHours: epochTimeHour,
      epochMinutes: epochTimeMinute,
    };
  };

  return {
    state,
  };
};
