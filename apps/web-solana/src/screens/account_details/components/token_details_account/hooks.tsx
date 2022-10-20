import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTokenDetailsAccountDetailsQuery,
  TokenDetailsAccountDetailsQuery,
} from '@graphql/types';
import { formatTokenByExponent } from '@utils/format_token';
import { NonceAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useTokenDetailAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<NonceAccountState>({
    loading: false,
    overview: {
      address: '',
      owner: '',
      balance: defaultTokenUnit,
      mint: '',
      mintImageUrl: '',
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useTokenDetailsAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTokenAccounts(data));
    },
  });

  const formatTokenAccounts = (data: TokenDetailsAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      const decimals = R.pathOr(0, [
        'tokenAccount',
        0,
        'tokenInfo',
        'decimals',
      ], data);

      const balance = {
        value: formatTokenByExponent(
          R.pathOr(0, ['tokenAccountBalance', 0, 'balance'], data),
          decimals,
        ),
        baseDenom: '',
        displayDenom: R.pathOr('', ['tokenAccount', 0, 'tokenUnit', 'unitName'], data),
        exponent: decimals,
      };
      return ({
        address: router.query.address,
        owner: R.pathOr('', ['tokenAccount', 0, 'owner'], data),
        mint: R.pathOr('', ['tokenAccount', 0, 'mint'], data),
        mintImageUrl: R.pathOr('', ['tokenAccount', 0, 'tokenUnit', 'logoUrl'], data),
        balance,
      });
    };
    stateChange.overview = formatOverview();

    return stateChange;
  };

  return ({
    state,
  });
};
