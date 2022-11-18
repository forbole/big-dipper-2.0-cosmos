import { useState, useEffect } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import { getDenom } from 'ui/utils/get_denom';
import { formatToken } from 'ui/utils/format_token';
import chainConfig from 'ui/chainConfig';
import { isValidAddress } from 'ui/utils/prefix_convert';
import { useDesmosProfile } from 'ui/hooks';
import type { AccountDetailState } from './types';
import {
  fetchAvailableBalances,
  fetchDelegationBalance,
  // fetchAccountWithdrawalAddress,
} from './utils';

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

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
  }, [router.query.address]);

  useEffect(() => {
    // fetchWithdrawalAddress();
    fetchBalance();
  }, [router.query.address]);

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

  return {
    state,
  };
};
