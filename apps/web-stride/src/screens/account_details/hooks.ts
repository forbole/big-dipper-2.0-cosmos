import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import type {
  BalanceType,
  OtherTokenType,
  AccountWithdrawalAddressState,
  AccountDesmosProfileState,
  AccountBalanceState,
  AccountRewardsState,
} from '@/screens/account_details/types';
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
import { useValidatorConsumerProviderAddressesQuery } from '@/graphql/types/general_types';

const { extra, primaryTokenUnit, tokenUnits, prefix } = chainConfig();

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

const balanceInitialState: AccountBalanceState = {
  loading: true,
  exists: true,
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

const desmosProfileInitialState: AccountDesmosProfileState = {
  loading: true,
  exists: true,
  desmosProfile: null,
};

const withdrawalAddrInitialState: AccountWithdrawalAddressState = {
  loading: true,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
};

const rewardsInitialState: AccountRewardsState = {
  loading: true,
  rewards: {},
};

type Data = {
  delegationRewards?: unknown;
  accountBalances?: unknown;
  delegationBalance?: unknown;
  unbondingBalance?: unknown;
  commission?: unknown;
};

type RewardsData = {
  delegationRewards?: unknown;
};

// ============================
// Format rewards
// ============================
const formatRewards = (_data: Data | RewardsData) => {
  const rewardsDict: { [key: string]: TokenUnit } = {};
  // log all the rewards
  // data?.delegationRewards?.forEach((x) => {
  //   if (!x) return;
  //   const coins = x.coins ?? [];
  //   const denomAmount = getDenom(coins, primaryTokenUnit);
  //   const denomFormat = formatToken(denomAmount.amount, primaryTokenUnit);
  //   rewardsDict[x.validatorAddress ?? ''] = denomFormat;
  // });
  return rewardsDict;
};

// ============================
// Format balance
// ============================
const formatBalance = (data: Data): BalanceType => {
  const available = getDenom(R.pathOr([], ['accountBalances', 'coins'], data), primaryTokenUnit);
  const availableAmount = formatToken(available.amount, primaryTokenUnit);
  const delegate = getDenom(R.pathOr([], ['delegationBalance', 'coins'], data), primaryTokenUnit);
  const delegateAmount = formatToken(delegate.amount, primaryTokenUnit);

  const unbonding = getDenom(R.pathOr([], ['unbondingBalance', 'coins'], data), primaryTokenUnit);
  const unbondingAmount = formatToken(unbonding.amount, primaryTokenUnit);

  const rewards = '0';
  // data.delegationRewards?.reduce((a, b) => {
  //   if (!b) return a;
  //   const coins = R.pathOr([], ['coins'], b);
  //   const dsmCoins = getDenom(coins, primaryTokenUnit);

  //   return Big(a).plus(dsmCoins.amount).toPrecision();
  // }, '0') ?? '0';
  const rewardsAmount = formatToken(rewards, primaryTokenUnit);

  // const commission = getDenom(
  //   R.pathOr<NonNullable<NonNullable<(typeof data)['commission']>['coins']>>(
  //     [],
  //     ['commission', 'coins'],
  //     data
  //   ),
  //   primaryTokenUnit
  // );
  const commissionAmount = formatToken(0, primaryTokenUnit);

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

// ============================
// Format other tokens
// ============================
const formatOtherTokens = (data: Data) => {
  // Loop through balance and delegation to figure out what the other tokens are
  const otherTokenUnits = new Set<string>();
  const otherTokens: OtherTokenType[] = [];
  // available tokens
  const available = R.pathOr<MsgCoin[]>([], ['accountBalances', 'coins'], data);

  available.forEach((x) => {
    otherTokenUnits.add(x.denom);
  });

  // rewards tokens
  const rewards = R.pathOr<Array<{ coins: Array<MsgCoin> }>>([], ['delegationRewards'], data);

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

// ==========================
// Format Balance Data
// ==========================
const formatAllBalance = (data: Data) => {
  const stateChange: Partial<AccountBalanceState> = {
    loading: false,
  };
  stateChange.rewards = formatRewards(data);

  stateChange.balance = formatBalance(data);

  stateChange.otherTokens = formatOtherTokens(data);

  return stateChange;
};

export const useAccountProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDesmosProfileState>(desmosProfileInitialState);

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
    () =>
      setState((prevState) => ({
        ...prevState,
        desmosProfile: dataDesmosProfile?.[0],
        loading: loadingDesmosProfile,
      })),
    [dataDesmosProfile, loadingDesmosProfile]
  );

  return { profileState: state };
};

export const useAccountBalance = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountBalanceState>(balanceInitialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: AccountBalanceState) => AccountBalanceState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const { data: valAddressesInfo } = useValidatorConsumerProviderAddressesQuery();

  const address = Array.isArray(router.query.address)
    ? router.query.address[0]
    : router.query.address ?? '';

  const [providerAddress, setProviderAddress] = useState(address);

  useEffect(() => {
    let provider = '';
    if (valAddressesInfo?.ccv_validator) {
      if (providerAddress.startsWith(prefix.validator)) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.consumerOperatorAddress === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.providerOperatorAddress ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
      }
    }
  }, [address, providerAddress, valAddressesInfo]);

  const commission = useCommission(providerAddress);
  const available = useAvailableBalances(providerAddress);
  const delegation = useDelegationBalance(providerAddress);
  const unbonding = useUnbondingBalance(providerAddress);
  const rewards = useRewards(providerAddress);

  useEffect(() => {
    const formattedRawData: {
      commission?: any;
      accountBalances?: any;
      delegationBalance?: any;
      unbondingBalance?: any;
      delegationRewards?: any;
    } = {};
    formattedRawData.commission = R.pathOr({ coins: [] }, ['commission'], commission);
    formattedRawData.accountBalances = R.pathOr({ coins: [] }, ['accountBalances'], available);
    formattedRawData.delegationBalance = R.pathOr({ coins: [] }, ['delegationBalance'], delegation);
    formattedRawData.unbondingBalance = R.pathOr({ coins: [] }, ['unbondingBalance'], unbonding);
    formattedRawData.delegationRewards = R.pathOr([], ['delegationRewards'], rewards);
    const formatAccountBalance = formatAllBalance(formattedRawData);

    if (Object.keys(formatAccountBalance).length > 0) {
      handleSetState((prevState) => ({
        ...prevState,
        ...formatAccountBalance,
        loading: false,
      }));
    }
  }, [commission, available, delegation, unbonding, rewards, handleSetState]);

  return { state };
};

