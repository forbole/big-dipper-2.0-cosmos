import {
  useAccountBalancesQuery,
  // useAccountWithdrawalAddressQuery,
  useAccountDelegationBalanceQuery,
} from '@/graphql/types/general_types';

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
