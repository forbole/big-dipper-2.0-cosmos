import { useEffect, useMemo } from 'react';
import {
  useAccountBalancesQuery,
  // useAccountWithdrawalAddressQuery,
  useAccountDelegationBalanceQuery,
} from '@/graphql/types/general_types';

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

// export const useAccountWithdrawalAddress = (address?: string) => {
//   const defaultReturnValue = {
//     withdrawalAddress: {
//       address,
//     },
//   };
//   const { data } = useAccountWithdrawalAddressQuery({
//     variables: {
//       address: address ?? '',
//     },
//     skip: !address,
//   });
//   return data ?? defaultReturnValue;
// };

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
