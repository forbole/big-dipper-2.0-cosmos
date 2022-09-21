import { useState } from 'react';
import * as R from 'ramda';
import {
  useProvidersQuery,
  ProvidersQuery,
  useActiveProvidersListenerSubscription,
  useActiveLeasesListenerSubscription,
  useCpuMemoryStorageListenerSubscription,
  CpuMemoryStorageListenerSubscription,
} from '@graphql/types/general_types';
import { ProvidersState } from './types';

export const useProviders = () => {
  const [state, setState] = useState<ProvidersState>({
    loading: true,
    exists: true,
    activeProvidersCount: 0,
    activeLeasesCount: 0,
    cpu: {
      used: 0,
      available: 0,
    },
    memory: {
      used: 0,
      available: 0,
    },
    storage: {
      used: 0,
      available: 0,
      pending: 0,
    },
    providers: {
      isNextPageLoading: false,
      items: [],
      pagination: {
        itemsPerPage: 10,
        currentPage: 0,
        totalCount: 0,
      },
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // This is a bandaid as it can get extremely
  // expensive if there is too much data
  /**
   * Helps remove any possible duplication
   * and sorts by height in case it bugs out
   */
  const uniqueAndSort = R.pipe(
    R.uniqBy(R.prop('ownerAddress')),
    R.sort(R.ascend(R.prop('ownerAddress'))),
  );

  // ================================
  // tx subscription
  // ================================
  useActiveProvidersListenerSubscription({
    onSubscriptionData: (data) => {
      handleSetState({
        activeProvidersCount: data.subscriptionData.data.activeProviders.aggregate.count,
      });
    },
  });

  useActiveLeasesListenerSubscription({
    onSubscriptionData: (data) => {
      handleSetState({
        activeLeasesCount: data.subscriptionData.data.activeLeases.aggregate.sum.lease_count,
      });
    },
  });

  useCpuMemoryStorageListenerSubscription({
    onSubscriptionData: (data) => {
      const activeData = formatCPUMemoryStorageData(data.subscriptionData.data);
      handleSetState({
        cpu: activeData.cpu,
        memory: activeData.memory,
        storage: activeData.storage,
      });
    },
  });

  const formatCPUMemoryStorageData = (data: CpuMemoryStorageListenerSubscription) => {
    const mappedData = data.specs.map((item) => {
      return {
        memory: {
          available: item.available.memory,
          used: item.active.memory,
        },
        cpu: {
          available: item.available.cpu,
          used: item.active.cpu,
        },
        storage: {
          available: item.available.storage_ephemeral,
          used: item.active.storage_ephemeral,
          pending: item.pending.storage_ephemeral,
        },
      };
    });

    return mappedData.reduce((total, row) => {
      return {
        memory: {
          available: total.memory.available + row.memory.available,
          used: total.memory.used + row.memory.used,
        },
        cpu: {
          available: total.cpu.available + row.cpu.available,
          used: total.cpu.used + row.cpu.used,
        },
        storage: {
          available: total.storage.available + row.storage.available,
          used: total.storage.used + row.storage.used,
          pending: total.storage.pending + row.storage.pending,
        },
      };
    }, {
      memory: {
        available: 0,
        used: 0,
      },
      cpu: {
        available: 0,
        used: 0,
      },
      storage: {
        available: 0,
        used: 0,
        pending: 0,
      },
    });
  };

  // ================================
  // tx query
  // ================================

  const providersQuery = useProvidersQuery({
    variables: {
      limit: state.providers.pagination.itemsPerPage,
      offset: state.providers.pagination.currentPage * state.providers.pagination.itemsPerPage,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const newItems = uniqueAndSort([
        ...state.providers.items,
        ...formatProviders(data),
      ]);
      handleSetState({
        loading: false,
        providers: {
          items: newItems,
          isNextPageLoading: false,
          pagination: {
            totalCount: data.total.aggregate.count,
          },
        },
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      providers: {
        isNextPageLoading: true,
      },
    });
    await providersQuery.fetchMore({
      variables: {
        offset: (state.providers.pagination.currentPage + 1)
          * state.providers.pagination.itemsPerPage,
        limit: state.providers.pagination.itemsPerPage,
      },
    }).then(({ data }) => {
      const newItems = uniqueAndSort([
        ...state.providers.items,
        ...formatProviders(data),
      ]);
      handleSetState({
        loading: false,
        providers: {
          items: newItems,
          isNextPageLoading: false,
        },
      });
    });
  };

  const formatProviders = (data: ProvidersQuery) => {
    return data.list.map((item) => {
      const organization = item.attributes.find((attribute) => attribute.key === 'organization')?.value;
      const region = item.attributes.find((attribute) => attribute.key === 'region')?.value;
      return ({
        ownerAddress: item.ownerAddress,
        hostURI: item.hostUri,
        region,
        organization,
        emailAddress: item.info.email,
        website: item.info.website,
      });
    });
  };

  const setItemsPerPage = (itemsPerPage: number) => {
    handleSetState({
      providers: {
        pagination: {
          itemsPerPage,
        },
      },
    });
  };

  return {
    state,
    loadNextPage,
    setItemsPerPage,
  };
};
