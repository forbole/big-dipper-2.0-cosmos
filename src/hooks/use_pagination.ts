import React, { useState } from 'react';

/**
 * Hook helper for reusable
 */
export const usePagination = ({
  pageChangeCallback,
  rowsChangeCallback,
  rowsPage,
}: {
  pageChangeCallback: (page: number, rowsPerPage: number) => void;
  rowsChangeCallback: (page: number, rowsPerPage: number) => void;
  rowsPage?: number;
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPage ?? 10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    pageChangeCallback(page, rowsPerPage);
  };

  const handleChangeRowsPerPage = (selectedRowsPerPage: number) => {
    console.log(selectedRowsPerPage, 'new selected');
    setRowsPerPage(selectedRowsPerPage);
    setPage(0);
    rowsChangeCallback(page, selectedRowsPerPage);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
