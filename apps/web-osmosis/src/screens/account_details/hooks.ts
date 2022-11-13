import { useState, useEffect } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import { getDenom } from 'ui/utils/get_denom';
import { formatToken } from 'ui/utils/format_token';
import chainConfig from 'ui/chainConfig';
import { isValidAddress } from 'ui/utils/prefix_convert';
import { useDesmosProfile } from '@hooks';
import { AccountDetailState } from './types';
import {
  fetchAccountWithdrawalAddress,
  fetchAvailableBalances,
  fetchCommission,
  fetchDelegationBalance,
  fetchRewards,
  fetchUnbondingBalance,
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
    unbonding: defaultTokenUnit,
    reward: defaultTokenUnit,
    commission: defaultTokenUnit,
    total: defaultTokenUnit,
  },
  rewards: {},
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
    fetchWithdrawalAddress();
    fetchBalance();
  }, [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  const fetchWithdrawalAddress = async () => {
    const data = await fetchAccountWithdrawalAddress(router.query.address as string);
    handleSetState({
      overview: {
        address: router.query.address,
        withdrawalAddress: R.pathOr('', ['withdrawalAddress', 'address'], data),
      },
    });
  };

  const fetchBalance = async () => {
    const address = router.query.address as string;
    const promises = [
      fetchCommission(address),
      fetchAvailableBalances(address),
      fetchDelegationBalance(address),
      fetchUnbondingBalance(address),
      fetchRewards(address),
    ];
    const [commission, available, delegation, unbonding, rewards] = await Promise.allSettled(
      promises
    );

    const formattedRawData: any = {};
    formattedRawData.commission = R.pathOr([], ['value', 'commission'], commission);
    formattedRawData.accountBalances = R.pathOr([], ['value', 'accountBalances'], available);
    formattedRawData.delegationBalance = R.pathOr([], ['value', 'delegationBalance'], delegation);
    formattedRawData.unbondingBalance = R.pathOr([], ['value', 'unbondingBalance'], unbonding);
    formattedRawData.delegationRewards = R.pathOr([], ['value', 'delegationRewards'], rewards);

    handleSetState(formatAllBalance(formattedRawData));
  };

  // ==========================
  // Format TX
  // ==========================
  const formatAllBalance = (data: any) => {
    const stateChange: any = {
      loading: false,
    };

    // ============================
    // rewards
    // ============================
    const formatRewards = () => {
      const rewardsDict: { [key: string]: any } = {};
      // log all the rewards
      R.pathOr([], ['delegationRewards'], data).forEach((x: any) => {
        const coins = R.pathOr([], ['coins'], x);
        const denomAmount = getDenom(coins, chainConfig.primaryTokenUnit);
        const denomFormat = formatToken(denomAmount.amount, chainConfig.primaryTokenUnit);
        rewardsDict[x.validatorAddress] = denomFormat;
      });
      return rewardsDict;
    };

    stateChange.rewards = formatRewards();

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

      const unbonding = getDenom(
        R.pathOr([], ['unbondingBalance', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const unbondingAmount = formatToken(unbonding.amount, chainConfig.primaryTokenUnit);

      const rewards = data.delegationRewards.reduce((a: any, b: any) => {
        const coins = R.pathOr([], ['coins'], b);
        const dsmCoins = getDenom(coins, chainConfig.primaryTokenUnit);

        return Big(a).plus(dsmCoins.amount).toPrecision();
      }, '0');
      const rewardsAmount = formatToken(rewards, chainConfig.primaryTokenUnit);

      const commission = getDenom(
        R.pathOr([], ['commission', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const commissionAmount = formatToken(commission.amount, chainConfig.primaryTokenUnit);

      const total = Big(availableAmount.value)
        .plus(delegateAmount.value)
        .plus(unbondingAmount.value)
        .plus(rewardsAmount.value)
        .plus(commissionAmount.value)
        .toFixed(chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent);

      const balance = {
        available: availableAmount,
        delegate: delegateAmount,
        unbonding: unbondingAmount,
        reward: rewardsAmount,
        commission: commissionAmount,
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

      // rewards tokens
      const rewards = R.pathOr([], ['delegationRewards'], data);

      rewards.forEach((x: any) => {
        x.coins?.forEach((y: any) => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr([], ['commission', 'coins'], data);

      commission.forEach((x: any) => {
        otherTokenUnits.add(x.denom);
      });

      // remove the primary token unit thats being shown in balance
      otherTokenUnits.delete(chainConfig.primaryTokenUnit);

      otherTokenUnits.forEach((x: string) => {
        const availableRawAmount = getDenom(available, x);
        const availableAmount = formatToken(availableRawAmount.amount, x);
        const rewardsRawAmount = rewards.reduce((a: any, b: any) => {
          const coins = R.pathOr([], ['coins'], b);
          const denom = getDenom(coins, x);
          return Big(a).plus(denom.amount).toPrecision();
        }, '0');
        const rewardAmount = formatToken(rewardsRawAmount, x);
        const commissionRawAmount = getDenom(commission, x);
        const commissionAmount = formatToken(commissionRawAmount.amount, x);

        otherTokens.push({
          denom: R.pathOr(x, ['tokenUnits', x, 'display'], chainConfig),
          available: availableAmount,
          reward: rewardAmount,
          commission: commissionAmount,
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
