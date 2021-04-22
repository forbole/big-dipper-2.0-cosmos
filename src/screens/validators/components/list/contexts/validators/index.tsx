import React from 'react';
import { useValidators } from './hooks';
import { ValidatorsState } from './types';

const initialState: ValidatorsState = {
  items: [],
  votingPowerOverall: 0,
  tab: 0,
  sortKey: 'validator',
  sortDirection: 'asc',
};

const ValidatorsContext = React.createContext<ValidatorsState>(initialState);

const ValidatorsProvider: React.FC = (props: {children: ({
  itemsLength: number,
}) => React.ReactNode }) => {
  const { children } = props;

  const {
    items,
    tab,
    handleTabChange,
    handleSort,
    sortKey,
    sortDirection,
    handleSearch,
    votingPowerOverall,
    uiData,
  } = useValidators(initialState);

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
        votingPowerOverall,
        uiData,
      }}
    >
      {children({ itemsLength: items.length })}
    </ValidatorsContext.Provider>
  );
};

const useValidatorsContext = () => React.useContext(ValidatorsContext);

export {
  useValidatorsContext,
  ValidatorsProvider,
  ValidatorsContext,
};
