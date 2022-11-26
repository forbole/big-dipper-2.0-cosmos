import { useCallback, useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { useParamsQuery, ParamsQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import chainConfig from '@/chainConfig';
import { DistributionParams, MintParams, SlashingParams, StakingParams } from '@/models';
import GovParams from '@/models/gov_params';
import type { ParamsState } from '@/screens/params/types';

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

  const handleSetState = useCallback((stateChange: Partial<typeof state>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

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
    const results = {};

    // ================================
    // staking
    // ================================
    const formatStaking = () => {
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

    results.staking = formatStaking();

    // ================================
    // slashing
    // ================================
    const formatSlashing = () => {
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

    results.slashing = formatSlashing();

    // ================================
    // minting
    // ================================
    const formatMint = () => {
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

    results.minting = formatMint();

    // ================================
    // distribution
    // ================================

    const formatDistribution = () => {
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

    results.distribution = formatDistribution();

    // ================================
    // distribution
    // ================================

    const formatGov = () => {
      if (data.govParams.length) {
        const govParamsRaw = GovParams.fromJson(data?.govParams?.[0] ?? {});

        return {
          minDeposit: formatToken(
            govParamsRaw.depositParams.minDeposit?.[0]?.amount ?? 0,
            govParamsRaw.depositParams.minDeposit?.[0]?.denom ?? chainConfig.primaryTokenUnit
          ),
          maxDepositPeriod: govParamsRaw.depositParams.maxDepositPeriod,
          default: {
            quorum: numeral(
              numeral(govParamsRaw.tallyParams.default.quorum).format('0.[00]')
            ).value(),
            threshold: numeral(
              numeral(govParamsRaw.tallyParams.default.threshold).format('0.[00]')
            ).value(),
            vetoThreshold: numeral(
              numeral(govParamsRaw.tallyParams.default.vetoThreshold).format('0.[00]')
            ).value(),
          },
          certifierStakeVote: {
            quorum: numeral(
              numeral(govParamsRaw.tallyParams.certifierStakeVote.quorum).format('0.[00]')
            ).value(),
            threshold: numeral(
              numeral(govParamsRaw.tallyParams.certifierStakeVote.threshold).format('0.[00]')
            ).value(),
            vetoThreshold: numeral(
              numeral(govParamsRaw.tallyParams.certifierStakeVote.vetoThreshold).format('0.[00]')
            ).value(),
          },
          certifierSecurityVote: {
            quorum: numeral(
              numeral(govParamsRaw.tallyParams.certifierSecurityVote.quorum).format('0.[00]')
            ).value(),
            threshold: numeral(
              numeral(govParamsRaw.tallyParams.certifierSecurityVote.threshold).format('0.[00]')
            ).value(),
            vetoThreshold: numeral(
              numeral(govParamsRaw.tallyParams.certifierSecurityVote.vetoThreshold).format('0.[00]')
            ).value(),
          },
          votingPeriod: govParamsRaw.votingParams.votingPeriod,
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
