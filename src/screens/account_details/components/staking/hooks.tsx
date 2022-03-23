import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import {
  useAccountUndelegationsQuery,
  AccountUndelegationsQuery,
  useAccountRedelegationsQuery,
  AccountRedelegationsQuery,
} from '@graphql/types';
import axios from 'axios';
import { AccountDelegationsDocument } from '@graphql/account_actions';
import { formatToken } from '@utils/format_token';
import { getDenom } from '@utils/get_denom';
import { chainConfig } from '@configs';
import { StakingState } from './types';
import { RewardsType } from '../../types';

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 10;
const PAGE_LIMIT = 10;
const TEST_LIMIT = 100;

export const useStaking = (rewards: RewardsType) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  const createPagination = (data: any[]) => {
    const pages = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  };

  // =====================================
  // delegations
  // =====================================
  useEffect(() => {
    getAllDelegations();
  }, [router.query.address]);

  const getAllDelegations = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          limit: TEST_LIMIT,
        },
        query: AccountDelegationsDocument,
      });
      const count = R.pathOr(0, ['data', 'delegations', 'pagination', 'total'], data);
      const allDelegations = R.pathOr([], ['data', 'delegations', 'delegations'], data);
      // if there are more than the default 100, grab the remaining delegations
      if (count > TEST_LIMIT) {
        const remainingFetchCount = Math.ceil(count / TEST_LIMIT) - 1;
        const remainingDelegationsPromises = [];
        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingDelegationsPromises.push(getDelegationsByPage(i + 1));
        }
        const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
        remainingDelegations
          .filter((x) => x.status === 'fulfilled')
          .forEach((x) => {
            const delegations = R.pathOr([], ['value', 'data', 'delegations', 'delegations'], x);
            allDelegations.push(...delegations);
          });
      }

      const formattedDelegations = formatDelegations(allDelegations);
      const paginatedDelegations = createPagination(formattedDelegations);

      handleSetState({
        delegations: {
          loading: false,
          count,
          data: paginatedDelegations,
        },
      });
    } catch (error) {
      handleSetState({
        delegations: {
          loading: false,
        },
      });
    }
  };

  const getDelegationsByPage = async (page) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address: R.pathOr('', ['query', 'address'], router),
        offset: page * TEST_LIMIT,
        limit: TEST_LIMIT,
        pagination: false,
      },
      query: AccountDelegationsDocument,
    });
    return data;
  };

  const formatDelegations = (data: any[]) => {
    return data
      .map((x) => {
        const validator = R.pathOr('', ['validator_address'], x);
        const delegation = getDenom(x.coins, chainConfig.primaryTokenUnit);
        return ({
          validator,
          amount: formatToken(delegation.amount, delegation.denom),
          reward: rewards[validator],
        });
      })
      .sort((a, b) => {
        return Big(a.amount.value).gt(b.amount.value) ? -1 : 1;
      });
  };

  // =====================================
  // redelegations
  // =====================================
  const redelegationsQuery = useAccountRedelegationsQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      limit: LIMIT,
    },
    onCompleted: (data) => {
      const formattedData = formatRedelegations(data);
      handleSetState({
        redelegations: {
          loading: false,
          count: R.pathOr(0, ['redelegations', 'pagination', 'total'], data),
          data: {
            0: formattedData,
          },
        },
      });
    },
    onError: () => {
      handleSetState({
        redelegations: {
          loading: false,
        },
      });
    },
  });

  const formatRedelegations = (data: AccountRedelegationsQuery) => {
    const redelegations = R.pathOr([], ['redelegations', 'redelegations'], data);
    return redelegations
      .map((x) => {
        const from = R.pathOr('', ['validator_src_address'], x);
        const to = R.pathOr('', ['validator_dst_address'], x);
        const entries = R.pathOr([], ['entries'], x).map((y) => ({
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        }));

        return ({
          from,
          to,
          entries,
        });
      });
  };

  const handleRedelegationPageCallback = async (page: number, _rowsPerPage: number) => {
    if (!state.unbondings.data[page]) {
      handleSetState({
        redelegations: {
          loading: true,
        },
      });

      await redelegationsQuery.fetchMore({
        variables: {
          offset: page * LIMIT,
          limit: LIMIT,
        },
      }).then(({ data }) => {
        handleSetState({
          redelegations: {
            loading: false,
            data: {
              [page]: formatRedelegations(data),
            },
          },
        });
      });
    }
  };

  // =====================================
  // unbondings
  // =====================================
  const unbondingsQuery = useAccountUndelegationsQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      limit: LIMIT,
    },
    onCompleted: (data) => {
      const formattedData = formatUnbondings(data);
      handleSetState({
        unbondings: {
          loading: false,
          count: R.pathOr(0, ['undelegations', 'pagination', 'total'], data),
          data: {
            0: formattedData,
          },
        },
      });
    },
    onError: () => {
      handleSetState({
        unbondings: {
          loading: false,
        },
      });
    },
  });

  const formatUnbondings = (data: AccountUndelegationsQuery) => {
    const unbondings = R.pathOr([], ['undelegations', 'undelegations'], data);
    return unbondings
      .map((x) => {
        const validator = R.pathOr('', ['validator_address'], x);
        const entries = R.pathOr([], ['entries'], x).map((y) => ({
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        }));

        return ({
          validator,
          entries,
        });
      });
  };

  const handleUnbondingPageCallback = async (page: number, _rowsPerPage: number) => {
    if (!state.unbondings.data[page]) {
      handleSetState({
        unbondings: {
          loading: true,
        },
      });

      await unbondingsQuery.fetchMore({
        variables: {
          offset: page * LIMIT,
          limit: LIMIT,
        },
      }).then(({ data }) => {
        handleSetState({
          unbondings: {
            loading: false,
            data: {
              [page]: formatUnbondings(data),
            },
          },
        });
      });
    }
  };

  return {
    state,
    handleTabChange,
    handleUnbondingPageCallback,
    handleRedelegationPageCallback,
  };
};
