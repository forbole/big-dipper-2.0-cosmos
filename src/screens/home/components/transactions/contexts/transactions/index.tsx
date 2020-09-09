import React from 'react';
import { useTransactions } from './hooks';
import { TransactionsState } from './types';

const initialState: TransactionsState = {
  transactions: [],
};

const TransactionsContext = React.createContext<TransactionsState>(initialState);

const TransactionsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    transactions,
  } = useTransactions();

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
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
