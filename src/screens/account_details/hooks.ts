import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import { getDenom } from '@utils/get_denom';
import {
  formatToken,
} from '@utils/format_token';
import { chainConfig } from '@src/configs';
import { useDesmosProfile } from '@hooks';
import { AccountDetailState } from './types';
import {
  fetchAccountWithdrawalAddress,
  fetchAvailableBalances,
  fetchCommission,
  fetchDelegationBalance,
  fetchRewards,
  fetchUnbondingBalance,
  fetchCosmWasmInstantiation,
  fetchCW20TokenBalances,
  fetchCW20TokenInfo,
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
  cosmwasm: {
    admin: '',
    code_id: '',
    label: '',
    result_contract_address: '',
    sender: '',
    success: false,
    transaction: {
      block: {
        height: 0,
      },
    },
  },
  tab: 0,
  cw20TokenBalances: [],
  cw20TokenInfo: {
    name: '',
    denom: '',
    logo: '',
    exponent: 0,
    circulatingSupply: 0,
  },
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const {
    fetchDesmosProfile, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(router.query.address as string);
    }
  },
  [router.query.address]);

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
      fetchCosmWasmInstantiation(address),
      fetchCW20TokenBalances(address),
      fetchCW20TokenInfo(address),
    ];
    const [
      commission,
      available,
      delegation,
      unbonding,
      rewards,
      cosmWasmInstantiation,
      cw20TokenBalances,
      cw20TokenInfo,
    ] = await Promise.allSettled(promises);

    const formattedRawData: any = {};
    formattedRawData.commission = R.pathOr([], ['value', 'commission'], commission);
    formattedRawData.accountBalances = R.pathOr([], ['value', 'accountBalances'], available);
    formattedRawData.delegationBalance = R.pathOr([], ['value', 'delegationBalance'], delegation);
    formattedRawData.unbondingBalance = R.pathOr([], ['value', 'unbondingBalance'], unbonding);
    formattedRawData.delegationRewards = R.pathOr([], ['value', 'delegationRewards'], rewards);
    formattedRawData.cw20TokenBalances = R.pathOr([], ['value'], cw20TokenBalances);
    handleSetState(formatAllBalance(formattedRawData));

    const rawData: any = {};
    rawData.cosmwasm = R.pathOr([], ['value'], cosmWasmInstantiation);
    rawData.cw20TokenInfo = R.pathOr([], ['value'], cw20TokenInfo);
    handleSetState(rawData);
  };

  // ==========================
  // Format Data
  // ==========================
  const formatAllBalance = (data: any) => {
    const stateChange: any = {
      loading: false,
    };

    // ============================
    // rewards
    // ============================
    const formatRewards = () => {
      const rewardsDict = {};
      // log all the rewards
      R.pathOr([], ['delegationRewards'], data).forEach((x) => {
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
        chainConfig.primaryTokenUnit,
      );
      const availableAmount = formatToken(available.amount, chainConfig.primaryTokenUnit);
      const delegate = getDenom(
        R.pathOr([], ['delegationBalance', 'coins'], data),
        chainConfig.primaryTokenUnit,
      );
      const delegateAmount = formatToken(delegate.amount, chainConfig.primaryTokenUnit);

      const unbonding = getDenom(
        R.pathOr([], ['unbondingBalance', 'coins'], data),
        chainConfig.primaryTokenUnit,
      );
      const unbondingAmount = formatToken(unbonding.amount, chainConfig.primaryTokenUnit);

      const rewards = data.delegationRewards.reduce((a, b) => {
        const coins = R.pathOr([], ['coins'], b);
        const dsmCoins = getDenom(coins, chainConfig.primaryTokenUnit);

        return Big(a).plus(dsmCoins.amount).toPrecision();
      }, '0');
      const rewardsAmount = formatToken(rewards, chainConfig.primaryTokenUnit);

      const commission = getDenom(
        R.pathOr([], ['commission', 'coins'], data),
        chainConfig.primaryTokenUnit,
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
      const otherTokenUnits = new Set();
      const otherTokens = [];
      // available tokens
      const available = R.pathOr([], ['accountBalances', 'coins'], data);

      available.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // rewards tokens
      const rewards = R.pathOr([], ['delegationRewards'], data);

      rewards.forEach((x) => {
        x.coins?.forEach((y) => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr([], ['commission', 'coins'], data);

      commission.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // remove the primary token unit thats being shown in balance
      otherTokenUnits.delete(chainConfig.primaryTokenUnit);

      otherTokenUnits.forEach((x: string) => {
        const availableRawAmount = getDenom(available, x);
        const availableAmount = formatToken(availableRawAmount.amount, x);
        const rewardsRawAmount = rewards.reduce((a, b) => {
          const coins = R.pathOr([], ['coins'], b);
          const denom = getDenom(coins, x);
          return Big(a).plus(denom.amount).toPrecision();
        }, 0);
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

      return ({
        data: otherTokens,
        count: otherTokens.length,
      });
    };

    formatOtherTokens();

    stateChange.otherTokens = formatOtherTokens();
    stateChange.cw20TokenBalances = data.cw20TokenBalances;

    return stateChange;
  };

  return {
    state,
    handleTabChange,
  };
};
