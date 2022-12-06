import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import chainConfig from '@/chainConfig';
import axios from 'axios';
import { ACCOUNT_DETAILS, ACCOUNT_DETAILS_TOKEN_COUNT } from '@/api';
import { formatToken } from '@/utils/format_token';
import type { AccountDetailsType } from '@/screens/account_details/types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

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

  const handleSetState = useCallback((stateChange: Partial<AccountDetailsType>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
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

      const getProfile = () => ({
        address: accountData?.address ?? '',
        username: accountData?.username ?? '',
      });

      newState.profile = getProfile();

      const getOverview = () => ({
        balance: formatToken(accountData?.balance ?? '0', chainConfig().primaryTokenUnit),
        developerReward: formatToken(
          accountData?.developerReward ?? '0',
          chainConfig().primaryTokenUnit
        ),
        shard: accountData?.shard ?? 0,
        tokenCount,
      });

      newState.overview = getOverview();

      handleSetState(newState);
    };

    getAccount();
  }, [handleSetState, router.query.address]);

  return {
    state,
  };
};
