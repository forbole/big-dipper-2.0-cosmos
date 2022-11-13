import axios from 'axios';
import * as R from 'ramda';
import { toValidatorAddress } from 'ui/utils/prefix_convert';
import {
  AccountCommissionDocument,
  AccountWithdrawalAddressDocument,
  AccountBalancesDocument,
  AccountDelegationBalanceDocument,
  AccountUnbondingBalanceDocument,
  AccountDelegationRewardsDocument,
} from '@src/graphql/general/account_details_documents';

import chainConfig from 'ui/chainConfig';

export const fetchCommission = async (address: string) => {
  const defaultReturnValue = {
    commission: {
      coins: null,
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          validatorAddress: toValidatorAddress(address),
        },
        query: AccountCommissionDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchAccountWithdrawalAddress = async (address: string) => {
  const defaultReturnValue = {
    withdrawalAddress: {
      address,
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountWithdrawalAddressDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchAvailableBalances = async (address: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountBalancesDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchDelegationBalance = async (address: string) => {
  const defaultReturnValue = {
    delegationBalance: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountDelegationBalanceDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchUnbondingBalance = async (address: string) => {
  const defaultReturnValue = {
    unbondingBalance: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountUnbondingBalanceDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchRewards = async (address: string) => {
  const defaultReturnValue = {
    delegationRewards: [],
  };
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
        chainConfig.endpoints.graphql ||
        'http://localhost:3000/v1/graphql',
      {
        variables: {
          address,
        },
        query: AccountDelegationRewardsDocument,
      }
    );
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
