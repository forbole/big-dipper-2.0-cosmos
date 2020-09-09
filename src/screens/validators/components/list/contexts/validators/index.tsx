import React from 'react';
import { useValidators } from './hooks';
import { ValidatorsState } from './types';

const initialState: ValidatorsState = {
  items: [],
  tab: 0,
  sortKey: '',
  sortDirection: 'asc',
};

const ValidatorsContext = React.createContext<ValidatorsState>(initialState);

const ValidatorsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    items,
    tab,
    handleTabChange,
    handleSort,
    sortKey,
    sortDirection,
    handleSearch,
  } = useValidators();

  return (
    <ValidatorsContext.Provider
      value={{
        items,
        tab,
        handleTabChange,
        handleSort,
        sortKey,
        sortDirection,
        handleSearch,
      }}
    >
      {children}
    </ValidatorsContext.Provider>
  );
};

const useValidatorsContext = () => React.useContext(ValidatorsContext);

export {
  useValidatorsContext,
  ValidatorsProvider,
  ValidatorsContext,
};
