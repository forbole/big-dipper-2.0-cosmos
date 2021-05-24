import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import { useRouter } from 'next/router';
import {
  AccountQuery,
  useAccountQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { AccountDetailState } from './types';

export const useAccountDetails = () => {
  const { findAddress } = useChainContext();
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>({
    loading: true,
    exists: true,
    overview: {
      address: '',
      withdrawalAddress: '',
    },
    balance: {
      available: 0,
      delegate: 0,
      unbonding: 0,
      reward: 0,
      commission: 0,
      total: 0,
    },
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
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
    const stateChange: any = {
      loading: false,
    };

    if (!data.account.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // ============================
    // overview
    // ============================
    const overview = {
      address: data.account[0].address,
      withdrawalAddress: R.pathOr(data.account[0].address, ['account', 0, 'delegationRewards', 0, 'withdrawAddress'], data),
    };

    stateChange.overview = overview;

    // ============================
    // balance
    // ============================
    const available = getDenom(
      R.pathOr([], ['account', 0, 'accountBalances', 0, 'coins'], data),
    );
    const availableDenom = formatDenom(available.amount);

    const delegate = R.pathOr([], ['account', 0, 'delegations'], data).reduce((a, b) => {
      return a + numeral(b.amount.amount).value();
    }, 0);
    const delegateDenom = formatDenom(delegate);

    const unbonding = R.pathOr([], ['account', 0, 'unbonding'], data).reduce((a, b) => {
      return a + numeral(b.amount.amount).value();
    }, 0);
    const unbondingDenom = formatDenom(unbonding);

    const reward = R.pathOr([], ['account', 0, 'delegationRewards'], data).reduce((a, b) => {
      const denom = getDenom(b.amount);
      return a + numeral(denom.amount).value();
    }, 0);

    const rewardDenom = formatDenom(reward);

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

    stateChange.balance = balance;

    // ============================
    // delegations
    // ============================
    // const rewardsDict = {};

    // data.account[0].delegationRewards.forEach((x) => {
    //   const denomAmount = getDenom(x.amount);
    //   const denomFormat = formatDenom(denomAmount.amount);
    //   rewardsDict[x.validator.validatorInfo.operatorAddress] = denomFormat;
    // });

    // const delegations = data.account[0].delegations.map((x) => {
    //   const validator = x.validator.validatorInfo.operatorAddress;
    //   return ({
    //     validator,
    //     reward: rewardsDict[validator],
    //     amount: formatDenom(x.amount.amount),
    //     commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
    //   });
    // });

    // results.rawData.staking.delegations = delegations;

    // ============================
    // redelegations
    // ============================
    // const redelegations = data.account[0].redelegations.map((x) => {
    //   return ({
    //     to: x.to,
    //     from: x.from,
    //     linkedUntil: x.completionTime,
    //     amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
    //   });
    // });

    // results.rawData.staking.redelegations = redelegations;

    // ============================
    // unbondings
    // ============================
    // const unbondings = data.account[0].unbonding.map((x) => {
    //   const validator = x.validator.validatorInfo.operatorAddress;
    //   return ({
    //     validator,
    //     amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
    //     linkedUntil: x.completionTimestamp,
    //     commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
    //   });
    // });

    // results.rawData.staking.unbondings = unbondings;

    return stateChange;
  };

  return {
    state,
  };
};
