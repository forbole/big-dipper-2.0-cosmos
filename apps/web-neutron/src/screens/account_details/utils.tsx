import { useEffect, useMemo } from 'react';
import { useAccountWithdrawalAddressQuery } from '@/graphql/types/provider_types';
import { useAccountBalancesQuery } from '@/graphql/types/general_types';

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
