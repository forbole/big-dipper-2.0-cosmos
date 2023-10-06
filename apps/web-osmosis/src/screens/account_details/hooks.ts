import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import type { AccountDetailState, OtherTokenType } from '@/screens/account_details/types';
import {
  useAccountWithdrawalAddress,
  useAvailableBalances,
  useCommission,
  useDelegationBalance,
  useRewards,
  useUnbondingBalance,
} from '@/screens/account_details/utils';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';

const { extra, primaryTokenUnit, tokenUnits } = chainConfig();

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

const initialState: AccountDetailState = {
  loading: true,
  balanceLoading: true,
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

type Data = {
  delegationRewards?: ReturnType<typeof useRewards>['delegationRewards'];
  accountBalances?: ReturnType<typeof useAvailableBalances>['accountBalances'];
  delegationBalance?: ReturnType<typeof useDelegationBalance>['delegationBalance'];
  unbondingBalance?: ReturnType<typeof useUnbondingBalance>['unbondingBalance'];
  commission?: ReturnType<typeof useCommission>['commission'];
};

// ============================
// rewards
// ============================
const formatRewards = (data?: Data) => {
  const rewardsDict: AccountDetailState['rewards'] = {};
  // log all the rewards
  data?.delegationRewards?.forEach((x) => {
    if (!x) return;
    const coins = x.coins ?? [];
    const denomAmount = getDenom(coins, primaryTokenUnit);
    const denomFormat = formatToken(denomAmount.amount, primaryTokenUnit);
    rewardsDict[x.validatorAddress] = denomFormat;
  });
  return rewardsDict;
};

// ============================
// balance
// ============================
const formatBalance = (data?: Data) => {
  const available = getDenom(R.pathOr([], ['accountBalances', 'coins'], data), primaryTokenUnit);
  const availableAmount = formatToken(available.amount, primaryTokenUnit);
  const delegate = getDenom(R.pathOr([], ['delegationBalance', 'coins'], data), primaryTokenUnit);
  const delegateAmount = formatToken(delegate.amount, primaryTokenUnit);

  const unbonding = getDenom(R.pathOr([], ['unbondingBalance', 'coins'], data), primaryTokenUnit);
  const unbondingAmount = formatToken(unbonding.amount, primaryTokenUnit);

  const rewards = (data?.delegationRewards ?? []).reduce((a, b) => {
    if (!b) return a;
    const coins = b.coins ?? [];
    const dsmCoins = getDenom(coins, primaryTokenUnit);

    return Big(a).plus(dsmCoins.amount).toPrecision() ?? '';
  }, '0');
  const rewardsAmount = formatToken(rewards, primaryTokenUnit);

  const commission = getDenom(R.pathOr([], ['commission', 'coins'], data), primaryTokenUnit);
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

// ==========================
// Format TX
// ==========================
const formatAllBalance = (data?: Data) => {
  const stateChange: Partial<AccountDetailState> = {
    balanceLoading: false,
  };

  stateChange.rewards = formatRewards(data);

  stateChange.balance = formatBalance(data);

  formatOtherTokens(data);

  stateChange.otherTokens = formatOtherTokens(data);

  return stateChange;
};

// ============================
// other tokens
// ============================
const formatOtherTokens = (data?: Data) => {
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
    x?.coins?.forEach((y) => {
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
      if (!b) return a;
      const coins = R.pathOr<NonNullable<(typeof b)['coins']>>([], ['coins'], b);
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
  const address = Array.isArray(router.query.address)
    ? router.query.address[0]
    : router.query.address ?? '';

  // ==========================
  // Desmos Profile
  // ==========================
  const { data: dataDesmosProfile, loading: loadingDesmosProfile } = useDesmosProfile({
    addresses: [address],
    skip: !extra.profile || !address,
  });
  useEffect(
    () => setState((prevState) => ({ ...prevState, desmosProfile: dataDesmosProfile?.[0] })),
    [dataDesmosProfile]
  );

  const commission = useCommission(address);
  const available = useAvailableBalances(address);
  const delegation = useDelegationBalance(address);
  const unbonding = useUnbondingBalance(address);
  const rewards = useRewards(address);

  useEffect(() => {
    const fetchBalance = async () => {
      const formattedRawData = {
        commission: commission?.commission,
        accountBalances: available?.accountBalances,
        delegationBalance: delegation?.delegationBalance,
        unbondingBalance: unbonding?.unbondingBalance,
        delegationRewards: rewards?.delegationRewards,
      };

      handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
    };
    fetchBalance();
  }, [
    available?.accountBalances,
    commission?.commission,
    delegation?.delegationBalance,
    handleSetState,
    rewards?.delegationRewards,
    unbonding?.unbondingBalance,
  ]);

  // ==========================
  // Fetch Data
  // ==========================
  const withdrawalAddress = useAccountWithdrawalAddress(address);
  useEffect(() => {
    handleSetState((prevState) => ({
      ...prevState,
      loading: false,
      overview: {
        address: address ?? '',
        withdrawalAddress: withdrawalAddress.withdrawalAddress?.address ?? '',
      },
    }));
  }, [handleSetState, address, withdrawalAddress]);

  if (loadingDesmosProfile) state.loading = true;

  return { state };
};
// function useBoundingBalance(_address?: string) {
//   throw new Error('Function not implemented.');
// }
