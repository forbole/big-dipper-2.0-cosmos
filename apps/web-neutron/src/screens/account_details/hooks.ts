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
import { useAccountWithdrawalAddress, useAvailableBalances } from '@/screens/account_details/utils';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import { useValidatorAddressesQuery } from '@/graphql/types/provider_types';

const { extra, primaryTokenUnit, tokenUnits, prefix } = chainConfig();

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
    total: defaultTokenUnit,
  },
};

type Data = {
  accountBalances?: unknown;
};

// ============================
// balance
// ============================
const formatBalance = (data: Data): BalanceType => {
  const available = getDenom(R.pathOr([], ['accountBalances', 'coins'], data), primaryTokenUnit);
  const availableAmount = formatToken(available.amount, primaryTokenUnit);
  const total = Big(availableAmount.value).toFixed(tokenUnits?.[primaryTokenUnit].exponent);

  const balance: BalanceType = {
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

// ============================
// other tokens
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

  // remove the primary token unit thats being shown in balance
  otherTokenUnits.delete(primaryTokenUnit);

  otherTokenUnits.forEach((x: string) => {
    const availableRawAmount = getDenom(available, x);
    const availableAmount = formatToken(availableRawAmount.amount, x);

    otherTokens.push({
      denom: tokenUnits?.[x]?.display ?? x,
      available: availableAmount,
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
    balanceLoading: false,
  };

  stateChange.balance = formatBalance(data);

  formatOtherTokens(data);

  stateChange.otherTokens = formatOtherTokens(data);

  return stateChange as AccountDetailState;
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: AccountDetailState) => AccountDetailState) => {
      setState((prevState: AccountDetailState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const { data: valAddressesInfo } = useValidatorAddressesQuery();

  const address = Array.isArray(router.query.address)
    ? router.query.address[0]
    : router.query.address ?? '';

  const [providerAddress, setProviderAddress] = useState(address);

  const [, setConsumerAddress] = useState(address);

  useEffect(() => {
    let provider = '';
    let consumer = '';
    if (valAddressesInfo?.ccv_validator) {
      if (providerAddress.startsWith(prefix.consensus)) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.consumer_consensus_address === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.provider_self_delegate_address ?? '';
          consumer = matchingValidator.consumer_self_delegate_address ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
        setConsumerAddress(consumer);
      } else if (providerAddress.startsWith(prefix.account)) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.consumer_self_delegate_address === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.provider_self_delegate_address ?? '';
          consumer = matchingValidator.consumer_self_delegate_address ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
        setConsumerAddress(consumer);
      } else if (providerAddress.startsWith('cosmosvaloper')) {
        const matchingValidator = valAddressesInfo.ccv_validator.find(
          (x) => x.validator?.validatorInfo?.operatorAddress === providerAddress
        );
        if (matchingValidator) {
          provider = matchingValidator.provider_self_delegate_address ?? '';
          consumer = matchingValidator.consumer_self_delegate_address ?? '';
        } else {
          provider = address;
        }
        setProviderAddress(provider);
        setConsumerAddress(consumer);
      }
    }
  }, [address, providerAddress, valAddressesInfo]);

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

  const available = useAvailableBalances(providerAddress);

  useEffect(() => {
    const formattedRawData: {
      accountBalances?: any;
    } = {};
    formattedRawData.accountBalances = R.pathOr({ coins: [] }, ['accountBalances'], available);
    handleSetState((prevState) => ({ ...prevState, ...formatAllBalance(formattedRawData) }));
  }, [available, handleSetState]);

  // ==========================
  // Fetch Data
  // ==========================
  const withdrawalAddress = useAccountWithdrawalAddress(providerAddress);
  useEffect(() => {
    handleSetState((prevState) => ({
      ...prevState,
      overview: {
        address: address ?? '',
        withdrawalAddress:
          address ?? withdrawalAddress?.bdjuno_provider?.withdrawalAddress?.address ?? '',
      },
    }));
  }, [
    handleSetState,
    address,
    withdrawalAddress?.bdjuno_provider?.withdrawalAddress?.address,
    providerAddress,
  ]);

  return { state };
};
