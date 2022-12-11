import chainConfig from '@/chainConfig';
import type {
  DelegationType,
  RedelegationType,
  StakingState,
} from '@/screens/account_details/components/staking/types';
import type { RewardsType } from '@/screens/account_details/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import { Tabs } from '@material-ui/core';
import axios from 'axios';
import Big from 'big.js';

import { useRouter } from 'next/router';
import * as R from 'ramda';
import { ComponentProps, useCallback, useEffect, useState } from 'react';

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 100;
const PAGE_LIMIT = 10;

function getUrl() {
  let url = process.env.NEXT_PUBLIC_GRAPHQL_URL;
  if (!url) url = chainConfig().endpoints.graphql;
  if (!url) url = 'http://localhost:3000/v1/graphql';
  return url;
}

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
    const formatDelegations = (
      data: Array<{
        validator_address?: string;
        coins?: MsgCoin[];
      }>
    ) =>
      data
        .map((x): DelegationType => {
          const validator = x?.validator_address ?? '';
          const delegation = getDenom(x.coins, chainConfig().primaryTokenUnit);
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
      const { data } = await axios.post(getUrl(), {
        variables: {
          address: (router?.query?.address as string) ?? '',
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
        const { data } = await axios.post(getUrl(), {
          variables: {
            address: (router?.query?.address as string) ?? '',
            limit: LIMIT,
          },
          query: accountDelegationsDocument,
        });
        const count = data?.data?.delegations?.pagination?.total ?? 0;
        const allDelegations = R.pathOr<
          NonNullable<typeof data['data']['delegations']['delegations']>
        >([], ['data', 'delegations', 'delegations'], data);
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
            .forEach((x) => {
              if (x?.status !== 'fulfilled') return;
              const delegations = x.value?.data?.delegations?.delegations ?? [];
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
        const { data } = await axios.post(getUrl(), {
          variables: {
            address: (router?.query?.address as string) ?? '',
            limit: LIMIT,
          },
          query: accountRedelegationsDocument,
        });
        const count = data?.data?.redelegations?.pagination?.total ?? 0;
        const allData = R.pathOr<
          NonNullable<typeof data['data']['redelegations']['redelegations']>
        >([], ['data', 'redelegations', 'redelegations'], data);

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
            .forEach((x) => {
              if (x?.status !== 'fulfilled') return;
              const fullfilledData = x?.value?.data?.redelegations?.redelegations ?? [];
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
        const { data } = await axios.post(getUrl(), {
          variables: {
            address: (router?.query?.address as string) ?? '',
            limit: LIMIT,
          },
          query: accountUndelegationsDocument,
        });
        const count = data?.data?.undelegations?.pagination?.total ?? 0;
        const allData = R.pathOr<
          NonNullable<typeof data['data']['undelegations']['undelegations']>
        >([], ['data', 'undelegations', 'undelegations'], data);

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
            .forEach((x) => {
              if (x?.status !== 'fulfilled') return;
              const fullfilledData = x?.value?.data?.undelegations?.undelegations ?? [];
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

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = useCallback(
    (_event, newValue) => {
      setState((prevState) => ({
        ...prevState,
        tab: newValue,
      }));
    },
    []
  );

  const createPagination = <T>(data: T[]) => {
    const pages: Record<number, T[]> = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  };

  const formatRedelegations = (
    data: Array<{
      entries?: Array<{ balance: string | number; completion_time?: string }>;
      validator_src_address?: string;
      validator_dst_address?: string;
    }>
  ) => {
    const results: RedelegationType[] = [];
    data.forEach((x) => {
      x.entries?.forEach((y) => {
        results.push({
          from: x?.validator_src_address ?? '',
          to: x?.validator_dst_address ?? '',
          amount: formatToken(y.balance, chainConfig().primaryTokenUnit),
          completionTime: y?.completion_time ?? '',
        });
      });
    });

    results.sort((a, b) => (a.completionTime < b.completionTime ? -1 : 1));

    return results;
  };

  const formatUnbondings = (
    data: Array<{
      entries?: Array<{ balance: string | number; completion_time?: string }>;
      validator_address?: string;
    }>
  ) => {
    const results: Array<{ validator: string; amount: TokenUnit; completionTime: string }> = [];
    data.forEach((x) => {
      x?.entries?.forEach((y) => {
        results.push({
          validator: x?.validator_address ?? '',
          amount: formatToken(y.balance, chainConfig().primaryTokenUnit),
          completionTime: y?.completion_time ?? '',
        });
      });
    });

    results.sort((a, b) => (a.completionTime < b.completionTime ? -1 : 1));

    return results;
  };

  return {
    state,
    handleTabChange,
  };
};
