import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import axios from 'axios';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import chainConfig from '@/chainConfig';
import type { RewardsType } from '@/screens/account_details/types';
import type {
  DelegationType,
  RedelegationType,
  StakingState,
} from '@/screens/account_details/components/staking/types';

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 100;
const PAGE_LIMIT = 10;

export const useStaking = (
  rewards: RewardsType,
  accountDelegationsDocument: string,
  accountRedelegationsDocument: string,
  accountUndelegationsDocument: string
) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });

  const handleSetState = useCallback((stateChange: Partial<StakingState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const formatDelegations = (data: any[]) =>
      data
        .map((x): DelegationType => {
          const validator = R.pathOr<string>('', ['validator_address'], x);
          const delegation = getDenom(x.coins, chainConfig.primaryTokenUnit);
          return {
            validator,
            amount: formatToken(delegation.amount, delegation.denom),
            reward: rewards[validator],
          };
        })
        .sort((a, b) => (Big(a.amount.value).gt(b.amount.value) ? -1 : 1));

    // helper function to get rest of the staking items
    // if it is over the default limit
    const getStakeByPage = async (page: number, query: string) => {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_GRAPHQL_URL ||
          chainConfig.endpoints.graphql ||
          'http://localhost:3000/v1/graphql',
        {
          variables: {
            address: (router?.query?.address as string) ?? '',
            offset: page * LIMIT,
            limit: LIMIT,
            pagination: false,
          },
          query,
        }
      );
      return data;
    };

    // =====================================
    // delegations
    // =====================================
    const getDelegations = async () => {
      try {
        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL ||
            chainConfig.endpoints.graphql ||
            'http://localhost:3000/v1/graphql',
          {
            variables: {
              address: (router?.query?.address as string) ?? '',
              limit: LIMIT,
            },
            query: accountDelegationsDocument,
          }
        );
        const count = R.pathOr(0, ['data', 'delegations', 'pagination', 'total'], data);
        const allDelegations = R.pathOr([], ['data', 'delegations', 'delegations'], data);
        // if there are more than the default 100, grab the remaining delegations
        if (count > LIMIT) {
          const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
          const remainingDelegationsPromises = [];
          for (let i = 0; i < remainingFetchCount; i += 1) {
            remainingDelegationsPromises.push(getStakeByPage(i + 1, accountDelegationsDocument));
          }
          const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
          remainingDelegations
            .filter((x) => x.status === 'fulfilled')
            .forEach((x: any) => {
              const delegations = R.pathOr([], ['value', 'data', 'delegations', 'delegations'], x);
              allDelegations.push(...delegations);
            });
        }

        handleSetState({
          delegations: {
            loading: false,
            count,
            data: createPagination(formatDelegations(allDelegations)),
          },
        });
      } catch (error) {
        handleSetState({
          delegations: {
            data: {},
            count: 0,
            loading: false,
          },
        });
      }
    };

    // =====================================
    // redelegations
    // =====================================
    const getRedelegations = async () => {
      try {
        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL ||
            chainConfig.endpoints.graphql ||
            'http://localhost:3000/v1/graphql',
          {
            variables: {
              address: (router?.query?.address as string) ?? '',
              limit: LIMIT,
            },
            query: accountRedelegationsDocument,
          }
        );
        const count = R.pathOr(0, ['data', 'redelegations', 'pagination', 'total'], data);
        const allData = R.pathOr([], ['data', 'redelegations', 'redelegations'], data);

        // if there are more than the default 100, grab the remaining delegations
        if (count > LIMIT) {
          const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
          const remainingPromises = [];
          for (let i = 0; i < remainingFetchCount; i += 1) {
            remainingPromises.push(getStakeByPage(i + 1, accountRedelegationsDocument));
          }
          const remainingData = await Promise.allSettled(remainingPromises);
          remainingData
            .filter((x) => x.status === 'fulfilled')
            .forEach((x: any) => {
              const fullfilledData = R.pathOr(
                [],
                ['value', 'data', 'redelegations', 'redelegations'],
                x
              );
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
            data: {},
            count: 0,
            loading: false,
          },
        });
      }
    };

    // =====================================
    // unbondings
    // =====================================
    const getUnbondings = async () => {
      try {
        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL ||
            chainConfig.endpoints.graphql ||
            'http://localhost:3000/v1/graphql',
          {
            variables: {
              address: (router?.query?.address as string) ?? '',
              limit: LIMIT,
            },
            query: accountUndelegationsDocument,
          }
        );
        const count = R.pathOr(0, ['data', 'undelegations', 'pagination', 'total'], data);
        const allData = R.pathOr([], ['data', 'undelegations', 'undelegations'], data);

        // if there are more than the default 100, grab the remaining delegations
        if (count > LIMIT) {
          const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
          const remainingPromises = [];
          for (let i = 0; i < remainingFetchCount; i += 1) {
            remainingPromises.push(getStakeByPage(i + 1, accountUndelegationsDocument));
          }
          const remainingData = await Promise.allSettled(remainingPromises);
          remainingData
            .filter((x) => x.status === 'fulfilled')
            .forEach((x: any) => {
              const fullfilledData = R.pathOr(
                [],
                ['value', 'data', 'undelegations', 'undelegations'],
                x
              );
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
            data: {},
            count: 0,
            loading: false,
          },
        });
      }
    };

    getDelegations();
    getRedelegations();
    getUnbondings();
  }, [
    accountDelegationsDocument,
    accountRedelegationsDocument,
    accountUndelegationsDocument,
    handleSetState,
    rewards,
    router?.query?.address,
  ]);

  const handleTabChange = useCallback((_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  }, []);

  const createPagination = <T>(data: T[]) => {
    const pages: Record<number, T[]> = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  };

  const formatRedelegations = (data: any[]) => {
    const results: RedelegationType[] = [];
    data.forEach((x: any) => {
      R.pathOr([], ['entries'], x).forEach((y: { balance: string | number }) => {
        results.push({
          from: R.pathOr('', ['validator_src_address'], x),
          to: R.pathOr('', ['validator_dst_address'], x),
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        });
      });
    });

    results.sort((a: any, b: any) => (a.completionTime < b.completionTime ? -1 : 1));

    return results;
  };

  const formatUnbondings = (data: any[]) => {
    const results: Array<{ validator: string; amount: TokenUnit; completionTime: string }> = [];
    data.forEach((x: any) => {
      R.pathOr([], ['entries'], x).forEach((y: { balance: string | number }) => {
        results.push({
          validator: R.pathOr('', ['validator_address'], x),
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        });
      });
    });

    results.sort((a: any, b: any) => (a.completionTime < b.completionTime ? -1 : 1));

    return results;
  };

  return {
    state,
    handleTabChange,
  };
};
