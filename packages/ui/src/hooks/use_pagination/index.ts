import React, { useState } from 'react';

type Options = {
  pageChangeCallback?: (page: number, rowsPerPage: number) => void;
  rowsChangeCallback?: (page: number, rowsPerPage: number) => void;
  rowsPage?: number;
};
/**
 * Hook helper for reusable
 */
export const usePagination = (options?: Options) => {
  const rowsPage = options?.rowsPage ?? null;
  const rowsChangeCallback = options?.rowsChangeCallback ?? null;
  const pageChangeCallback = options?.rowsChangeCallback ?? null;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPage ?? 10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
    if (pageChangeCallback) {
      pageChangeCallback(newPage, rowsPerPage);
    }
  };

  const handleChangeRowsPerPage = (selectedRowsPerPage: number) => {
    setRowsPerPage(selectedRowsPerPage);
    setPage(0);
    if (rowsChangeCallback) {
      rowsChangeCallback(page, selectedRowsPerPage);
    }
  };

  const sliceItems = (items: any[]) => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return items.slice(start, end);
  };

  const getTotal = (items: any[]) => items.length;

  const resetPagination = () => {
    setPage(0);
    setRowsPerPage(rowsPage ?? 10);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
    getTotal,
    resetPagination,
  };
};
