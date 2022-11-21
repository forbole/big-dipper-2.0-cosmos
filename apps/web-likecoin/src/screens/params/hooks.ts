import { useCallback, useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { useParamsQuery, ParamsQuery } from '@graphql/types/general_types';
import { formatToken } from 'ui/utils/format_token';
import chainConfig from 'ui/chainConfig';
import { DistributionParams, GovParams, MintParams, StakingParams, SlashingParams } from '@models';
import IscnParams from '@models/likecoin/iscn_params';
import type { ParamsState } from './types';

const initialState = {
  loading: true,
  exists: true,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null,
  iscn: null,
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
    const results: any = {};

    // ================================
    // staking
    // ================================
    const formatStaking = () => {
      if (data.stakingParams.length) {
        const stakingParamsRaw = StakingParams.fromJson(
          R.pathOr({}, ['stakingParams', 0, 'params'], data)
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

    results.staking = formatStaking();

    // ================================
    // slashing
    // ================================
    const formatSlashing = () => {
      if (data.slashingParams.length) {
        const slashingParamsRaw = SlashingParams.fromJson(
          R.pathOr({}, ['slashingParams', 0, 'params'], data)
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
        const distributionParamsRaw = DistributionParams.fromJson(
          R.pathOr({}, ['distributionParams', 0, 'params'], data)
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
        const govParamsRaw = GovParams.fromJson(R.pathOr({}, ['govParams', 0], data));
        return {
          minDeposit: formatToken(
            R.pathOr(0, [0, 'amount'], govParamsRaw.depositParams.minDeposit),
            R.pathOr(
              chainConfig.primaryTokenUnit,
              [0, 'denom'],
              govParamsRaw.depositParams.minDeposit
            )
          ),
          maxDepositPeriod: govParamsRaw.depositParams.maxDepositPeriod,
          quorum: numeral(numeral(govParamsRaw.tallyParams.quorum).format('0.[00]')).value(),
          threshold: numeral(numeral(govParamsRaw.tallyParams.threshold).format('0.[00]')).value(),
          vetoThreshold: numeral(
            numeral(govParamsRaw.tallyParams.vetoThreshold).format('0.[00]')
          ).value(),
          votingPeriod: govParamsRaw.votingParams.votingPeriod,
        };
      }

      return null;
    };

    results.gov = formatGov();

    // ================================
    // iscn
    // ================================

    const formatIscn = () => {
      if (data.iscnParams.length) {
        const iscnParamsRaw = IscnParams.fromJson(R.pathOr({}, ['iscnParams', 0, 'params'], data));
        return {
          registryName: iscnParamsRaw.registryName,
          feePerByte: formatToken(iscnParamsRaw.feePerByte.amount, iscnParamsRaw.feePerByte.denom),
        };
      }

      return null;
    };

    results.iscn = formatIscn();

    return results;
  };

  return {
    state,
  };
};
