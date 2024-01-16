import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { ParamsQuery, useParamsQuery } from '@/graphql/types/provider_types';
import { DistributionParams, MintParams } from '@/models';
import type { ParamsState } from '@/screens/params/types';
import CCVConsumerParams from '../../models/ccv_consumer_params';

const initialState: ParamsState = {
  loading: true,
  exists: true,
  ccvConsumer: null,
  minting: null,
  distribution: null,
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

  results.minting = formatMint(data);

  results.distribution = formatDistribution(data);

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
