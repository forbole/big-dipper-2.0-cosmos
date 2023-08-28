import numeral from 'numeral';
import { useState } from 'react';
import { TokenomicsQuery, useTokenomicsQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import chainConfig from '@/chainConfig';

type TokenomicsState = {
  bonded: number;
  unbonded: number;
  unbonding: number;
  total: number;
  denom: string;
};

const formatTokenomics = (data: TokenomicsQuery, state: TokenomicsState) => {
  const { primaryTokenUnit } = chainConfig();
  const results = { ...state };
  // const stakingParams = StakingParams.fromJson(data?.stakingParams?.[0]?.params ?? {});
  results.denom = primaryTokenUnit;

  const [total] =
    (data?.supply?.[0]?.coins as MsgCoin[])?.filter((x) => x.denom === results.denom) ?? [];
  if (total) {
    results.total = numeral(formatToken(total.amount, total.denom).value).value() ?? 0;
  }

  const { bonded } = state;
  results.bonded = numeral(formatToken(bonded, results.denom).value).value() ?? 0;

  const unbonding = state.bonded;
  results.unbonding = numeral(formatToken(unbonding, results.denom).value).value() ?? 0;

  const unbonded = results.total - results.unbonding - results.bonded;
  results.unbonded = unbonded;

  return results;
};

export const useTokenomics = () => {
  const [state, setState] = useState<TokenomicsState>({
    bonded: 0,
    unbonded: 0,
    unbonding: 0,
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
