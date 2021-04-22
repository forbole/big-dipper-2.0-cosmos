import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  useLatestStakingHeightQuery,
  useValidatorDetailsLazyQuery,
  ValidatorDetailsQuery,
} from '@graphql/types';
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { formatDenom } from '@utils/format_denom';
import { getValidatorCondition } from '@utils/get_validator_condition';
import { chainConfig } from '@src/chain_config';
import { useChainContext } from '@contexts';
import { AccountState } from './types';

export const useAccount = (initialState: AccountState) => {
  const { findAddress } = useChainContext();
  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useLatestStakingHeightQuery({
    onCompleted: (data) => {
      const delegationHeight = data.delegation[0]?.height;
      const undelegationHeight = data.unbonding[0]?.height;

      useValidatorDetailsQuery({
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
          delegationHeight,
          undelegationHeight,
        },
      });
    },
  });

  const [useValidatorDetailsQuery] = useValidatorDetailsLazyQuery({
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  const formatAccountQuery = (data: ValidatorDetailsQuery) => {
    const results: any = {
      rawData: {
        loading: false,
        staking: {},
      },
    };

    if (!data.validator.length) {
      results.rawData.exists = false;
      return results;
    }

    // ============================
    // profile
    // ============================
    const missedBlockCounter = R.pathOr(0, ['validatorSigningInfo', 0, 'missedBlocksCounter'], data.validator[0]);
    const signedBlockWindow = data.slashingParams[0]?.signedBlockWindow ?? 0;

    const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

    const profile = {
      operatorAddress: data.validator[0].validatorInfo.operatorAddress,
      selfDelegateAddress: data.validator[0].validatorInfo.selfDelegateAddress,
      description: R.pathOr('', ['validatorDescriptions', 0, 'details'], data.validator[0]),
      status: R.pathOr(3, ['validatorStatuses', 0, 'status'], data.validator[0]),
      jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], data.validator[0]),
      website: R.pathOr('', ['validatorDescriptions', 0, 'website'], data.validator[0]),
      commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], data.validator[0]),
      condition,
    };

    results.rawData.profile = profile;

    // ============================
    // votingPower
    // ============================
    const votingPower = {
      overall: formatDenom(R.pathOr(0, ['stakingPool', 0, 'bonded'], data)),
      self: R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], data.validator[0]),
      height: R.pathOr(0, ['validatorVotingPowers', 0, 'height'], data.validator[0]),
    };

    results.rawData.votingPower = votingPower;

    // ============================
    // delegations
    // ============================
    const delegations = data.validator[0].delegations.map((x) => {
      return ({
        amount: formatDenom(x.amount.amount),
        delegatorAddress: x.delegatorAddress,
      });
    });

    results.rawData.staking.delegations = delegations;

    // ============================
    // redelegations
    // ============================

    const redelegations = [
      ...data.validator[0].redelegationsByDstValidatorAddress.map((x) => {
        return ({
          to: x.to,
          from: x.from,
          linkedUntil: x.completionTime,
          amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
          delegatorAddress: x.delegatorAddress,
        });
      }),
      ...data.validator[0].redelegationsBySrcValidatorAddress.map((x) => {
        return ({
          to: x.to,
          from: x.from,
          linkedUntil: x.completionTime,
          amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
          delegatorAddress: x.delegatorAddress,
        });
      }),
    ];

    results.rawData.staking.redelegations = redelegations;

    // ============================
    // unbondings
    // ============================
    const unbondings = data.validator[0].unbonding.map((x) => {
      return ({
        delegatorAddress: x.delegatorAddress,
        amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
        linkedUntil: x.completionTimestamp,
        commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
      });
    });

    results.rawData.staking.unbondings = unbondings;

    return results;
  };

  const formatUi = () => {
    // ==================================
    // profile
    // ==================================
    const validator = findAddress(state.rawData.profile.operatorAddress);
    let status = '';

    if (state.rawData.profile.status === 3) {
      status = 'active';
    } else if (state.rawData.profile.status === 2) {
      if (state.rawData.profile.jailed) {
        status = 'jailed';
      } else {
        status = 'unbonding';
      }
    } else if (state.rawData.profile.status === 1) {
      status = 'unbonded';
    } else {
      status = 'unknown';
    }

    let condition = 'na';

    if (state.rawData.profile.status === 3) {
      if (state.rawData.profile.condition > 90) {
        condition = 'good';
      } else if (state.rawData.profile.condition > 70 && state.rawData.profile.condition < 90) {
        condition = 'moderate';
      } else {
        condition = 'bad';
      }
    }

    const profile = {
      status,
      condition,
      operatorAddress: state.rawData.profile.operatorAddress,
      selfDelegateAddress: state.rawData.profile.selfDelegateAddress,
      website: state.rawData.profile.website,
      commission: `${numeral(state.rawData.profile.commission * 100).value()}%`,
      validator: {
        moniker: validator ? validator.moniker : state.rawData.profile.operatorAddress,
        imageUrl: validator ? validator.imageUrl : undefined,
      },
      description: state.rawData.profile.description,
    };

    // ==================================
    // voting power
    // ==================================
    const votingPowerPercent = numeral((
      state.rawData.votingPower.self / state.rawData.votingPower.overall) * 100);
    const votingPower = {
      height: numeral(state.rawData.votingPower.height).format('0,0'),
      votingPower: numeral(state.rawData.votingPower.self).format('0,0'),
      votingPowerPercentRaw: votingPowerPercent.format(0, Math.floor),
      votingPowerPercent: `${votingPowerPercent.format('0,0.00')}%`,
      totalVotingPower: numeral(state.rawData.votingPower.overall).format('0,0'),
    };

    // ==================================
    // delegations
    // ==================================
    const delegations = state.rawData.staking.delegations.map((x) => {
      const validatorRole = findAddress(x.delegatorAddress);
      const address = getMiddleEllipsis(x.delegatorAddress, {
        beginning: 12, ending: 10,
      });
      return ({
        address: (
          <AvatarName
            address={x.delegatorAddress}
            imageUrl={validatorRole ? validatorRole?.imageUrl : null}
            name={validatorRole ? validatorRole.moniker : address}
          />
        ),
        amount: `${numeral(x.amount).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        amountRaw: x.amount,
      });
    }).sort((a, b) => (
      a.amount > b.amount ? 1 : -1));

    // ==================================
    // redelegations
    // ==================================
    const redelegations = state.rawData.staking.redelegations.map((x) => {
      const to = findAddress(x.to);
      const from = findAddress(x.from);
      const validatorRole = findAddress(x.delegatorAddress);
      const address = getMiddleEllipsis(x.delegatorAddress, {
        beginning: 12, ending: 10,
      });

      return ({
        address: (
          <AvatarName
            address={x.delegatorAddress}
            imageUrl={validatorRole ? validatorRole?.imageUrl : null}
            name={validatorRole ? validatorRole.moniker : address}
          />
        ),
        to: (
          <AvatarName
            address={x.to}
            imageUrl={to ? to?.imageUrl : null}
            name={to ? to.moniker : x.to}
          />
        ),
        from: (
          <AvatarName
            address={x.from}
            imageUrl={from ? from?.imageUrl : null}
            name={from ? from.moniker : x.from}
          />
        ),
        linkedUntil: dayjs.utc(x.linkedUntil).local().format('HH:mm:ss A'),
        amount: `${numeral(x.amount).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        amountRaw: x.amount,
      });
    }).sort((a, b) => (
      a.amount > b.amount ? 1 : -1));

    // ==================================
    // unbondings
    // ==================================
    const unbondings = state.rawData.staking.unbondings.map((x) => {
      const validatorRole = findAddress(x.delegatorAddress);
      const address = getMiddleEllipsis(x.delegatorAddress, {
        beginning: 12, ending: 10,
      });
      return ({
        address: (
          <AvatarName
            address={x.delegatorAddress}
            imageUrl={validatorRole ? validatorRole?.imageUrl : null}
            name={validatorRole ? validatorRole.moniker : address}
          />
        ),
        linkedUntil: dayjs.utc(x.linkedUntil).local().format('HH:mm:ss A'),
        amount: `${numeral(x.amount).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        amountRaw: x.amount,
      });
    }).sort((a, b) => (
      a.amount > b.amount ? 1 : -1));

    return ({
      profile,
      votingPower,
      staking: {
        delegations,
        redelegations,
        unbondings,
      },
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
