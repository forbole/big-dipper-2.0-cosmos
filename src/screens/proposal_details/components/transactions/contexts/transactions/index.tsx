import React from 'react';
import { useTransactions } from './hooks';
import { TransactionsState } from './types';

const initialState: TransactionsState = {
  hasNextPage: true,
  isNextPageLoading: false,
  items: [],
};

const TransactionsContext = React.createContext<TransactionsState>(initialState);

const TransactionsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useTransactions();

  return (
    <TransactionsContext.Provider
      value={{
        hasNextPage,
        isNextPageLoading,
        items,
        loadNextPage,
        itemCount,
        loadMoreItems,
        isItemLoaded,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactionsContext = () => React.useContext(TransactionsContext);

export {
  useTransactionsContext,
  TransactionsProvider,
  TransactionsContext,
};
