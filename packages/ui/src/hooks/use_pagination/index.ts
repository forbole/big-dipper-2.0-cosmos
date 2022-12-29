import { MouseEvent, useCallback, useState } from 'react';

type Options = {
  pageChangeCallback?: (page: number, rowsPerPage: number) => void;
  rowsChangeCallback?: (page: number, rowsPerPage: number) => void;
  rowsPage?: number;
};

const getTotal = (items: unknown[]) => items.length;

/**
 * Hook helper for reusable
 */
export const usePagination = (options?: Options) => {
  const rowsPage = options?.rowsPage ?? null;
  const rowsChangeCallback = options?.rowsChangeCallback ?? null;
  const pageChangeCallback = options?.pageChangeCallback ?? null;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPage ?? 10);

  const handlePageChange = useCallback(
    (_event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null, newPage: number) => {
      setPage(newPage);
      if (pageChangeCallback) {
        pageChangeCallback(newPage, rowsPerPage);
      }
    },
    [pageChangeCallback, rowsPerPage]
  );

  const handleRowsPerPageChange = useCallback(
    (selectedRowsPerPage: number) => {
      setRowsPerPage(selectedRowsPerPage);
      setPage(0);
      if (rowsChangeCallback) {
        rowsChangeCallback(page, selectedRowsPerPage);
      }
    },
    [page, rowsChangeCallback]
  );

  const sliceItems = useCallback(
    <T>(items: T[]) => {
      const start = page * rowsPerPage;
      const end = start + rowsPerPage;
      return items.slice(start, end);
    },
    [page, rowsPerPage]
  );

  const resetPagination = useCallback(() => {
    setPage(0);
    setRowsPerPage(rowsPage ?? 10);
  }, [rowsPage]);

  return {
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    sliceItems,
    getTotal,
    resetPagination,
  };
};
