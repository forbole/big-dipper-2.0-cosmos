import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  useLatestStakingHeightQuery,
  // useAccountLazyQuery,
  // AccountQuery,
  useValidatorDetailsLazyQuery,
  ValidatorDetailsQuery,
} from '@graphql/types';
import { Avatar } from '@components';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import {
  getValidatorCondition,
  getValidatorConditionClass,
} from '@utils/get_validator_condition';
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
      // const delegationHeight = data.delegation[0]?.height;
      // const rewardsHeight = data.reward[0]?.height;

      useValidatorDetailsQuery({
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          // utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
          // delegationHeight,
          // rewardsHeight,
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
        // staking: {},
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
      overall: R.pathOr(0, ['block', 0, 'preCommitsAggregate', 'aggregate', 'sum', 'votingPower'], data),
      // self:
    };

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

    return ({
      profile,
      // account: {
      //   address: state.rawData.account.address,
      //   withdrawalAddress: state.rawData.account.withdrawalAddress,
      // },
      // balance: {
      //   chart: balanceChart,
      //   total: `${numeral(state.rawData.balance.total).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      // },
      // staking: {
      //   delegations,
      //   redelegations,
      //   unbondings,
      // },
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
