import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import { ParamsQuery, useParamsQuery } from '@/graphql/types/general_types';
import { DistributionParams, GovParams, MintParams, SlashingParams, StakingParams } from '@/models';
import GasPriceParams from '@/models/gas_price_params';
import InflationRateParams from '@/models/inflation_rate_params';
import type { ParamsState } from '@/screens/params/types';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();

const initialState: ParamsState = {
  loading: true,
  exists: true,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null,
  inflationRate: null,
  gasPrice: null,
};

// ================================
// staking
// ================================
const formatStaking = (data: ParamsQuery) => {
  if (data.stakingParams.length) {
    const stakingParamsRaw = StakingParams.fromJson(data?.stakingParams?.[0]?.params ?? {});
    return {
      bondDenom: stakingParamsRaw.bondDenom,
      unbondingTime: stakingParamsRaw.unbondingTime,
      maxEntries: stakingParamsRaw.maxEntries,
      historicalEntries: stakingParamsRaw.historicalEntries,
      maxValidators: stakingParamsRaw.maxValidators,
    };
  }

  return null;
};

// ================================
// slashing
// ================================
const formatSlashing = (data: ParamsQuery) => {
  if (data.slashingParams.length) {
    const slashingParamsRaw = SlashingParams.fromJson(data?.slashingParams?.[0]?.params ?? {});
    return {
      downtimeJailDuration: slashingParamsRaw.downtimeJailDuration,
      minSignedPerWindow: slashingParamsRaw.minSignedPerWindow,
      signedBlockWindow: slashingParamsRaw.signedBlockWindow,
      slashFractionDoubleSign: slashingParamsRaw.slashFractionDoubleSign,
      slashFractionDowntime: slashingParamsRaw.slashFractionDowntime,
    };
  }
  return null;
};

// ================================
// minting
// ================================
const formatMint = (data: ParamsQuery) => {
  if (data.mintParams.length) {
    const mintParamsRaw = MintParams.fromJson(data?.mintParams?.[0]?.params ?? {});

    return {
      blocksPerYear: mintParamsRaw.blocksPerYear,
      goalBonded: mintParamsRaw.goalBonded,
      inflationMax: mintParamsRaw.inflationMax,
      inflationMin: mintParamsRaw.inflationMin,
      inflationRateChange: mintParamsRaw.inflationRateChange,
      mintDenom: mintParamsRaw.mintDenom,
    };
  }

  return null;
};

// ================================
// distribution
// ================================

const formatDistribution = (data: ParamsQuery) => {
  if (data.distributionParams.length) {
    const distributionParamsRaw = DistributionParams.fromJson(
      data?.distributionParams?.[0]?.params ?? {}
    );
    return {
      baseProposerReward: distributionParamsRaw.baseProposerReward,
      bonusProposerReward: distributionParamsRaw.bonusProposerReward,
      communityTax: distributionParamsRaw.communityTax,
      withdrawAddressEnabled: distributionParamsRaw.withdrawAddressEnabled,
    };
  }

  return null;
};

// ================================
// gov
// ================================

const formatGov = (data: ParamsQuery) => {
  if (data.govParams.length) {
    const govParamsRaw = GovParams.fromJson(data?.govParams?.[0] ?? {});
    return {
      minDeposit: formatToken(
        govParamsRaw.depositParams.minDeposit?.[0]?.amount ?? 0,
        govParamsRaw.depositParams.minDeposit?.[0]?.denom ?? primaryTokenUnit
      ),
      maxDepositPeriod: govParamsRaw.depositParams.maxDepositPeriod,
      quorum: numeral(numeral(govParamsRaw.tallyParams.quorum).format('0.[00]')).value() ?? 0,
      threshold: numeral(numeral(govParamsRaw.tallyParams.threshold).format('0.[00]')).value() ?? 0,
      vetoThreshold:
        numeral(numeral(govParamsRaw.tallyParams.vetoThreshold).format('0.[00]')).value() ?? 0,
      votingPeriod: govParamsRaw.votingParams.votingPeriod,
    };
  }

  return null;
};

// ================================
// inflation rate
// ================================
const formatInflationRate = (data: ParamsQuery) => {
  if (data.inflationRateParams.length) {
    const inflationRateParamsRaw = InflationRateParams.fromJson(
      data?.inflationRateParams?.[0]?.inflation
    );
    const inflationRateParamsData = inflationRateParamsRaw.inflation;
    return inflationRateParamsData;
  }

  return null;
};

// ================================
// gas price
// ================================
const formatGasPrice = (data: ParamsQuery) => {
  if (data.gasPriceParams.length) {
    const gasPriceParamsRaw = GasPriceParams.fromJson(data?.gasPriceParams?.[0]?.gas_prices);
    const gasPriceParamsData = gasPriceParamsRaw.gasPrice;
    return gasPriceParamsData;
  }

  return null;
};

const formatParam = (data: ParamsQuery) => {
  const results: Partial<ParamsState> = {};

  results.staking = formatStaking(data);

  results.slashing = formatSlashing(data);

  results.minting = formatMint(data);

  results.distribution = formatDistribution(data);

  results.gov = formatGov(data);

  results.inflationRate = formatInflationRate(data);

  results.gasPrice = formatGasPrice(data);

  return results;
};

export const useParams = () => {
  const [state, setState] = useState<ParamsState>(initialState);

  const handleSetState = useCallback((stateChange: (prevState: ParamsState) => ParamsState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ================================
  // param query
  // ================================
  useParamsQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        ...formatParam(data),
      }));
    },
    onError: () => {
      handleSetState((prevState) => ({ ...prevState, loading: false }));
    },
  });

  return {
    state,
  };
};
