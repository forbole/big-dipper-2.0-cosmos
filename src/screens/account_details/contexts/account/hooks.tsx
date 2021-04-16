import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  useAccountQuery,
  AccountQuery,
} from '@graphql/types';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@src/chain_config';
import { AccountState } from './types';

export const useAccount = (initialState: AccountState) => {
  const router = useRouter();
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
    const availableDenom = formatDenom(available.amount);

    const delegate = R.pathOr({
      amount: 0,
    }, ['account', 0, 'delegations', 0, 'amount'], data);
    const delegateDenom = formatDenom(delegate.amount);

    const unbonding = R.pathOr({
      amount: 0,
    }, ['account', 0, 'unbonding', 0, 'amount'], data);
    const unbondingDenom = formatDenom(unbonding.amount);

    const reward = getDenom(R.pathOr([], ['account', 0, 'delegationRewards', 0, 'amount'], data));
    const rewardDenom = formatDenom(reward.amount);

    const commission = getDenom(R.pathOr([], ['validator', 0, 'commission', 0, 'amount'], data));
    const commissionDenom = formatDenom(commission.amount);

    const total = (
      availableDenom + delegateDenom + unbondingDenom + rewardDenom + commissionDenom);

    const balance = {
      available: availableDenom,
      delegate: delegateDenom,
      unbonding: unbondingDenom,
      reward: rewardDenom,
      commission: commissionDenom,
      total,
    };

    results.rawData.balance = balance;

    return results;
  };

  const formatUi = () => {
    const balanceChart = [
      {
        key: 'balanceAvailable',
        display: `${numeral(state.rawData.balance.available).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        value: state.rawData.balance.available,
      },
      {
        key: 'balanceDelegate',
        display: `${numeral(state.rawData.balance.delegate).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        value: state.rawData.balance.delegate,
      },
      {
        key: 'balanceUnbonding',
        display: `${numeral(state.rawData.balance.unbonding).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        value: state.rawData.balance.unbonding,
      },
      {
        key: 'balanceReward',
        display: `${numeral(state.rawData.balance.reward).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
        value: state.rawData.balance.reward,
      },
    ];

    if (state.rawData.balance.commission) {
      balanceChart.push({
        key: 'balanceCommission',
        display: `${numeral(state.rawData.balance.commission).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
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
        total: `${numeral(state.rawData.balance.total).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      },
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
