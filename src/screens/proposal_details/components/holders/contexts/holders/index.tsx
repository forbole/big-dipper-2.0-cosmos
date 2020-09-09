import React from 'react';
import { usePagination } from '@hooks';
import { useTransactions } from './hooks';
import { HoldersState } from './types';

const initialState: HoldersState = {
  items: [],
  total: 0,
  page: 0,
  rowsPerPage: 0,
};

const HoldersContext = React.createContext<HoldersState>(initialState);

const HoldersProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    pageChangeCallback,
    rowsChangeCallback,
    items,
    total,
  } = useTransactions();

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    pageChangeCallback,
    rowsChangeCallback,
  });

  console.log(items, 'items');

  const sliceItems = () => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return items.slice(start, end);
  };

  return (
    <HoldersContext.Provider
      value={{
        items: sliceItems(),
        total,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
      }}
    >
      {children}
    </HoldersContext.Provider>
  );
};

const useHoldersContext = () => React.useContext(HoldersContext);

export {
  useHoldersContext,
  HoldersProvider,
  HoldersContext,
};
