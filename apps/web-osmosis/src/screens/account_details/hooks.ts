import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type { AccountDetailState, OtherTokenType } from '@/screens/account_details/types';
import {
  fetchAccountWithdrawalAddress,
  fetchAvailableBalances,
  fetchCommission,
  fetchDelegationBalance,
  fetchRewards,
  fetchUnbondingBalance,
} from '@/screens/account_details/utils';
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
  const { data: desmosProfile } = useDesmosProfile({
    addresses: Array.isArray(router.query.address)
      ? router.query.address
      : [router.query.address ?? ''],
    skip: !extra.profile,
  });
  state.desmosProfile = desmosProfile?.[0];

  useEffect(() => {
    // ==========================
    // Fetch Data
    // ==========================
    const fetchWithdrawalAddress = async () => {
      const data = await fetchAccountWithdrawalAddress(router.query.address as string);
      handleSetState((prevState) => ({
        ...prevState,
        overview: {
          address: router.query.address as string,
          withdrawalAddress: data?.withdrawalAddress?.address ?? '',
        },
      }));
    };

    // ==========================
    // Format TX
    // ==========================
    const formatAllBalance = (data?: {
      delegationRewards?: Array<{
        coins?: MsgCoin[];
        validatorAddress: string;
      }>;
      accountBalances?: {
        coins?: MsgCoin[];
      };
      delegationBalance?: {
        coins?: MsgCoin[];
      };
      unbondingBalance?: {
        coins?: MsgCoin[];
      };
      commission?: {
        coins?: MsgCoin[];
      };
    }) => {
      const stateChange: Partial<AccountDetailState> = {
        loading: false,
      };

      // ============================
      // rewards
      // ============================
      const formatRewards = () => {
        const rewardsDict: AccountDetailState['rewards'] = {};
        // log all the rewards
        data?.delegationRewards?.forEach((x) => {
          const coins = x?.coins ?? [];
          const denomAmount = getDenom(coins, primaryTokenUnit);
          const denomFormat = formatToken(denomAmount.amount, primaryTokenUnit);
          rewardsDict[x.validatorAddress] = denomFormat;
        });
        return rewardsDict;
      };

      stateChange.rewards = formatRewards();

      // ============================
      // balance
      // ============================
      const formatBalance = () => {
        const available = getDenom(data?.accountBalances?.coins, primaryTokenUnit);
        const availableAmount = formatToken(available.amount, primaryTokenUnit);
        const delegate = getDenom(data?.delegationBalance?.coins, primaryTokenUnit);
        const delegateAmount = formatToken(delegate.amount, primaryTokenUnit);

        const unbonding = getDenom(data?.unbondingBalance?.coins, primaryTokenUnit);
        const unbondingAmount = formatToken(unbonding.amount, primaryTokenUnit);

        const rewards = (data?.delegationRewards ?? []).reduce((a, b) => {
          const coins = b?.coins ?? [];
          const dsmCoins = getDenom(coins, primaryTokenUnit);

          return Big(a).plus(dsmCoins.amount).toPrecision() ?? '';
        }, '0');
        const rewardsAmount = formatToken(rewards, primaryTokenUnit);

        const commission = getDenom(data?.commission?.coins, primaryTokenUnit);
        const commissionAmount = formatToken(commission.amount, primaryTokenUnit);

        const total = Big(availableAmount.value)
          .plus(delegateAmount.value)
          .plus(unbondingAmount.value)
          .plus(rewardsAmount.value)
          .plus(commissionAmount.value)
          .toFixed(tokenUnits?.[primaryTokenUnit].exponent);

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
        const otherTokens: OtherTokenType[] = [];
        // available tokens
        const available = data?.accountBalances?.coins ?? [];

        available.forEach((x) => {
          otherTokenUnits.add(x.denom);
        });

        // rewards tokens
        const rewards = data?.delegationRewards ?? [];

        rewards.forEach((x) => {
          x.coins?.forEach((y) => {
            otherTokenUnits.add(y.denom);
          });
        });

        // commission tokens
        const commission = data?.commission?.coins ?? [];

        commission.forEach((x) => {
          otherTokenUnits.add(x.denom);
        });

        // remove the primary token unit thats being shown in balance
        otherTokenUnits.delete(primaryTokenUnit);

        otherTokenUnits.forEach((x: string) => {
          const availableRawAmount = getDenom(available, x);
          const availableAmount = formatToken(availableRawAmount.amount, x);
          const rewardsRawAmount = rewards.reduce((a, b) => {
            const coins = R.pathOr<NonNullable<typeof b['coins']>>([], ['coins'], b);
            const denom = getDenom(coins, x);
            return Big(a).plus(denom.amount).toPrecision();
          }, '0');
          const rewardAmount = formatToken(rewardsRawAmount, x);
          const commissionRawAmount = getDenom(commission, x);
          const commissionAmount = formatToken(commissionRawAmount.amount, x);

          otherTokens.push({
            denom: tokenUnits?.[x]?.display ?? x,
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

    const fetchBalance = async () => {
      const address = router.query.address as string;
      const promises: [
        ReturnType<typeof fetchCommission>,
        ReturnType<typeof fetchAvailableBalances>,
        ReturnType<typeof fetchDelegationBalance>,
        ReturnType<typeof fetchUnbondingBalance>,
        ReturnType<typeof fetchRewards>
      ] = [
        fetchCommission(address),
        fetchAvailableBalances(address),
        fetchDelegationBalance(address),
        fetchUnbondingBalance(address),
        fetchRewards(address),
      ];
      const [commission, available, delegation, unbonding, rewards] = await Promise.allSettled(
        promises
      );

      if (commission.status !== 'fulfilled') throw commission.reason;
      if (available.status !== 'fulfilled') throw available.reason;
      if (delegation.status !== 'fulfilled') throw delegation.reason;
      if (unbonding.status !== 'fulfilled') throw unbonding.reason;
      if (rewards.status !== 'fulfilled') throw rewards.reason;

      const formattedRawData = {
        commission: commission?.value?.commission ?? [],
        accountBalances: available?.value?.accountBalances ?? [],
        delegationBalance: delegation?.value?.delegationBalance ?? [],
        unbondingBalance: unbonding?.value?.unbondingBalance ?? [],
        delegationRewards: rewards?.value?.delegationRewards ?? [],
      };

      handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
    };

    fetchWithdrawalAddress();
    fetchBalance();
  }, [handleSetState, router.query.address]);

  return {
    state,
  };
};
