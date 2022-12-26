import {
  useAccountBalancesQuery,
  useAccountCommissionQuery,
  useAccountDelegationBalanceQuery,
  useAccountDelegationRewardsQuery,
  useAccountUnbondingBalanceQuery,
  useAccountWithdrawalAddressQuery,
} from '@/graphql/types/general_types';
import { toValidatorAddress } from '@/utils/prefix_convert';

export const useCommission = (address?: string) => {
  const defaultReturnValue = {
    commission: {
      coins: [],
    },
  };
  const { data } = useAccountCommissionQuery({
    variables: {
      validatorAddress: address ? toValidatorAddress(address) : '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};

export const useAccountWithdrawalAddress = (address?: string) => {
  const defaultReturnValue = {
    withdrawalAddress: {
      address,
    },
  };
  const { data } = useAccountWithdrawalAddressQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};

export const useAvailableBalances = (address?: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  const { data } = useAccountBalancesQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};

export const useDelegationBalance = (address?: string) => {
  const defaultReturnValue = {
    delegationBalance: {
      coins: [],
    },
  };
  const { data } = useAccountDelegationBalanceQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};

export const useUnbondingBalance = (address?: string) => {
  const defaultReturnValue = {
    unbondingBalance: {
      coins: [],
    },
  };
  const { data } = useAccountUnbondingBalanceQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};

export const useRewards = (address?: string) => {
  const defaultReturnValue = { delegationRewards: [] };
  const { data } = useAccountDelegationRewardsQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  return data ?? defaultReturnValue;
};
