import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import { getDenom } from '@/utils/get_denom';
import { formatToken } from '@/utils/format_token';
import chainConfig from '@/chainConfig';
import { isValidAddress } from '@/utils/prefix_convert';
import { useDesmosProfile } from '@/hooks';
import type { AccountDetailState } from '@/screens/account_details/types';
import {
  fetchAvailableBalances,
  fetchDelegationBalance,
  // fetchAccountWithdrawalAddress,
} from '@/screens/account_details/utils';

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

  const handleSetState = useCallback((stateChange: Partial<AccountDetailState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    if (!isValidAddress(router.query.address as string)) {
      handleSetState({
        loading: false,
        exists: false,
      });
    } else if (chainConfig.extra.profile) {
      fetchDesmosProfile(router.query.address as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

  useEffect(() => {
    // ==========================
    // Fetch Data
    // ==========================
    // const fetchWithdrawalAddress = async () => {
    //   const data = await fetchAccountWithdrawalAddress(router.query.address as string);
    //   handleSetState({
    //     overview: {
    //       address: router.query.address,
    //       withdrawalAddress: R.pathOr('', ['withdrawalAddress', 'address'], data),
    //     },
    //   });
    // };

    const fetchBalance = async () => {
      const address = router.query.address as string;
      const promises = [fetchAvailableBalances(address), fetchDelegationBalance(address)];
      const [available, delegation] = await Promise.allSettled(promises);

      const formattedRawData: any = {};
      formattedRawData.accountBalances = R.pathOr([], ['value', 'accountBalances'], available);
      formattedRawData.delegationBalance = R.pathOr([], ['value', 'delegationBalance'], delegation);

      handleSetState(formatAllBalance(formattedRawData));
    };

    // ==========================
    // Format Data
    // ==========================
    const formatAllBalance = (data: any) => {
      const stateChange: any = {
        loading: false,
      };

      // ============================
      // balance
      // ============================
      const formatBalance = () => {
        const available = getDenom(
          R.pathOr([], ['accountBalances', 'coins'], data),
          chainConfig.primaryTokenUnit
        );
        const availableAmount = formatToken(available.amount, chainConfig.primaryTokenUnit);

        const delegate = getDenom(
          R.pathOr([], ['delegationBalance', 'coins'], data),
          chainConfig.primaryTokenUnit
        );
        const delegateAmount = formatToken(delegate.amount, chainConfig.primaryTokenUnit);

        const total = Big(availableAmount.value)
          .plus(delegateAmount.value)
          .toFixed(chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent);

        const balance = {
          available: availableAmount,
          total: {
            value: total,
            displayDenom: availableAmount.displayDenom,
            baseDenom: availableAmount.baseDenom,
            exponent: availableAmount.exponent,
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
        const otherTokens: any[] = [];
        // available tokens
        const available = R.pathOr([], ['accountBalances', 'coins'], data);

        available.forEach((x: any) => {
          otherTokenUnits.add(x.denom);
        });

        // remove the primary token unit thats being shown in balance
        otherTokenUnits.delete(chainConfig.primaryTokenUnit);

        otherTokenUnits.forEach((x: string) => {
          const availableRawAmount = getDenom(available, x);
          const availableAmount = formatToken(availableRawAmount.amount, x);

          otherTokens.push({
            denom: R.pathOr(x, ['tokenUnits', x, 'display'], chainConfig),
            available: availableAmount,
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
