import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { formatDenom } from '@utils/format_denom';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  useValidatorDetailsQuery,
  ValidatorDetailsQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { getValidatorCondition } from '@utils/get_validator_condition';
import { ValidatorDetailsState } from './types';

export const useValidatorDetails = () => {
  const router = useRouter();
  const { findAddress } = useChainContext();
  const [state, setState] = useState<ValidatorDetailsState>({
    loading: true,
    exists: true,
    overview: {
      validator: {
        imageUrl: '',
        moniker: '',
      },
      operatorAddress: '',
      selfDelegateAddress: '',
      description: '',
      status: 0,
      jailed: false,
      website: '',
      condition: 0,
      commission: 0,
      missedBlockCounter: 0,
      signedBlockWindow: 0,
    },
    votingPower: {
      height: 0,
      overall: 0,
      self: 0,
      selfDelegatePercent: 0,
      selfDelegate: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useValidatorDetailsQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  const formatAccountQuery = (data: ValidatorDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.validator.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // ============================
    // overview
    // ============================
    const formatOverview = () => {
      const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], data.validator[0]);
      const signedBlockWindow = data.slashingParams[0]?.signedBlockWindow ?? 0;
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);
      const { operatorAddress } = data.validator[0].validatorInfo;
      const validator = findAddress(operatorAddress);

      const profile = {
        validator,
        operatorAddress,
        selfDelegateAddress: data.validator[0].validatorInfo.selfDelegateAddress,
        description: R.pathOr('', ['validatorDescriptions', 0, 'details'], data.validator[0]),
        status: R.pathOr(3, ['validatorStatuses', 0, 'status'], data.validator[0]),
        jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], data.validator[0]),
        website: R.pathOr('', ['validatorDescriptions', 0, 'website'], data.validator[0]),
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], data.validator[0]),
        condition,
        missedBlockCounter,
        signedBlockWindow,
      };

      return profile;
    };

    stateChange.overview = formatOverview();

    // ============================
    // votingPower
    // ============================
    const formatVotingPower = () => {
      const self = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], data.validator[0]);

      const totalDelegations = data.validator[0].delegations.reduce((a, b) => {
        return a + numeral(R.pathOr(0, ['amount', 'amount'], b)).value();
      }, 0);

      const [selfDelegate] = data.validator[0].delegations.filter(
        (x) => x.delegatorAddress === data.validator[0].validatorInfo.selfDelegateAddress,
      );
      const selfDelegateAmount = formatDenom(numeral(R.pathOr(0, ['amount', 'amount'], selfDelegate)).value());
      const selfDelegatePercent = (numeral(R.pathOr(0, ['amount', 'amount'], selfDelegate)).value() / totalDelegations) * 100;

      const votingPower = {
        self,
        selfDelegate: selfDelegateAmount,
        selfDelegatePercent,
        overall: formatDenom(R.pathOr(0, ['stakingPool', 0, 'bonded'], data)),
        height: R.pathOr(0, ['validatorVotingPowers', 0, 'height'], data.validator[0]),
      };

      return votingPower;
    };
    stateChange.votingPower = formatVotingPower();

    // // ============================
    // // delegations
    // // ============================
    // const delegations = data.validator[0].delegations.map((x) => {
    //   return ({
    //     amount: formatDenom(x.amount.amount),
    //     delegatorAddress: x.delegatorAddress,
    //   });
    // });

    // results.rawData.staking.delegations = delegations;

    // // ============================
    // // redelegations
    // // ============================

    // const redelegations = [
    //   ...data.validator[0].redelegationsByDstValidatorAddress.map((x) => {
    //     return ({
    //       to: x.to,
    //       from: x.from,
    //       linkedUntil: x.completionTime,
    //       amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
    //       delegatorAddress: x.delegatorAddress,
    //     });
    //   }),
    //   ...data.validator[0].redelegationsBySrcValidatorAddress.map((x) => {
    //     return ({
    //       to: x.to,
    //       from: x.from,
    //       linkedUntil: x.completionTime,
    //       amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
    //       delegatorAddress: x.delegatorAddress,
    //     });
    //   }),
    // ];

    // results.rawData.staking.redelegations = redelegations;

    // // ============================
    // // unbondings
    // // ============================
    // const unbondings = data.validator[0].unbonding.map((x) => {
    //   return ({
    //     delegatorAddress: x.delegatorAddress,
    //     amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
    //     linkedUntil: x.completionTimestamp,
    //     commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
    //   });
    // });

    // results.rawData.staking.unbondings = unbondings;

    // return results;
    return stateChange;
  };

  return {
    state,
  };
};
