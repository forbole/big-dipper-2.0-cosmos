import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import type {
  AccountDetailState,
  BalanceType,
  OtherTokenType,
} from '@/screens/account_details/types';
import { useAvailableBalances, useDelegationBalance } from '@/screens/account_details/utils';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';

const { extra, primaryTokenUnit, tokenUnits } = chainConfig();

type Data = {
  // delegationRewards?: Array<{
  //   coins: Array<MsgCoin>;
  //   validatorAddress?: string;
  // }>;
  accountBalances?: ReturnType<typeof useAvailableBalances>['accountBalances'];
  delegationBalance?: ReturnType<typeof useDelegationBalance>['delegationBalance'];
};

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

// ============================
// balance
// ============================
const formatBalance = (data: Data) => {
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

// ============================
// other tokens
// ============================
const formatOtherTokens = (data: Data) => {
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

// ==========================
// Format Data
// ==========================
const formatAllBalance = (data: Data) => {
  const stateChange: Partial<AccountDetailState> = {
    loading: false,
  };

  stateChange.balance = formatBalance(data);

  formatOtherTokens(data);

  stateChange.otherTokens = formatOtherTokens(data);

  return stateChange;
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

  const available = useAvailableBalances(address);
  const delegation = useDelegationBalance(address);
  useEffect(() => {
    const formattedRawData = {
      accountBalances: available?.accountBalances,
      delegationBalance: delegation?.delegationBalance,
    };

    handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
  }, [available, delegation, handleSetState]);

  // // ==========================
  // // Fetch Data
  // // ==========================
  // const withdrawalAddress = useWithdrawalAddress(address);
  // useEffect(() => {
  //   handleSetState((prevState) => ({
  //     ...prevState,
  //     overview: {
  //       address: address ?? '',
  //       withdrawalAddress: withdrawalAddress?.withdrawalAddress?.address ?? '',
  //     },
  //   }));
  // }, [address, handleSetState, withdrawalAddress]);

  if (loadingDesmosProfile) state.loading = true;

  return { state };
};
