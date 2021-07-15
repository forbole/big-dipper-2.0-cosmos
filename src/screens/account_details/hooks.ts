import {
  useState, useEffect,
} from 'react';
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
import { DesmosProfileQuery } from '@graphql/desmos_profile';
import { useChainContext } from '@contexts';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@src/configs';
import { useDesmosProfile } from '@hooks';
import { AccountDetailState } from './types';

const initialState: AccountDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
  otherTokens: {
    count: 0,
    data: [],
  },
  balance: {
    available: {
      value: 0,
      denom: '',
    },
    delegate: {
      value: 0,
      denom: '',
    },
    unbonding: {
      value: 0,
      denom: '',
    },
    reward: {
      value: 0,
      denom: '',
    },
    commission: {
      value: 0,
      denom: '',
    },
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
};

export const useAccountDetails = () => {
  const {
    findAddress, findOperator,
  } = useChainContext();
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      console.log(data, 'well im here on compltet');
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    if (chainConfig.extra.desmosProfile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
    }
  }, []);

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
  const formatDesmosProfile = (data:DesmosProfileQuery) => {
    console.log(data, 'data');
    if (!data.profile.length) {
      return null;
    }

    const profile = data.profile[0];

    return ({
      dtag: profile.dtag,
      nickname: profile.nickname,
      imageUrl: profile.profilePic,
      bio: profile.bio,
      connections: [],
    });
  };

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
      const availableAmount = formatDenom(available.amount, chainConfig.primaryTokenUnit);

      const delegate = R.pathOr([], ['account', 0, 'delegations'], data).reduce((a, b) => {
        return a + numeral(b.amount.amount).value();
      }, 0);
      const delegateDenom = R.pathOr(chainConfig.primaryTokenUnit, ['stakingParams', 0, 'bondDenom'], data);
      const delegateAmount = formatDenom(delegate, delegateDenom);

      const unbonding = R.pathOr([], ['account', 0, 'unbonding'], data).reduce((a, b) => {
        return a + numeral(b.amount.amount).value();
      }, 0);
      const unbondingDenom = R.pathOr(chainConfig.primaryTokenUnit, ['stakingParams', 0, 'bondDenom'], data);
      const unbondingAmount = formatDenom(unbonding, unbondingDenom);

      const reward = R.pathOr([], ['account', 0, 'delegationRewards'], data).reduce((a, b) => {
        const denom = getDenom(b.amount, chainConfig.primaryTokenUnit);
        return a + numeral(denom.amount).value();
      }, 0);
      // only display primary token in balance
      const rewardAmount = formatDenom(reward, chainConfig.primaryTokenUnit);

      const commission = getDenom(
        R.pathOr([], ['validator', 0, 'commission', 0, 'amount'], data),
        chainConfig.primaryTokenUnit,
      );
      const commissionAmount = formatDenom(commission.amount, chainConfig.primaryTokenUnit);

      const total = (
        availableAmount.value
        + delegateAmount.value
        + unbondingAmount.value
        + rewardAmount.value
        + commissionAmount.value
      );

      const balance = {
        available: availableAmount,
        delegate: delegateAmount,
        unbonding: unbondingAmount,
        reward: rewardAmount,
        commission: commissionAmount,
        total,
      };

      return balance;
    };

    stateChange.balance = formatBalance();

    // ============================
    // other tokens
    // ============================
    const formatOtherTokens = () => {
      // Loop through balance and delegation to figure out what the other tokens are
      const otherTokenUnits = new Set();
      const otherTokens = [];
      // available tokens
      const available = R.pathOr([], ['account', 0, 'accountBalances', 0, 'coins'], data);

      available.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // rewards tokens
      const rewards = R.pathOr([], ['account', 0, 'delegationRewards'], data);

      rewards.forEach((x) => {
        x.amount.forEach((y) => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr([], ['validator', 0, 'commission', 0, 'amount'], data);

      commission.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // remove the primary token unit thats being shown in balance
      otherTokenUnits.delete(chainConfig.primaryTokenUnit);

      otherTokenUnits.forEach((x: string) => {
        const availableRawAmount = getDenom(available, x);
        const availableAmount = formatDenom(availableRawAmount.amount, x);

        const rewardsRawAmount = rewards.reduce((a, b) => {
          const denom = getDenom(b.amount, x);
          return a + numeral(denom.amount).value();
        }, 0);
        const rewardAmount = formatDenom(rewardsRawAmount, x);

        const commissionRawAmount = getDenom(commission, x);
        const commissionAmount = formatDenom(commissionRawAmount.amount, x);

        otherTokens.push({
          denom: R.pathOr(x, ['tokenUnits', x, 'display'], chainConfig),
          available: availableAmount,
          reward: rewardAmount,
          commission: commissionAmount,
        });
      });

      return ({
        data: otherTokens,
        count: otherTokens.length,
      });
    };

    formatOtherTokens();

    stateChange.otherTokens = formatOtherTokens();

    // ============================
    // delegations
    // ============================
    const formatDelegations = () => {
      const rewardsDict = {};
      data.account[0].delegationRewards.forEach((x) => {
        const denomAmount = getDenom(x.amount, chainConfig.primaryTokenUnit);
        const denomFormat = formatDenom(denomAmount.amount, chainConfig.primaryTokenUnit);
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
          amount: formatDenom(x.amount.amount, x.amount.denom),
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
          amount: formatDenom(
            R.pathOr(0, ['amount', 'amount'], x),
            R.pathOr(0, ['amount', 'denom'], x),
          ),
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
          amount: formatDenom(
            R.pathOr(0, ['amount', 'amount'], x),
            R.pathOr(0, ['amount', 'denom'], x),
          ),
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
