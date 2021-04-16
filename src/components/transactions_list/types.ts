import React from 'react';

export type TransactionsListState = {
  className?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  loadNextPage?: (any) => void;
  itemCount?: number;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  rawDataTotal?: number;
  formatUi: (screen?: 'mobile' | 'desktop') => {
    block: React.ReactNode;
    hash: React.ReactNode;
    messages: string;
    result?: React.ReactNode;
    time: string;
  }[]
}
