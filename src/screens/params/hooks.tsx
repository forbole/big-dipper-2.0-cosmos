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
  ParamsState,
} from './types';

const initialState = {
  loading: true,
  exists: true,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null,
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
        const formatRaw = (stakingParamsRaw: any) => {
          return {
            bondDenom: stakingParamsRaw?.bond_denom,
            unbondingTime: stakingParamsRaw?.unbonding_time,
            maxEntries: stakingParamsRaw?.max_entries,
            historicalEntries: stakingParamsRaw?.historical_entries,
            maxValidators: stakingParamsRaw?.max_validators,
          };
        };

        let stakingParamsRaw = R.pathOr(null, ['stakingParams', 0, 'params'], data);

        if (stakingParamsRaw) {
          stakingParamsRaw = formatRaw(stakingParamsRaw);
          return {
            bondDenom: stakingParamsRaw.bondDenom,
            unbondingTime: stakingParamsRaw.unbondingTime,
            maxEntries: stakingParamsRaw.maxEntries,
            historicalEntries: stakingParamsRaw.historicalEntries,
            maxValidators: stakingParamsRaw.maxValidators,
          };
        }

        return null;
      }

      return null;
    };

    results.staking = formatStaking();

    // ================================
    // slashing
    // ================================
    const formatSlashing = () => {
      if (data.slashingParams.length) {
        const formatRaw = (slashingParamsRaw: any) => {
          return {
            downtimeJailDuration: slashingParamsRaw.downtime_jail_duration,
            minSignedPerWindow: slashingParamsRaw.min_signed_per_window,
            signedBlockWindow: slashingParamsRaw.signed_blocks_window,
            slashFractionDoubleSign: slashingParamsRaw.slash_fraction_double_sign,
            slashFractionDowntime: slashingParamsRaw.slash_fraction_downtime,
          };
        };

        let slashingParamsRaw = R.pathOr(null, ['slashingParams', 0, 'params'], data);

        if (slashingParamsRaw) {
          slashingParamsRaw = formatRaw(slashingParamsRaw);
          return {
            downtimeJailDuration: slashingParamsRaw.downtimeJailDuration,
            minSignedPerWindow: slashingParamsRaw.minSignedPerWindow,
            signedBlockWindow: slashingParamsRaw.signedBlockWindow,
            slashFractionDoubleSign: slashingParamsRaw.slashFractionDoubleSign,
            slashFractionDowntime: slashingParamsRaw.slashFractionDowntime,
          };
        }

        return null;
      }

      return null;
    };

    results.slashing = formatSlashing();

    // ================================
    // minting
    // ================================
    const formatMint = () => {
      if (data.mintParams.length) {
        const formatRaw = (mintParamsRaw: any) => {
          return {
            blocksPerYear: mintParamsRaw.blocks_per_year,
            goalBonded: mintParamsRaw.goal_bonded,
            inflationMax: mintParamsRaw.inflation_max,
            inflationMin: mintParamsRaw.inflation_min,
            inflationRateChange: mintParamsRaw.inflation_rate_change,
            mintDenom: mintParamsRaw.mint_denom,
          };
        };
        const mintParamsRaw = data.mintParams[0];
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
        const distributionParamsRaw = data.distributionParams[0];
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
        const govParamsRaw = data.govParams[0];

        return {
          minDeposit: formatDenom(
            R.pathOr(0, ['min_deposit', 0, 'amount'], govParamsRaw.depositParams),
            R.pathOr(chainConfig.primaryTokenUnit, ['min_deposit', 0, 'denom'], govParamsRaw.depositParams),
          ),
          maxDepositPeriod: R.pathOr(0, ['max_deposit_period'], govParamsRaw.depositParams),
          quorum: numeral(numeral(R.pathOr(0, ['quorum'], govParamsRaw.tallyParams)).format('0.[00]')).value(),
          threshold: numeral(numeral(R.pathOr(0, ['threshold'], govParamsRaw.tallyParams)).format('0.[00]')).value(),
          vetoThreshold: numeral(numeral(R.pathOr(0, ['veto_threshold'], govParamsRaw.tallyParams)).format('0.[00]')).value(),
          votingPeriod: R.pathOr(0, ['voting_period'], govParamsRaw.votingParams),
        };
      }

      return null;
    };

    results.gov = formatGov();

    return results;
  };

  return {
    state,
  };
};
