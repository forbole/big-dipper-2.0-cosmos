import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type {
  AccountDetailState,
  BalanceType,
  OtherTokenType,
} from '@/screens/account_details/types';
import { fetchAvailableBalances, fetchDelegationBalance } from '@/screens/account_details/utils';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

const { extra, primaryTokenUnit, tokenUnits } = chainConfig();

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

const initialState: AccountDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
  otherTokens: {
    count: 0,
    data: [],
  },
  balance: {
    available: defaultTokenUnit,
    delegate: defaultTokenUnit,
    total: defaultTokenUnit,
  },
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: AccountDetailState) => AccountDetailState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Desmos Profile
  // ==========================
  const { data: desmosProfile, loading } = useDesmosProfile({
    addresses: Array.isArray(router.query.address)
      ? router.query.address
      : [router.query.address ?? ''],
    skip: !extra.profile,
  });
  if (loading) state.loading = true;
  state.desmosProfile = desmosProfile?.[0];

  useEffect(() => {
    // ==========================
    // Fetch Data
    // ==========================
    // const fetchWithdrawalAddress = async () => {
    //   const data = await fetchAccountWithdrawalAddress(router.query.address as string);
    //   handleSetState((prevState) => ({
    //     ...prevState,
    //     overview: {
    //       address: router.query.address,
    //       withdrawalAddress: data?.withdrawalAddress?.address ?? '',
    //     },
    //   }));
    // };

    const fetchBalance = async () => {
      const address = router.query.address as string;
      const promises: [
        ReturnType<typeof fetchAvailableBalances>,
        ReturnType<typeof fetchDelegationBalance>
      ] = [fetchAvailableBalances(address), fetchDelegationBalance(address)];
      const [available, delegation] = await Promise.allSettled(promises);

      if (available.status !== 'fulfilled') throw available.reason;
      if (delegation.status !== 'fulfilled') throw delegation.reason;
      const formattedRawData = {
        accountBalances: available?.value?.accountBalances ?? [],
        delegationBalance: delegation?.value?.delegationBalance ?? [],
      };

      handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
    };

    // ==========================
    // Format Data
    // ==========================
    const formatAllBalance = (data: {
      delegationRewards?: Array<{
        coins: Array<MsgCoin>;
        validatorAddress?: string;
      }>;
      accountBalances?: {
        coins: Array<MsgCoin>;
      };
      delegationBalance?: {
        coins: Array<MsgCoin>;
      };
      unbondingBalance?: {
        coins: Array<MsgCoin>;
      };
      commission?: {
        coins: Array<MsgCoin>;
      };
    }) => {
      const stateChange: Partial<AccountDetailState> = {
        loading: false,
      };

      // ============================
      // balance
      // ============================
      const formatBalance = () => {
        const available = getDenom(data?.accountBalances?.coins ?? [], primaryTokenUnit);
        const availableAmount = formatToken(available.amount, primaryTokenUnit);

        const delegate = getDenom(data?.delegationBalance?.coins ?? [], primaryTokenUnit);
        const delegateAmount = formatToken(delegate.amount, primaryTokenUnit);

        const total = Big(availableAmount.value)
          .plus(delegateAmount.value)
          .toFixed(tokenUnits?.[primaryTokenUnit].exponent);

        const balance: BalanceType = {
          available: availableAmount,
          total: {
            value: total,
            displayDenom: availableAmount.displayDenom,
            baseDenom: availableAmount.baseDenom,
            exponent: availableAmount.exponent,
          },
          delegate: {
            value: delegateAmount.value,
            displayDenom: delegateAmount.displayDenom,
            baseDenom: delegateAmount.baseDenom,
            exponent: delegateAmount.exponent,
          },
        };

        return balance;
      };

      stateChange.balance = formatBalance();

      // ============================
      // other tokens
      // ============================
      const formatOtherTokens = () => {
        // Loop through balance and delegation to figure out what the other tokens are
        const otherTokenUnits = new Set<string>();
        const otherTokens: OtherTokenType[] = [];
        // available tokens
        const available = data?.accountBalances?.coins ?? [];

        available.forEach((x) => {
          otherTokenUnits.add(x.denom);
        });

        // remove the primary token unit thats being shown in balance
        otherTokenUnits.delete(primaryTokenUnit);

        otherTokenUnits.forEach((x: string) => {
          const availableRawAmount = getDenom(available, x);
          const availableAmount = formatToken(availableRawAmount.amount, x);

          otherTokens.push({
            denom: tokenUnits?.x?.display ?? x,
            available: availableAmount,
            reward: defaultTokenUnit,
            commission: defaultTokenUnit,
          });
        });

        return {
          data: otherTokens,
          count: otherTokens.length,
        };
      };

      formatOtherTokens();

      stateChange.otherTokens = formatOtherTokens();

      return stateChange;
    };

    // fetchWithdrawalAddress();
    fetchBalance();
  }, [handleSetState, router.query.address]);

  return {
    state,
  };
};
