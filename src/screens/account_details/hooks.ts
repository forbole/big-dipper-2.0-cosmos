import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import { useRouter } from 'next/router';
import {
  AccountQuery,
  useAccountQuery,
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
} from '@graphql/types';
import { convertMsgsToModels } from '@msg';
import {
  StakingParams,
} from '@models';
import { getDenom } from '@utils/get_denom';
import { toValidatorAddress } from '@utils/prefix_convert';
import {
  formatToken,
} from '@utils/format_token';
import { chainConfig } from '@src/configs';
import { useDesmosProfile } from '@hooks';
import { AccountDetailState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

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
    available: defaultTokenUnit,
    delegate: defaultTokenUnit,
    unbonding: defaultTokenUnit,
    reward: defaultTokenUnit,
    commission: defaultTokenUnit,
    total: defaultTokenUnit,
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

const UTC_NOW = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const {
    fetchDesmosProfile, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
    }
  },
  [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useAccountQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      validatorAddress: toValidatorAddress(router.query.address as string),
      utc: UTC_NOW,
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

      // =============================
      // messages
      // =============================
      const messages = convertMsgsToModels(transaction);

      return ({
        height: transaction.height,
        hash: transaction.hash,
        messages: {
          count: messages.length,
          items: messages,
        },
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

    const rewardsDict = {};
    // log all the rewards
    R.pathOr([], ['delegationRewards'], data).forEach((x) => {
      const coins = R.pathOr([], ['coins'], x);
      const denomAmount = getDenom(coins, chainConfig.primaryTokenUnit);
      const denomFormat = formatToken(denomAmount.amount, chainConfig.primaryTokenUnit);
      rewardsDict[x.validatorAddress] = denomFormat;
    });

    // set default rewards for delegations without parsed rewards
    R.pathOr([], ['delegations', 'delegations'], data).forEach((x) => {
      const validatorAddress = R.pathOr('', ['validator_address'], x);
      if (!rewardsDict[validatorAddress]) {
        rewardsDict[validatorAddress] = formatToken(0, chainConfig.primaryTokenUnit);
      }
    });

    // ============================
    // overview
    // ============================
    const formatOverview = () => {
      const overview = {
        address: data.account[0].address,
        withdrawalAddress: R.pathOr(
          data.account[0].address,
          ['withdrawalAddress', 'address'],
          data,
        ),
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    // ============================
    // balance
    // ============================
    const formatBalance = () => {
      const available = getDenom(
        R.pathOr([], ['accountBalances', 'coins'], data),
        chainConfig.primaryTokenUnit,
      );
      const availableAmount = formatToken(available.amount, chainConfig.primaryTokenUnit);
      const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
      const stakingDenom = stakingParams.bondDenom;

      const delegate = R.pathOr([], ['account', 0, 'delegations'], data).reduce((a, b) => {
        return Big(a).plus(b.amount.amount).toPrecision();
      }, 0);
      const delegateDenom = stakingDenom;
      const delegateAmount = formatToken(delegate, delegateDenom);

      const unbonding = R.pathOr([], ['account', 0, 'unbonding'], data).reduce((a, b) => {
        return Big(a).plus(b.amount.amount).toPrecision();
      }, 0);
      const unbondingDenom = stakingDenom;
      const unbondingAmount = formatToken(unbonding, unbondingDenom);

      const reward = R.pathOr([], ['delegations', 'delegations'], data).map((x) => {
        const validatorAddress = R.pathOr('', ['validator_address'], x);
        return rewardsDict[validatorAddress];
      }).reduce((a, b) => {
        return Big(a).plus(b.value).toPrecision();
      }, 0);

      const rewardAmount: TokenUnit = {
        value: reward,
        displayDenom: chainConfig.tokenUnits[stakingDenom].display,
        baseDenom: stakingDenom,
        exponent: chainConfig.tokenUnits[stakingDenom].exponent,
      };

      const commission = getDenom(
        R.pathOr([], ['commission', 'coins'], data),
        chainConfig.primaryTokenUnit,
      );
      const commissionAmount = formatToken(commission.amount, chainConfig.primaryTokenUnit);

      const total = Big(availableAmount.value)
        .plus(delegateAmount.value)
        .plus(unbondingAmount.value)
        .plus(rewardAmount.value)
        .plus(commissionAmount.value)
        .toPrecision();

      const balance = {
        available: availableAmount,
        delegate: delegateAmount,
        unbonding: unbondingAmount,
        reward: rewardAmount,
        commission: commissionAmount,
        total: {
          value: total,
          displayDenom: availableAmount.displayDenom,
          baseDenom: availableAmount.baseDenom,
          exponent: availableAmount.exponent,
        },
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
      const available = R.pathOr([], ['accountBalances', 'coins'], data);

      available.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // rewards tokens
      const rewards = R.pathOr([], ['delegationRewards'], data);

      rewards.forEach((x) => {
        x.coins.forEach((y) => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr([], ['commission', 'coins'], data);

      commission.forEach((x) => {
        otherTokenUnits.add(x.denom);
      });

      // remove the primary token unit thats being shown in balance
      otherTokenUnits.delete(chainConfig.primaryTokenUnit);

      otherTokenUnits.forEach((x: string) => {
        const availableRawAmount = getDenom(available, x);
        const availableAmount = formatToken(availableRawAmount.amount, x);

        const rewardsRawAmount = rewards.reduce((a, b) => {
          const denom = getDenom(b.amount, x);
          // return a + numeral(denom.amount).value();
          return Big(a).plus(denom.amount).toPrecision();
        }, 0);
        const rewardAmount = formatToken(rewardsRawAmount, x);
        const commissionRawAmount = getDenom(commission, x);
        const commissionAmount = formatToken(commissionRawAmount.amount, x);

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
      // ryuash
      const delegations = data.delegations.delegations.filter((x) => {
        return numeral(x.coins.amount).value() !== 0;
      }).map((x) => {
        const validatorAddress = R.pathOr('', ['validator_address'], x);
        return ({
          validator: validatorAddress,
          reward: rewardsDict[validatorAddress],
          amount: formatToken(x.amount.amount, x.amount.denom),
        });
      }).sort((a, b) => (Big(a.amount.value).lt(b.amount.value) ? 1 : -1));

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
        return ({
          to: x.to,
          from: x.from,
          linkedUntil: x.completionTime,
          amount: formatToken(
            R.pathOr(0, ['amount', 'amount'], x),
            R.pathOr(0, ['amount', 'denom'], x),
          ),
        });
      }).sort((a, b) => (Big(a.amount.value).lt(b.amount.value) ? 1 : -1));
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
        return ({
          validator: validatorAddress,
          amount: formatToken(
            R.pathOr(0, ['amount', 'amount'], x),
            R.pathOr(0, ['amount', 'denom'], x),
          ),
          linkedUntil: x.completionTimestamp,
          commission: R.pathOr(0, ['validator', 'validatorCommissions', 0, 'commission'], x),
        });
      }).sort((a, b) => (Big(a.amount.value).lt(b.amount.value) ? 1 : -1));
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
