import { useState } from 'react';
import * as R from 'ramda';
import {
  useParamsQuery,
  ParamsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import {
  ParamsState,
} from './types';

const initialState = {
  loading: true,
  exists: true,
  staking: {
    bondDenom: chainConfig.primaryTokenUnit,
    unbondingTime: 0,
    maxEntries: 0,
    historicalEntries: 0,
    maxValidators: 0,
  },
  slashing: {
    downtimeJailDuration: 0,
    minSignedPerWindow: 0,
    signedBlockWindow: 0,
    slashFractionDoubleSign: 0,
    slashFractionDowntime: 0,
  },
};

export const useParams = () => {
  const [state, setState] = useState<ParamsState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // param query
  // ================================
  useParamsQuery({
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        ...formatParam(data),
      });
    },
  });

  const formatParam = (data: ParamsQuery) => {
    const results: any = {};

    // ================================
    // staking
    // ================================
    const formatStaking = () => {
      if (data.stakingParams.length) {
        const stakingParamsRaw = data.stakingParams[0];
        return {
          bondDenom: stakingParamsRaw.bondDenom,
          unbondingTime: stakingParamsRaw.unbondingTime,
          maxEntries: stakingParamsRaw.maxEntries,
          historicalEntries: stakingParamsRaw.historicalEntries,
          maxValidators: stakingParamsRaw.maxValidators,
        };
      }

      return initialState.staking;
    };

    results.staking = formatStaking();

    // ================================
    // slashing
    // ================================
    const formatSlashing = () => {
      if (data.slashingParams.length) {
        const slashingParamsRaw = data.slashingParams[0];
        return {
          downtimeJailDuration: slashingParamsRaw.downtimeJailDuration,
          minSignedPerWindow: slashingParamsRaw.minSignedPerWindow,
          signedBlockWindow: slashingParamsRaw.signedBlockWindow,
          slashFractionDoubleSign: slashingParamsRaw.slashFractionDoubleSign,
          slashFractionDowntime: slashingParamsRaw.slashFractionDowntime,
        };
      }

      return initialState.slashing;
    };

    results.slashing = formatSlashing();

    return results;
  };

  return {
    state,
  };
};
