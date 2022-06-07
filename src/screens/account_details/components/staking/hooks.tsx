import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  AccountDelegationsDocument,
  AccountRedelegationsDocument,
  AccountUndelegationsDocument,
} from '@src/graphql/general/account_details_documents';
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

const LIMIT = 100;
const PAGE_LIMIT = 10;

export const useStaking = (rewards: RewardsType) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });

  useEffect(() => {
    getDelegations();
    getRedelegations();
    getUnbondings();
  }, [router.query.address]);

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

  // helper function to get rest of the staking items
  // if it is over the default limit
  const getStakeByPage = async (page: number, query: string) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address: R.pathOr('', ['query', 'address'], router),
        offset: page * LIMIT,
        limit: LIMIT,
        pagination: false,
      },
      query,
    });
    return data;
  };

  // =====================================
  // delegations
  // =====================================
  const getDelegations = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          limit: LIMIT,
        },
        query: AccountDelegationsDocument,
      });
      const count = R.pathOr(0, ['data', 'delegations', 'pagination', 'total'], data);
      const allDelegations = R.pathOr([], ['data', 'delegations', 'delegations'], data);
      // if there are more than the default 100, grab the remaining delegations
      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingDelegationsPromises = [];
        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingDelegationsPromises.push(getStakeByPage(
            i + 1, AccountDelegationsDocument,
          ));
        }
        const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
        remainingDelegations
          .filter((x) => x.status === 'fulfilled')
          .forEach((x) => {
            const delegations = R.pathOr([], ['value', 'data', 'delegations', 'delegations'], x);
            allDelegations.push(...delegations);
          });
      }

      handleSetState({
        delegations: {
          loading: false,
          count,
          data: createPagination(
            formatDelegations(allDelegations),
          ),
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
  const getRedelegations = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          limit: LIMIT,
        },
        query: AccountRedelegationsDocument,
      });
      const count = R.pathOr(0, ['data', 'redelegations', 'pagination', 'total'], data);
      const allData = R.pathOr([], ['data', 'redelegations', 'redelegations'], data);

      // if there are more than the default 100, grab the remaining delegations
      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];
        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(
            i + 1, AccountRedelegationsDocument,
          ));
        }
        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData
          .filter((x) => x.status === 'fulfilled')
          .forEach((x) => {
            const fullfilledData = R.pathOr([], ['value', 'data', 'redelegations', 'redelegations'], x);
            allData.push(...fullfilledData);
          });
      }

      const formattedData = formatRedelegations(allData);

      handleSetState({
        redelegations: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData),
        },
      });
    } catch (error) {
      handleSetState({
        redelegations: {
          loading: false,
        },
      });
    }
  };

  const formatRedelegations = (data: any[]) => {
    const results = [];
    data
      .forEach((x) => {
        R.pathOr([], ['entries'], x).forEach((y) => {
          results.push({
            from: R.pathOr('', ['validator_src_address'], x),
            to: R.pathOr('', ['validator_dst_address'], x),
            amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
            completionTime: R.pathOr('', ['completion_time'], y),
          });
        });
      });

    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });

    return results;
  };

  // =====================================
  // unbondings
  // =====================================
  const getUnbondings = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: R.pathOr('', ['query', 'address'], router),
          limit: LIMIT,
        },
        query: AccountUndelegationsDocument,
      });
      const count = R.pathOr(0, ['data', 'undelegations', 'pagination', 'total'], data);
      const allData = R.pathOr([], ['data', 'undelegations', 'undelegations'], data);

      // if there are more than the default 100, grab the remaining delegations
      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];
        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(
            i + 1, AccountUndelegationsDocument,
          ));
        }
        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData
          .filter((x) => x.status === 'fulfilled')
          .forEach((x) => {
            const fullfilledData = R.pathOr([], ['value', 'data', 'undelegations', 'undelegations'], x);
            allData.push(...fullfilledData);
          });
      }

      const formattedData = formatUnbondings(allData);

      handleSetState({
        unbondings: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData),
        },
      });
    } catch (error) {
      handleSetState({
        unbondings: {
          loading: false,
        },
      });
    }
  };

  const formatUnbondings = (data: any[]) => {
    const results = [];
    data.forEach((x) => {
      R.pathOr([], ['entries'], x).forEach((y) => {
        results.push({
          validator: R.pathOr('', ['validator_address'], x),
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        });
      });
    });

    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });

    return results;
  };

  return {
    state,
    handleTabChange,
  };
};