export const useAccountWithdrawalAddr = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountWithdrawalAddressState>(withdrawalAddrInitialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: AccountWithdrawalAddressState) => AccountWithdrawalAddressState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const { data: valAddressesInfo } = useValidatorConsumerProviderAddressesQuery();

  const address = Array.isArray(router.query.address)
    ? router.query.address[0]
    : router.query.address ?? '';

  const [providerAddress, setProviderAddress] = useState(address);

  useEffect(() => {
    let provider = '';
    if (valAddressesInfo?.ccv_validator) {
      if (providerAddress.startsWith(prefix.validator)) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.consumerOperatorAddress === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.providerOperatorAddress ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
      }
    }
  }, [address, providerAddress, valAddressesInfo]);

  // ==========================
  // Fetch Data
  // ==========================
  const withdrawalAddress = useAccountWithdrawalAddress(providerAddress);
  useEffect(() => {
    handleSetState((prevState) => ({
      ...prevState,
      loading: false,
      overview: {
        address: address ?? '',
        withdrawalAddress: address ?? withdrawalAddress?.withdrawalAddress?.address ?? '',
      },
    }));
  }, [handleSetState, address, withdrawalAddress?.withdrawalAddress?.address, providerAddress]);

  return { state };
};

export const useAccountRewards = () => {
  const router = useRouter();
  const [state, setState] = useState(rewardsInitialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: AccountRewardsState) => AccountRewardsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );
  const { data: valAddressesInfo } = useValidatorConsumerProviderAddressesQuery();

  const address = Array.isArray(router.query.address)
    ? router.query.address[0]
    : router.query.address ?? '';

  const [providerAddress, setProviderAddress] = useState(address);

  useEffect(() => {
    let provider = '';
    if (valAddressesInfo?.ccv_validator) {
      if (providerAddress.startsWith(prefix.validator)) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.consumerOperatorAddress === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.providerOperatorAddress ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
      }
    }
  }, [address, providerAddress, valAddressesInfo]);

  const rewards = useRewards(providerAddress);

  useEffect(() => {
    const formattedRawData: {
      delegationRewards?: any;
    } = {};
    formattedRawData.delegationRewards = R.pathOr([], ['delegationRewards'], rewards);
    const updatedRewards = formatRewards(formattedRawData);

    handleSetState((prevState) => ({
      ...prevState,
      rewards: updatedRewards,
      loading: false,
    }));
  }, [rewards, handleSetState]);

  return { state };
};
