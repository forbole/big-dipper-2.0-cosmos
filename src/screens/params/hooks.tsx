import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import {
  useParamsQuery,
  ParamsQuery,
} from '@graphql/types';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@configs';
import {
  StakingParams,
  SlashingParams,
  MintParams,
  DistributionParams,
  GovParams,
  InflationRateParams,
} from '@models';
import {
  ParamsState,
} from './types';

const initialState: ParamsState = {
  loading: true,
  exists: true,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null,
  inflationRate: null,
  // inflationRate: [
  //   {
  //     denom: 'echf',
  //     inflation: '0.005000000000000000',
  //   },
  //   {
  //     denom: 'edkk',
  //     inflation: '0.005000000000000000',
  //   },
  //   {
  //     denom: 'eeur',
  //     inflation: '0.00500000000000000',
  //   },
  //   {
  //     denom: 'enok',
  //     inflation: '0.005000000000000000',
  //   },
  //   {
  //     denom: 'esek',
  //     inflation: '0.005000000000000000',
  //   },
  //   {
  //     denom: 'ungm',
  //     inflation: '0.100000000000000000',
  //   },
  // ],
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
    console.log(data);

    // ================================
    // staking
    // ================================
    const formatStaking = () => {
      if (data.stakingParams.length) {
        const stakingParamsRaw = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
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

    results.staking = formatStaking();

    // ================================
    // slashing
    // ================================
    const formatSlashing = () => {
      if (data.slashingParams.length) {
        const slashingParamsRaw = SlashingParams.fromJson(R.pathOr({}, ['slashingParams', 0, 'params'], data));
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

    results.slashing = formatSlashing();

    // ================================
    // minting
    // ================================
    const formatMint = () => {
      if (data.mintParams.length) {
        const mintParamsRaw = MintParams.fromJson(R.pathOr({}, ['mintParams', 0, 'params'], data));

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

    results.minting = formatMint();

    // ================================
    // distribution
    // ================================

    const formatDistribution = () => {
      if (data.distributionParams.length) {
        const distributionParamsRaw = DistributionParams.fromJson(R.pathOr({}, ['distributionParams', 0, 'params'], data));
        return {
          baseProposerReward: distributionParamsRaw.baseProposerReward,
          bonusProposerReward: distributionParamsRaw.bonusProposerReward,
          communityTax: distributionParamsRaw.communityTax,
          withdrawAddressEnabled: distributionParamsRaw.withdrawAddressEnabled,
        };
      }

      return null;
    };

    results.distribution = formatDistribution();

    // ================================
    // distribution
    // ================================

    const formatGov = () => {
      if (data.govParams.length) {
        const govParamsRaw = GovParams.fromJson(R.pathOr({}, ['govParams', 0], data));
        return {
          minDeposit: formatDenom(
            R.pathOr(0, [0, 'amount'], govParamsRaw.depositParams.minDeposit),
            R.pathOr(chainConfig.primaryTokenUnit, [0, 'denom'], govParamsRaw.depositParams.minDeposit),
          ),
          maxDepositPeriod: govParamsRaw.depositParams.maxDepositPeriod,
          quorum: numeral(numeral(govParamsRaw.tallyParams.quorum).format('0.[00]')).value(),
          threshold: numeral(numeral(govParamsRaw.tallyParams.threshold).format('0.[00]')).value(),
          vetoThreshold: numeral(numeral(govParamsRaw.tallyParams.vetoThreshold).format('0.[00]')).value(),
          votingPeriod: govParamsRaw.votingParams.votingPeriod,
        };
      }

      return null;
    };

    results.gov = formatGov();

    // ================================
    // inflation rate
    // ================================
    const formatInflationRate = () => {
      if (data.inflationRateParams.length) {
        const inflationRateParamsRaw = InflationRateParams.fromJson(R.pathOr({}, ['inflationRateParams', 0, 'params'], data));
        return {
          denom: inflationRateParamsRaw.denom,
          inflationRate: inflationRateParamsRaw.inflation,
        };
      }

      return null;
    };

    results.inflationRate = formatInflationRate();

    return results;
  };

  return {
    state,
  };
};
