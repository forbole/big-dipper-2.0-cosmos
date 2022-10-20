import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useNativeRelatedAccountsQuery, NativeRelatedAccountsQuery,
} from '@graphql/types';
import { AccountsState } from './types';

export const useAccountsHook = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [state, setState] = useState<AccountsState>({
    loading: true,
    stake: [],
    nonce: [],
    vote: [],
    token: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setTab(newValue);
  };

  useNativeRelatedAccountsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatData(data));
    },
  });

  const formatData = (data: NativeRelatedAccountsQuery) => {
    return ({
      loading: false,
      stake: R.pathOr([], ['stakeAccount'], data).map((x) => x.address),
      nonce: R.pathOr([], ['nonceAccount'], data).map((x) => x.address),
      vote: R.pathOr([], ['validator'], data).map((x) => x.address),
      token: R.pathOr([], ['tokenAccount'], data).map((x) => x.address),
    });
  };

  return {
    handleTabChange,
    tab,
    state,
  };
};
