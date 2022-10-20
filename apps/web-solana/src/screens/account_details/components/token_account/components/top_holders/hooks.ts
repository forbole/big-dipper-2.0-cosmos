import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTokenDetailsHoldersQuery, TokenDetailsHoldersQuery,
} from '@graphql/types';
import { formatTokenByExponent } from '@utils/format_token';
import { HoldersState } from './types';

export const useHolders = () => {
  const router = useRouter();
  const [state, setState] = useState<HoldersState>({
    loading: true,
    exists: true,
    holders: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useTokenDetailsHoldersQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        holders: formatRaws(data),
      });
    },
  });

  const formatRaws = (data: TokenDetailsHoldersQuery) => {
    const decimals = R.pathOr(0, ['token', 0, 'decimals'], data);
    return data.tokenAccountBalance.map((x) => {
      return ({
        holder: x.address,
        amount: formatTokenByExponent(x.balance, decimals),
        decimals,
      });
    });
  };

  return {
    state,
  };
};
