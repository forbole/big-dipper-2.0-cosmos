import chainConfig from '@/chainConfig';
import {
  ValidatorDelegationsDocument,
  ValidatorRedelegationsDocument,
  ValidatorUndelegationsDocument,
} from '@/graphql/general/validator_details_documents';
import type {
  RedelegationType,
  StakingState,
  UnbondingType,
} from '@/screens/validator_details/components/staking/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Tabs from '@material-ui/core/Tabs';
import axios from 'axios';
import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { ComponentProps, useCallback, useEffect, useState } from 'react';

const { endpoints, primaryTokenUnit } = chainConfig();

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 100;
const PAGE_LIMIT = 10;

const urlEndpoints = [
  process.env.NEXT_PUBLIC_GRAPHQL_URL,
  endpoints.graphql,
  'http://localhost:3000/v1/graphql',
];

type Delegations = {
  coins: MsgCoin[];
  entries: Array<{
    balance: string;
  }>;
};

type Redelegations = {
  delegator_address: string;
  validator_dst_address: string;
  entries: Array<{
    balance: string;
  }>;
};

type Undelegations = {
  entries: Array<{
    balance: string;
  }>;
};

type DataDelegations = {
  data: {
    delegations: {
      delegations: Array<Delegations>;
      pagination: {
        total: number;
      };
    };
  };
};

type DataRedelegations = {
  data: {
    redelegations: {
      redelegations: Array<Redelegations>;
      pagination: {
        total: number;
      };
    };
  };
};

type DataUndelegations = {
  data: {
    undelegations: {
      undelegations: Array<Undelegations>;
      pagination: {
        total: number;
      };
    };
  };
};

export const useStaking = () => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });

  const handleSetState = useCallback((stateChange: (prevState: StakingState) => StakingState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const createPagination = <T>(data: T[]) => {
      const pages: { [key: string]: T[] } = {};
      data.forEach((x, i) => {
        const selectedKey = Math.floor(i / PAGE_LIMIT);
        pages[selectedKey] = pages[selectedKey] || [];
        pages[selectedKey].push(x);
      });
      return pages;
    };

    const formatUnbondings = (data: Delegations[] | Redelegations[] | Undelegations[]) => {
      const results: UnbondingType[] = [];
      data.forEach((x) => {
        R.pathOr<NonNullable<typeof x['entries']>>([], ['entries'], x).forEach((y) => {
          results.push({
            address: R.pathOr('', ['delegator_address'], x),
            amount: formatToken(y.balance, primaryTokenUnit),
            completionTime: R.pathOr('', ['completion_time'], y),
          });
        });
      });

      results.sort((a, b) => ((a.completionTime ?? '') < (b.completionTime ?? '') ? -1 : 1));

      return results;
    };

    // helper function to get rest of the staking items
    // if it is over the default limit
    const getStakeByPage = async (page: number, query: string) => {
      const { data } = await axios.post(urlEndpoints.find((u) => u) ?? '', {
        variables: {
          validatorAddress: router?.query?.address ?? '',
          offset: page * LIMIT,
          limit: LIMIT,
          pagination: false,
        },
        query,
      });
      return data;
    };

    const formatDelegations = (data: Delegations[]) =>
      data
        .map((x): UnbondingType => {
          const address = R.pathOr('', ['delegator_address'], x);
          const delegation = getDenom(x.coins, primaryTokenUnit);
          return {
            address,
            amount: formatToken(delegation.amount, delegation.denom),
          };
        })
        .sort((a, b) => (Big(a.amount?.value).gt(b.amount?.value) ? -1 : 1));

    const formatRedelegations = (data: Array<Redelegations>) => {
      const results: RedelegationType[] = [];
      data.forEach((x) => {
        R.pathOr<NonNullable<typeof x['entries']>>([], ['entries'], x).forEach((y) => {
          results.push({
            address: x?.delegator_address ?? '',
            to: x?.validator_dst_address ?? '',
            amount: formatToken(y.balance, primaryTokenUnit),
            completionTime: R.pathOr('', ['completion_time'], y),
          });
        });
      });
      results.sort((a, b) => (a.completionTime < b.completionTime ? -1 : 1));

      return results;
    };

    // =====================================
    // delegations
    // =====================================
    const getDelegations = async () => {
      try {
        const { data } = await axios.post<DataDelegations>(urlEndpoints.find((u) => u) ?? '', {
          variables: {
            validatorAddress: router?.query?.address ?? '',
            limit: LIMIT,
          },
          query: ValidatorDelegationsDocument,
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
            remainingDelegationsPromises.push(getStakeByPage(i + 1, ValidatorDelegationsDocument));
          }
          const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
          remainingDelegations.forEach((x) => {
            if (x.status !== 'fulfilled') return;
            const delegations = x?.value?.data?.delegations?.delegations ?? [];
            allDelegations.push(...delegations);
          });
        }

        handleSetState((prevState) => ({
          ...prevState,
          delegations: {
            loading: false,
            count,
            data: createPagination(formatDelegations(allDelegations)),
          },
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          delegations: {
            data: {},
            count: 0,
            loading: false,
          },
        }));
      }
    };

    // =====================================
    // redelegations
    // =====================================
    const getRedelegations = async () => {
      try {
        const { data } = await axios.post<DataRedelegations>(urlEndpoints.find((u) => u) ?? '', {
          variables: {
            validatorAddress: router?.query?.address ?? '',
            limit: LIMIT,
          },
          query: ValidatorRedelegationsDocument,
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
            remainingPromises.push(getStakeByPage(i + 1, ValidatorRedelegationsDocument));
          }
          const remainingData = await Promise.allSettled(remainingPromises);
          remainingData.forEach((x) => {
            if (x.status !== 'fulfilled') return;
            const fullfilledData = x?.value?.data?.redelegations?.redelegations ?? [];
            allData.push(...fullfilledData);
          });
        }

        const formattedData = formatRedelegations(allData);

        handleSetState((prevState) => ({
          ...prevState,
          redelegations: {
            loading: false,
            count: formattedData.length,
            data: createPagination(formattedData),
          },
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          redelegations: {
            data: {},
            count: 0,
            loading: false,
          },
        }));
      }
    };

    // =====================================
    // unbondings
    // =====================================
    const getUnbondings = async () => {
      try {
        const { data } = await axios.post<DataUndelegations>(urlEndpoints.find((u) => u) ?? '', {
          variables: {
            validatorAddress: router?.query?.address ?? '',
            limit: LIMIT,
          },
          query: ValidatorUndelegationsDocument,
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
            remainingPromises.push(getStakeByPage(i + 1, ValidatorUndelegationsDocument));
          }
          const remainingData = await Promise.allSettled(remainingPromises);
          remainingData.forEach((x) => {
            if (x.status !== 'fulfilled') return;
            const fullfilledData = x?.value?.data?.undelegations?.undelegations ?? [];
            allData.push(...fullfilledData);
          });
        }

        const formattedData = formatUnbondings(allData);

        handleSetState((prevState) => ({
          ...prevState,
          unbondings: {
            data: createPagination(formattedData),
            count: formattedData.length,
            loading: false,
          },
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          unbondings: {
            data: {},
            count: 0,
            loading: false,
          },
        }));
      }
    };

    getDelegations();
    getRedelegations();
    getUnbondings();
  }, [handleSetState, router?.query?.address]);

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = useCallback(
    (_event, newValue) => {
      setState((prevState) => ({
        ...prevState,
        tab: newValue,
      }));
    },
    []
  );

  return {
    state,
    handleTabChange,
  };
};
