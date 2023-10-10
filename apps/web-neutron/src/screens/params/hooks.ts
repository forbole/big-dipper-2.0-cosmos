import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import { ParamsQuery, useParamsQuery } from '@/graphql/types/provider_types';
import { DistributionParams, GovParams, MintParams, SlashingParams, StakingParams } from '@/models';
import type { ParamsState } from '@/screens/params/types';
import { formatToken } from '@/utils/format_token';
import CCVConsumerParams from '../../models/ccv_consumer_params';

const { primaryTokenUnit } = chainConfig();

const initialState: ParamsState = {
  loading: true,
  exists: true,
  ccvConsumer: null,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null,
};

// ================================
// staking
// ================================
const formatStaking = (data: ParamsQuery) => {
  if (data.bdjuno_provider?.staking_params.length) {
    const stakingParamsRaw = StakingParams.fromJson(
      data?.bdjuno_provider?.staking_params?.[0]?.params ?? {}
    );
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
  if (data.bdjuno_provider?.staking_params.length) {
    const slashingParamsRaw = SlashingParams.fromJson(
      data?.bdjuno_provider?.staking_params?.[0]?.params ?? {}
    );
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
  if (data.bdjuno_provider?.mint_params.length) {
    const mintParamsRaw = MintParams.fromJson(
      data?.bdjuno_provider?.mint_params?.[0]?.params ?? {}
    );

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
  if (data.bdjuno_provider?.distribution_params.length) {
    const distributionParamsRaw = DistributionParams.fromJson(
      data?.bdjuno_provider?.distribution_params?.[0]?.params ?? {}
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
// distribution
// ================================

const formatGov = (data: ParamsQuery) => {
  if (data.bdjuno_provider?.gov_params.length) {
    const govParamsRaw = GovParams.fromJson(data?.bdjuno_provider?.gov_params?.[0] ?? {});
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

const formatCCVConsumer = (data: ParamsQuery) => {
  if (data?.ccv_consumer_params[0]?.params) {
    const ccvConsumerParamsRaw = CCVConsumerParams(data?.ccv_consumer_params[0]?.params ?? {});
    return {
      enabled: ccvConsumerParamsRaw.enabled,
      unbondingPeriod: ccvConsumerParamsRaw.unbondingPeriod,
      ccvTimeoutPeriod: ccvConsumerParamsRaw.ccvTimeoutPeriod,
      historicalEntries: ccvConsumerParamsRaw.historicalEntries,
      softOptOutThreshold: ccvConsumerParamsRaw.softOptOutThreshold,
      transferTimeoutPeriod: ccvConsumerParamsRaw.transferTimeoutPeriod,
      consumerRedistributionFraction: ccvConsumerParamsRaw.consumerRedistributionFraction,
      blocksPerDistributionTransmission: ccvConsumerParamsRaw.blocksPerDistributionTransmission,
    };
  }

  return null;
};

const formatParam = (data: ParamsQuery) => {
  const results: Partial<ParamsState> = {};

  results.ccvConsumer = formatCCVConsumer(data);

  results.staking = formatStaking(data);

  results.slashing = formatSlashing(data);

  results.minting = formatMint(data);

  results.distribution = formatDistribution(data);

  results.gov = formatGov(data);

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
