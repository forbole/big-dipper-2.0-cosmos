import React from 'react';
import { useAccount } from './hooks';
import { AccountState } from './types';

const initialState: AccountState = {
  rawData: {
    exists: true,
    loading: true,
    account: {
      address: '',
      withdrawalAddress: '',
    },
  },
};

const AccountContext = React.createContext<AccountState>(initialState);

const AccountProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    rawData,
  } = useAccount(initialState);

  return (
    <AccountContext.Provider
      value={{
        rawData,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

const useAccountContext = () => React.useContext(AccountContext);

export {
  useAccountContext,
  AccountProvider,
  AccountContext,
};
