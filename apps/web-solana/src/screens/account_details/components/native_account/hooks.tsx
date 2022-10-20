import { useState } from 'react';
import Big from 'big.js';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useNativeAccountDetailsQuery,
  NativeAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import { NativeAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useNativeAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<NativeAccountState>({
    loading: false,
    exists: true,
    overview: {
      address: '',
    },
    balance: {
      native: defaultTokenUnit,
      stake: defaultTokenUnit,
      nonce: defaultTokenUnit,
      vote: defaultTokenUnit,
      total: defaultTokenUnit,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useNativeAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatNativeAccounts(data));
    },
  });

  const formatNativeAccounts = (data: NativeAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
      });
    };
    stateChange.overview = formatOverview();

    // ==========================
    // Balance
    // ==========================
    const formatBalance = () => {
      const native: number = R.pathOr(0, ['accountBalance', 0, 'balance'], data);
      const stakes = R.pathOr([], ['stake', 'nodes'], data);
      const stakeReduced: string = stakes.reduce((a, b) => {
        return Big(a).add(R.pathOr(0, ['nativeBalance', 'balance'], b)).toString();
      }, 0);
      const nonces = R.pathOr([], ['nonce', 'nodes'], data);
      const nonceReduced: string = nonces.reduce((a, b) => {
        return Big(a).add(R.pathOr(0, ['nativeBalance', 'balance'], b)).toString();
      }, 0);
      const votes = R.pathOr([], ['validator', 'nodes'], data);
      const voteReduced: string = votes.reduce((a, b) => {
        return Big(a).add(R.pathOr(0, ['nativeBalance', 'balance'], b)).toString();
      }, 0);

      const total = Big(native)
        .add(stakeReduced)
        .add(nonceReduced)
        .add(voteReduced)
        .toString();

      return ({
        native: formatToken(native, chainConfig.primaryTokenUnit),
        stake: formatToken(stakeReduced, chainConfig.primaryTokenUnit),
        nonce: formatToken(nonceReduced, chainConfig.primaryTokenUnit),
        vote: formatToken(voteReduced, chainConfig.primaryTokenUnit),
        total: formatToken(total, chainConfig.primaryTokenUnit),
      });
    };
    stateChange.balance = formatBalance();
    return stateChange;
  };

  return ({
    state,
  });
};
