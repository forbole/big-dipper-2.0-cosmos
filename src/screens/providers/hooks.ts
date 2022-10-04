import { useState } from 'react';
import * as R from 'ramda';
import {
  useProvidersQuery,
  // ProvidersQuery,
  useActiveProvidersListenerSubscription,
  useActiveLeasesListenerSubscription,
  useCpuMemoryStorageListenerSubscription,
  CpuMemoryStorageListenerSubscription,
} from '@graphql/types/general_types';
import {
  ProviderInfo,
  ProvidersState,
} from './types';

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
      pages: [],
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

  /**
   * Paginates the given data by splitting it into a list of arrays,
   * each one having the selected number of items.
   */
  const createPagination = (data: any[]): any[][] => {
    const pages = [];
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / state.providers.pagination.itemsPerPage);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  };

  const handleSearch = (value: string) => {
    filterAndPaginateProviders(state.providers.items, value);
  };

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

  const formatProviders = (data: any[]) => {
    return data.map((item) => {
      const organization = item.attributes?.find((attribute) => attribute.key === 'organization')?.value;
      const region = item.attributes?.find((attribute) => attribute.key === 'region')?.value;
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

  const filterAndPaginateProviders = (items: ProviderInfo[], search: string) => {
    let filteredPaginatedItems = items;

    // Filter the providers based on the search
    if (search) {
      filteredPaginatedItems = state.providers.items.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return x.ownerAddress.toLowerCase().includes(formattedSearch);
        // if x.organization !==undefined, then return search results
        // || x.organization.toLowerCase().replace(/ /g, '').includes(formattedSearch);
      });
    }

    // Handle the pagination
    handleSetState({
      loading: false,
      providers: {
        items,
        pages: createPagination(filteredPaginatedItems),
        isNextPageLoading: false,
        pagination: {
          totalCount: filteredPaginatedItems.length,
        },
      },
    });
  };

  // ===================
  // === Fetch data
  // ===================

  useProvidersQuery({
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      filterAndPaginateProviders(formatProviders(data.list), '');
    },
  });

  return {
    state,
    handleSearch,
  };
};
