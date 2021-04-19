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
    balance: {
      available: 0,
      delegate: 0,
      unbonding: 0,
      reward: 0,
      commission: 0,
      total: 0,
    },
    staking: {
      delegations: [],
      redelegations: [],
    },
  },
};

const AccountContext = React.createContext<AccountState>(initialState);

const AccountProvider: React.FC = (props: {
  children: (options: {
    exists: boolean;
    loading: boolean;
  }) => React.ReactNode;
 }) => {
  const { children } = props;

  const {
    rawData,
    uiData,
  } = useAccount(initialState);

  return (
    <AccountContext.Provider
      value={{
        rawData,
        uiData,
      }}
    >
      {children({
        exists: rawData.exists,
        loading: rawData.loading,
      })}
    </AccountContext.Provider>
  );
};

const useAccountContext = () => React.useContext(AccountContext);

export {
  useAccountContext,
  AccountProvider,
  AccountContext,
};
