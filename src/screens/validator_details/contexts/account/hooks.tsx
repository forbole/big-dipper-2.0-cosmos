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
      status: R.pathOr('', ['validatorStatuses', 0, 'status'], data.validator[0]),
      jailed: R.pathOr('', ['validatorStatuses', 0, 'jailed'], data.validator[0]),
      website: R.pathOr('', ['validatorDescriptions', 0, 'website'], data.validator[0]),
      commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], data.validator[0]),
      condition,
    };

    results.rawData.profile = profile;

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

    const profile = {
      operatorAddress: state.rawData.profile.operatorAddress,
      validator: {
        moniker: validator ? validator.moniker : state.rawData.profile.operatorAddress,
        imageUrl: validator ? validator.imageUrl : undefined,
      },
      status,
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
