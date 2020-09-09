import React from 'react';
import { useTransaction } from './hooks';
import { TransactionState } from './types';

const initialState: TransactionState = {
  item: {},
};

const TransactionContext = React.createContext<TransactionState>(initialState);

const TransactionProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    item,
  } = useTransaction();

  return (
    <TransactionContext.Provider
      value={{
        item,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransactionContext = () => React.useContext(TransactionContext);

export {
  useTransactionContext,
  TransactionProvider,
  TransactionContext,
};
