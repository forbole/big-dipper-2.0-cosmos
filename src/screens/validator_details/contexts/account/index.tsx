import React from 'react';
import { useAccount } from './hooks';
import { AccountState } from './types';

const initialState: AccountState = {
  rawData: {
    exists: true,
    loading: true,
    profile: {
      operatorAddress: '',
      selfDelegateAddress: '',
      description: '',
      status: 0,
      jailed: false,
      website: '',
      condition: 0,
      commission: 0,
    },
    votingPower: {
      height: 0,
      overall: 0,
      self: 0,
    },
    // staking: {
    //   delegations: [],
    //   redelegations: [],
    //   unbondings: [],
    // },
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
