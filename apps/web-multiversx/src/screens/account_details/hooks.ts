/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useEffect, useState } from 'react';
import { ACCOUNT_DETAILS, ACCOUNT_DETAILS_TOKEN_COUNT } from '@/api';
import chainConfig from '@/chainConfig';
import type { AccountDetailsType } from '@/screens/account_details/types';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

const getProfile = (accountData: any) => ({
  address: accountData?.address ?? '',
  username: accountData?.username ?? '',
});

const getOverview = (accountData: any, tokenCount: number) => ({
  balance: formatToken(accountData?.balance ?? '0', primaryTokenUnit),
  developerReward: formatToken(accountData?.developerReward ?? '0', primaryTokenUnit),
  shard: accountData?.shard ?? 0,
  tokenCount,
});

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailsType>({
    loading: true,
    exists: true,
    profile: {
      address: '',
      username: '',
    },
    overview: {
      balance: defaultTokenUnit,
      developerReward: defaultTokenUnit,
      shard: 0,
      tokenCount: 0,
    },
  });

  useEffect(() => {
    const handleSetState = (stateChange: (prevState: AccountDetailsType) => AccountDetailsType) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    };

    const getAccount = async () => {
      const { data: accountData } = await axios.get(
        ACCOUNT_DETAILS(router.query.address as string)
      );

      const { data: tokenCount } = await axios.get(
        ACCOUNT_DETAILS_TOKEN_COUNT(router.query.address as string)
      );

      const newState: Partial<AccountDetailsType> = {
        loading: false,
      };

      newState.profile = getProfile(accountData);

      newState.overview = getOverview(accountData, tokenCount);

      handleSetState((prevState) => ({ ...prevState, ...newState }));
    };

    getAccount();
  }, [router.query.address]);

  return {
    state,
  };
};
