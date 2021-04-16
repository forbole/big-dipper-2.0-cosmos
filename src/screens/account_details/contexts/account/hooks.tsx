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
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { AccountState } from './types';

// moment().utc().format('YYYY-MM-DDTHH:mm:ss')

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
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  const formatAccountQuery = (data: AccountQuery) => {
    console.log(data, 'data');
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

    // ============================
    // balance
    // ============================
    const available = getDenom(
      R.pathOr([], ['account', 0, 'accountBalances', 0, 'coins'], data),
    );

    const balance = {
      available: formatDenom(available.amount),
      delegate: 0,
      unbonding: 0,
      reward: 0,
      commission: 0,
      total: 0,
    };

    results.rawData.balance = balance;

    return results;
  };

  const formatUi = () => {
    const balanceChart = [
      {
        key: 'balanceAvailable',
        display: numeral(state.rawData.balance.available).format('0,0.[0000]'),
        value: state.rawData.balance.available,
      },
      {
        key: 'balanceDelegate',
        display: numeral(state.rawData.balance.delegate).format('0,0.[0000]'),
        value: state.rawData.balance.delegate,
      },
      {
        key: 'balanceUnbonding',
        display: numeral(state.rawData.balance.unbonding).format('0,0.[0000]'),
        value: state.rawData.balance.unbonding,
      },
      {
        key: 'balanceReward',
        display: numeral(state.rawData.balance.reward).format('0,0.[0000]'),
        value: state.rawData.balance.reward,
      },
    ];

    if (state.rawData.balance.commission) {
      balanceChart.push({
        key: 'balanceCommission',
        display: numeral(state.rawData.balance.commission).format('0,0.[0000]'),
        value: state.rawData.balance.commission,
      });
    }

    return ({
      account: {
        address: state.rawData.account.address,
        withdrawalAddress: state.rawData.account.withdrawalAddress,
      },
      balance: {
        chart: balanceChart,
        total: numeral(state.rawData.balance.total).format('0,0.[0000]'),
      },
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
