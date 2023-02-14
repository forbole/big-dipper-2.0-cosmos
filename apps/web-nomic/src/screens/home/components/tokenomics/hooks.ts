import numeral from 'numeral';
import * as R from 'ramda';
import { useState } from 'react';
import { TokenomicsQuery, useTokenomicsQuery } from '@/graphql/types/general_types';
import { StakingParams } from '@/models';
import { formatToken } from '@/utils/format_token';

type TokenomicsState = {
  bonded: number;
  unbonded: number;
  total: number;
  denom: string;
};

const formatTokenomics = (data: TokenomicsQuery, state: TokenomicsState) => {
  const results = { ...state };
  const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
  results.denom = stakingParams.bondDenom;

  const [total] = ((data?.supply?.[0]?.coins as MsgCoin[]) ?? []).filter(
    (x) => x.denom === results.denom
  );
  if (total) {
    results.total = numeral(formatToken(total.amount, total.denom).value).value() ?? 0;
  }

  const bonded = data?.stakingPool?.[0]?.bonded ?? state.bonded;
  results.bonded = numeral(formatToken(bonded, results.denom).value).value() ?? 0;

  const unbonded = data?.stakingPool?.[0]?.unbonded ?? state.unbonded;
  results.unbonded = numeral(formatToken(unbonded, results.denom).value).value() ?? 0;

  return results;
};

export const useTokenomics = () => {
  const [state, setState] = useState<TokenomicsState>({
    bonded: 0,
    unbonded: 0,
    total: 0,
    denom: '',
  });

  useTokenomicsQuery({
    onCompleted: (data) => {
      setState(formatTokenomics(data, state));
    },
  });

  return {
    state,
  };
};
