import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type {
  AccountDetailState,
  BalanceType,
  OtherTokenType,
} from '@/screens/account_details/types';
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
import { isValidAddress } from '@/utils/prefix_convert';
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
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      const desmosProfile = formatDesmosProfile(data);
      handleSetState((prevState) => ({ ...prevState, desmosProfile }));
      return desmosProfile;
    },
  });

  useEffect(() => {
    if (!isValidAddress(router.query.address as string)) {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        exists: false,
      }));
    } else if (extra.profile) {
      fetchDesmosProfile(router.query.address as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

  useEffect(() => {
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
      const formattedRawData: {
        commission?: { coins: MsgCoin[] };
        accountBalances?: { coins: MsgCoin[] };
        delegationBalance?: { coins: MsgCoin[] };
        unbondingBalance?: { coins: MsgCoin[] };
        delegationRewards?: Array<{ coins: MsgCoin[]; validatorAddress: string }>;
      } = {};
      formattedRawData.commission = R.pathOr<NonNullable<typeof commission['value']['commission']>>(
        { coins: [] },
        ['value', 'commission'],
        commission
      );
      formattedRawData.accountBalances = R.pathOr<
        NonNullable<typeof available['value']['accountBalances']>
      >({ coins: [] }, ['value', 'accountBalances'], available);
      formattedRawData.delegationBalance = R.pathOr<
        NonNullable<typeof delegation['value']['delegationBalance']>
      >({ coins: [] }, ['value', 'delegationBalance'], delegation);
      formattedRawData.unbondingBalance = R.pathOr<
        NonNullable<typeof unbonding['value']['unbondingBalance']>
      >({ coins: [] }, ['value', 'unbondingBalance'], unbonding);
      formattedRawData.delegationRewards = R.pathOr<
        NonNullable<typeof rewards['value']['delegationRewards']>
      >([], ['value', 'delegationRewards'], rewards);

      handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
    };

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

    fetchWithdrawalAddress();
    fetchBalance();
  }, [handleSetState, router.query.address]);

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
    // rewards
    // ============================
    const formatRewards = () => {
      const rewardsDict: { [key: string]: TokenUnit } = {};
      // log all the rewards
      data?.delegationRewards?.forEach((x) => {
        const coins = R.pathOr<NonNullable<typeof x['coins']>>([], ['coins'], x);
        const denomAmount = getDenom(coins, primaryTokenUnit);
        const denomFormat = formatToken(denomAmount.amount, primaryTokenUnit);
        rewardsDict[x.validatorAddress ?? ''] = denomFormat;
      });
      return rewardsDict;
    };

    stateChange.rewards = formatRewards();

    // ============================
    // balance
    // ============================
    const formatBalance = (): BalanceType => {
      const available = getDenom(
        R.pathOr<NonNullable<NonNullable<typeof data['accountBalances']>['coins']>>(
          [],
          ['accountBalances', 'coins'],
          data
        ),
        primaryTokenUnit
      );
      const availableAmount = formatToken(available.amount, primaryTokenUnit);
      const delegate = getDenom(
        R.pathOr<NonNullable<NonNullable<typeof data['delegationBalance']>['coins']>>(
          [],
          ['delegationBalance', 'coins'],
          data
        ),
        primaryTokenUnit
      );
      const delegateAmount = formatToken(delegate.amount, primaryTokenUnit);

      const unbonding = getDenom(
        R.pathOr<NonNullable<NonNullable<typeof data['unbondingBalance']>['coins']>>(
          [],
          ['unbondingBalance', 'coins'],
          data
        ),
        primaryTokenUnit
      );
      const unbondingAmount = formatToken(unbonding.amount, primaryTokenUnit);

      const rewards =
        data.delegationRewards?.reduce((a, b) => {
          const coins = R.pathOr<NonNullable<typeof b['coins']>>([], ['coins'], b);
          const dsmCoins = getDenom(coins, primaryTokenUnit);

          return Big(a).plus(dsmCoins.amount).toPrecision();
        }, '0') ?? '0';
      const rewardsAmount = formatToken(rewards, primaryTokenUnit);

      const commission = getDenom(
        R.pathOr<NonNullable<NonNullable<typeof data['commission']>['coins']>>(
          [],
          ['commission', 'coins'],
          data
        ),
        primaryTokenUnit
      );
      const commissionAmount = formatToken(commission.amount, primaryTokenUnit);

      const total = Big(availableAmount.value)
        .plus(delegateAmount.value)
        .plus(unbondingAmount.value)
        .plus(rewardsAmount.value)
        .plus(commissionAmount.value)
        .toFixed(tokenUnits?.[primaryTokenUnit].exponent);

      const balance: BalanceType = {
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
      const available = R.pathOr<MsgCoin[]>([], ['accountBalances', 'coins'], data);

      available.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // rewards tokens
      const rewards = R.pathOr<
        Array<{
          coins: Array<MsgCoin>;
        }>
      >([], ['delegationRewards'], data);

      rewards.forEach((x) => {
        x.coins?.forEach((y) => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr<MsgCoin[]>([], ['commission', 'coins'], data);

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

  return {
    state,
  };
};
