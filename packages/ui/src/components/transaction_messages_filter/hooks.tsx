import { useState } from 'react';

export const useTransactionsFilter = (callback: (value: string) => void) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSelect = (selected: { key: string }) => {
    const newSelectedFilter = selected.key === 'none' ? '' : selected.key;
    setSelectedFilter(newSelectedFilter);
    if (callback) {
      callback(selected.key);
    }
  };

  return {
    handleSelect,
    selectedFilter,
  };
};
