import {
  useState,
  useEffect,
  useMemo,
} from 'react';

export const useValidators = () => {
  const TOTAL = 600;

  const fakeData = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '12,320,000',
    votingPowerPercent: 40,
    votingPowerTotal: '100,000,000',
    commission: '10%',
    self: '10%',
    condition: 90,
  };

  const fakeDataTwo = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '12,320,000',
    votingPowerPercent: 40,
    votingPowerTotal: '100,000,000',
    commission: '10%',
    self: '10%',
    condition: 50,
  };

  const [state, setState] = useState<{
    items: any[];
    tab: number;
    sortKey: string;
    sortDirection: 'asc' | 'desc'
  }>({
    items: [],
    tab: 0,
    sortKey: '',
    sortDirection: 'asc',
  });

  const {
    items,
    tab,
    sortKey,
    sortDirection,
  } = state;

  useEffect(() => {
    const newItems = Array(TOTAL).fill(null);
    newItems.forEach((x, i) => {
      newItems[i] = i % 2 ? fakeData : fakeDataTwo;
    });

    setState((prevState) => ({
      ...prevState,
      items: newItems,
    }));
  }, []);

  useEffect(() => {
    console.log(`tab has changed to ${tab}`);
  }, [tab]);

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  // ===========================
  // sorting
  // ===========================
  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    // if (sortKey && sortDirection) {
    //   sortableItems.sort((a, b) => {
    //     if (a[sortKey] < b[sortKey]) {
    //       return sortDirection === 'asc' ? -1 : 1;
    //     }
    //     if (a[sortKey] > b[sortKey]) {
    //       return sortDirection === 'asc' ? 1 : -1;
    //     }
    //     return 0;
    //   });
    // }
    return sortableItems;
  }, [items, sortKey, sortDirection]);

  const handleSort = (key: string) => {
    if (key === sortKey) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      }));
    }
  };

  // ===========================
  // search
  // ===========================
  const handleSearch = (value: string) => {
    console.log('search validators: ', value);
  };

  return {
    items: sortedItems,
    tab,
    handleTabChange,
    handleSort,
    sortKey,
    sortDirection,
    handleSearch,
  };
};
