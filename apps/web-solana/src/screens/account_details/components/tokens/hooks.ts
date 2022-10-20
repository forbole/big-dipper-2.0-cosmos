import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useNativeAccountTokensQuery,
  NativeAccountTokensQuery,
} from '@graphql/types';
import { formatTokenByExponent } from '@utils/format_token';
import { TokensState } from './types';

export const useTokens = () => {
  const router = useRouter();
  const [state, setState] = useState<TokensState>({
    loading: true,
    tokens: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useNativeAccountTokensQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      const tokens = formatTokens(data);
      handleSetState({
        loading: false,
        tokens,
      });
    },
  });

  const formatTokens = (data: NativeAccountTokensQuery) => {
    return data.tokens.map((x) => {
      const decimal = R.pathOr(0, ['tokenAccount', 'tokenInfo', 'decimals'], x);
      const amount = formatTokenByExponent(
        x.balance,
        decimal,
      );
      return ({
        token: R.pathOr('', ['tokenAccount', 'tokenUnit', 'unitName'], x),
        mint: R.pathOr('', ['tokenAccount', 'tokenUnit', 'mint'], x),
        amount: {
          value: amount,
          baseDenom: '',
          displayDenom: '',
          exponent: decimal,
        },
      });
    }).filter((x) => x.token || x.mint);
  };

  return {
    state,
  };
};
