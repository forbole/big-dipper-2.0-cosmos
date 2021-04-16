import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import {
  useAccountQuery,
  AccountQuery,
} from '@graphql/types';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useChainContext } from '@contexts';
import { CodeSharp } from '@material-ui/icons';
import { AccountState } from './types';

export const useAccount = (initialState: AccountState) => {
  const router = useRouter();
  const { findAddress } = useChainContext();
  const [state, setState] = useState(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useAccountQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  const formatAccountQuery = (data: AccountQuery) => {
    const results: any = {
      rawData: {
        loading: false,
      },
    };

    if (!data.account.length) {
      results.rawData.exists = false;
      return results;
    }

    // ============================
    // account
    // ============================
    const account = {
      address: data.account[0].address,
      withdrawalAddress: R.pathOr(data.account[0].address, ['account', 0, 'delegationRewards', 0, 'withdrawAddress'], data),
    };

    results.rawData.account = account;

    return results;
  };

  const formatUi = () => {
    return ({
      account: {
        address: state.rawData.account.address,
        withdrawalAddress: state.rawData.account.withdrawalAddress,
      },
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
