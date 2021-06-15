import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import { useRouter } from 'next/router';
import {
  AccountQuery,
  useAccountQuery,
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@src/configs';
import { AccountDetailState } from './types';

export const useAccountDetails = () => {
  const {
    findAddress, findOperator,
  } = useChainContext();
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
    delegations: {
      data: [],
      count: 0,
    },
    redelegations: {
      data: [],
      count: 0,
    },
    unbondings: {
      data: [],
      count: 0,
    },
    transactions: {
      data: [],
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useAccountQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${R.pathOr('', ['query', 'address'], router)}}`,
    },
    onCompleted: (data) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
      const stateChange = {
        transactions: {
          data: newItems,
          hasNextPage: itemsLength === 51,
          isNextPageLoading: false,
          offsetCount: state.transactions.offsetCount + LIMIT,
        },
      };

      handleSetState(stateChange);
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery.fetchMore({
      variables: {
        offset: state.transactions.offsetCount,
        limit: LIMIT + 1,
      },
    }).then(({ data }) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
      const stateChange = {
        transactions: {
          data: newItems,
          hasNextPage: itemsLength === 51,
          isNextPageLoading: false,
          offsetCount: state.transactions.offsetCount + LIMIT,
        },
      };
      handleSetState(stateChange);
    });
  };

  // ==========================
  // Format Data
  // ==========================
  const formatTransactions = (data: GetMessagesByAddressQuery) => {
    let formattedData = data.messagesByAddress;
    if (data.messagesByAddress.length === 51) {
      formattedData = data.messagesByAddress.slice(0, 51);
    }
    return formattedData.map((x) => {
      const { transaction } = x;
      return ({
        height: transaction.height,
        hash: transaction.hash,
        messages: transaction.messages.length,
        success: transaction.success,
        timestamp: transaction.block.timestamp,
      });
    });
  };

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
    const formatOverview = () => {
      const overview = {
        address: data.account[0].address,
        withdrawalAddress: R.pathOr(data.account[0].address, ['account', 0, 'delegationRewards', 0, 'withdrawAddress'], data),
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    // ============================
    // balance
    // ============================
    const formatBalance = () => {
      const available = getDenom(
        R.pathOr([], ['account', 0, 'accountBalances', 0, 'coins'], data),
        chainConfig.primaryTokenUnit,
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

      return balance;
    };

    stateChange.balance = formatBalance();

    // ============================
    // delegations
    // ============================
    const formatDelegations = () => {
      const rewardsDict = {};
      data.account[0].delegationRewards.forEach((x) => {
        const denomAmount = getDenom(x.amount);
        const denomFormat = formatDenom(denomAmount.amount);
        rewardsDict[x.validator.validatorInfo.operatorAddress] = denomFormat;
      });

      const delegations = data.account[0].delegations.map((x) => {
        const validatorAddress = x.validator.validatorInfo.operatorAddress;
        const validator = findAddress(validatorAddress);
        return ({
          validator: {
            address: validatorAddress,
            imageUrl: validator.imageUrl,
            name: validator.moniker,
          },
          reward: rewardsDict[validatorAddress],
          amount: formatDenom(x.amount.amount),
          commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
        });
      }).sort((a, b) => ((a.validator.name > b.validator.name) ? 1 : -1));

      return {
        data: delegations,
        count: delegations.length,
      };
    };

    stateChange.delegations = formatDelegations();

    // ============================
    // redelegations
    // ============================
    const formatRedelegations = () => {
      const redelegations = data.account[0].redelegations.map((x) => {
        const to = findAddress(findOperator(x.to));
        const from = findAddress(findOperator(x.from));
        return ({
          to: {
            address: x.to,
            imageUrl: to.imageUrl,
            name: to.moniker,
          },
          from: {
            address: x.from,
            imageUrl: from.imageUrl,
            name: from.moniker,
          },
          linkedUntil: x.completionTime,
          amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
        });
      }).sort((a, b) => ((a.to.name > b.to.name) ? 1 : -1));
      return {
        data: redelegations,
        count: redelegations.length,
      };
    };

    stateChange.redelegations = formatRedelegations();

    // ============================
    // unbondings
    // ============================
    const formatUnbondings = () => {
      const unbondings = data.account[0].unbonding.map((x) => {
        const validatorAddress = x.validator.validatorInfo.operatorAddress;
        const validator = findAddress(validatorAddress);
        return ({
          validator: {
            address: validatorAddress,
            imageUrl: validator.imageUrl,
            name: validator.moniker,
          },
          amount: formatDenom(R.pathOr(0, ['amount', 'amount'], x)),
          linkedUntil: x.completionTimestamp,
          commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
        });
      }).sort((a, b) => ((a.validator.name > b.validator.name) ? 1 : -1));
      return {
        data: unbondings,
        count: unbondings.length,
      };
    };

    stateChange.unbondings = formatUnbondings();

    return stateChange;
  };

  return {
    state,
    loadNextPage,
  };
};
