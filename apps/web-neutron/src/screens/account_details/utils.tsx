import { useEffect, useMemo } from 'react';
import {
  useAccountBalancesQuery,
  useAccountCommissionQuery,
  useAccountDelegationBalanceQuery,
  useAccountDelegationRewardsQuery,
  useAccountUnbondingBalanceQuery,
  useAccountWithdrawalAddressQuery,
} from '@/graphql/types/provider_types';
import { toValidatorAddress } from '@/utils/prefix_convert';

export const useCommission = (address?: string) => {
  /* Converting the address to a validator address. */
  let validatorAddress = '';
  try {
    if (address) validatorAddress = toValidatorAddress(address);
  } catch (e) {
    console.error(e);
  }

  const defaultReturnValue = useMemo(
    () => ({
      commission: {
        coins: [],
      },
    }),
    []
  );
  const { data, error, refetch } = useAccountCommissionQuery({
    variables: {
      validatorAddress,
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};

export const useAccountWithdrawalAddress = (address?: string) => {
  const defaultReturnValue = useMemo(
    () => ({
      bdjuno_provider: {
        withdrawalAddress: {
          address,
        },
      },
    }),
    [address]
  );
  const { data, error, refetch } = useAccountWithdrawalAddressQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};

export const useAvailableBalances = (address?: string) => {
  const defaultReturnValue = useMemo(
    () => ({
      accountBalances: {
        coins: [],
      },
    }),
    []
  );
  const { data, error, refetch } = useAccountBalancesQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};

export const useDelegationBalance = (address?: string) => {
  const defaultReturnValue = useMemo(
    () => ({
      delegationBalance: {
        coins: [],
      },
    }),
    []
  );
  const { data, error, refetch } = useAccountDelegationBalanceQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};

export const useUnbondingBalance = (address?: string) => {
  const defaultReturnValue = useMemo(
    () => ({
      unbondingBalance: {
        coins: [],
      },
    }),
    []
  );
  const { data, error, refetch } = useAccountUnbondingBalanceQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};

export const useRewards = (address?: string) => {
  const defaultReturnValue = useMemo(() => ({ delegationRewards: [] }), []);
  const { data, error, refetch } = useAccountDelegationRewardsQuery({
    variables: {
      address: address ?? '',
    },
    skip: !address,
  });
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);
  return data ?? defaultReturnValue;
};
