import * as R from 'ramda';
import { useCallback, useState } from 'react';
import {
  CpuMemoryStorageListenerSubscription,
  ProvidersQuery,
  useActiveLeasesListenerSubscription,
  // ProvidersQuery,
  useActiveProvidersListenerSubscription,
  useCpuMemoryStorageListenerSubscription,
  useProvidersQuery,
} from '@/graphql/types/general_types';
import type { ProviderInfo, ProvidersState } from '@/screens/providers/types';

/**
 * Paginates the given data by splitting it into a list of arrays,
 * each one having the selected number of items.
 */
const createPagination = (data: ProviderInfo[], state: ProvidersState): ProviderInfo[][] => {
  const pages: Array<ProviderInfo[]> = [];
  data.forEach((x, i) => {
    const selectedKey = Math.floor(i / state.providers.pagination.itemsPerPage);
    pages[selectedKey] = pages[selectedKey] || [];
    pages[selectedKey].push(x);
  });
  return pages;
};

const formatCPUMemoryStorageData = (data: CpuMemoryStorageListenerSubscription) => {
  const mappedData = data.specs.map((item) => ({
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
  }));

  return mappedData.reduce(
    (total, row) => ({
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
    }),
    {
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
    }
  );
};

// ================================
// tx query
// ================================
const formatProviders = (data: ProvidersQuery['list']) =>
  data.map((item) => {
    const { attributes, hostUri, info, ownerAddress } = item;
    const organization = attributes?.find(
      (attribute: { key: string; value: string }) => attribute.key === 'organization'
    )?.value;
    const region = attributes?.find(
      (attribute: { key: string; value: string }) => attribute.key === 'region'
    )?.value;
    return {
      ownerAddress,
      hostURI: hostUri,
      region,
      organization,
      emailAddress: info.email,
      website: info.website,
    };
  });

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
      isNextPageLoading: true,
      items: [],
      pages: [],
      pagination: {
        itemsPerPage: 15,
        currentPage: 0,
        totalCount: 0,
      },
    },
  });

  const handleSetState = useCallback(
    (stateChange: (prevState: ProvidersState) => ProvidersState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ================================
  // tx subscription
  // ================================
  useActiveProvidersListenerSubscription({
    onData: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        activeProvidersCount: data.data.data?.activeProviders.aggregate?.count ?? 0,
      }));
    },
  });

  useActiveLeasesListenerSubscription({
    onData: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        activeLeasesCount: data.data.data?.activeLeases.aggregate?.sum?.lease_count,
      }));
    },
  });

  useCpuMemoryStorageListenerSubscription({
    onData: (data) => {
      if (!data.data.data) return;
      const activeData = formatCPUMemoryStorageData(data.data.data);
      handleSetState((prevState) => ({
        ...prevState,
        cpu: activeData.cpu,
        memory: activeData.memory,
        storage: activeData.storage,
      }));
    },
  });

  const filterAndPaginateProviders = useCallback(
    (items: ProviderInfo[], search: string) => {
      let filteredPaginatedItems = items;

      // Filter the providers based on the search
      if (search) {
        filteredPaginatedItems = state.providers.items.filter((x) => {
          const formattedSearch = search.toLowerCase().replace(/ /g, '');
          return (
            x.ownerAddress.toLowerCase().includes(formattedSearch) ||
            x.organization?.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          );
        });
      }

      // Handle the pagination
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        providers: {
          items,
          pages: createPagination(filteredPaginatedItems, state),
          isNextPageLoading: false,
          pagination: {
            itemsPerPage: state.providers.pagination.itemsPerPage,
            currentPage: state.providers.pagination.currentPage,
            totalCount: filteredPaginatedItems.length,
          },
        },
      }));
    },
    [handleSetState, state]
  );

  const handleSearch = useCallback(
    (value: string) => {
      filterAndPaginateProviders(state.providers.items, value);
    },
    [filterAndPaginateProviders, state.providers.items]
  );

  // ===================
  // === Fetch data
  // ===================

  useProvidersQuery({
    onCompleted: (data) => {
      filterAndPaginateProviders(formatProviders(data.list), '');
    },
    onError: () => {
      handleSetState((prevState) => ({ ...prevState, loading: false }));
    },
  });

  return {
    state,
    handleSearch,
  };
};
