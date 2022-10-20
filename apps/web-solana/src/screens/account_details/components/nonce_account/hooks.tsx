import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useNonceAccountDetailsQuery,
  NonceAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import { NonceAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useNonceAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<NonceAccountState>({
    loading: false,
    overview: {
      address: '',
      authority: '',
      balance: defaultTokenUnit,
      blockhash: '',
      fee: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useNonceAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatNonceAccounts(data));
    },
  });

  const formatNonceAccounts = (data: NonceAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
        authority: R.pathOr('', ['nonceAccount', 0, 'authority'], data),
        balance: formatToken(
          R.pathOr(0, ['nonceAccount', 0, 'nativeBalance', 'balance'], data),
          chainConfig.primaryTokenUnit,
        ),
        blockhash: R.pathOr('', ['nonceAccount', 0, 'blockhash'], data),
        fee: R.pathOr('', ['nonceAccount', 0, 'lamportsPerSignature'], data),
      });
    };
    stateChange.overview = formatOverview();

    return stateChange;
  };

  return ({
    state,
  });
};
