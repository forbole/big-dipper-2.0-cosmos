import React from 'react';
import { useTransactions } from './hooks';
import { TransactionsState } from './types';

const initialState: TransactionsState = {
  rawData: [],
};

const TransactionsContext = React.createContext<TransactionsState>(initialState);

const TransactionsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    rawData,
    formatUi,
  } = useTransactions(initialState);

  return (
    <TransactionsContext.Provider
      value={{
        rawData,
        formatUi,
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
