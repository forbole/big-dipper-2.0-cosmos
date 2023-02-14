import { SelectChangeEvent } from '@mui/material';
import { MouseEvent, useCallback } from 'react';

export const useTablePaginationActions = (props: {
  className?: string;
  // backIconButtonProps?: any;
  count: number;
  // nextIconButtonProps?: any;
  onPageChange: (event: MouseEvent<HTMLButtonElement> | null, page: number) => void;
  handleRowsPerPageChange: (selectedRowsPerPage: number) => void;
  page: number;
  rowsPerPage: number;
  pageNeighbors?: 1 | 2;
}) => {
  const {
    count,
    page,
    rowsPerPage,
    onPageChange,
    pageNeighbors = 1,
    handleRowsPerPageChange,
  } = props;

  const handleFirstPage = useCallback(() => {
    onPageChange(null, 0);
  }, [onPageChange]);

  const handleNextPage = useCallback(() => {
    if (page + 1 <= Math.ceil(count / rowsPerPage) - 1) {
      onPageChange(null, page + 1);
    }
  }, [count, onPageChange, page, rowsPerPage]);

  const handlePreviousPage = useCallback(() => {
    if (page - 1 >= 0) {
      onPageChange(null, page - 1);
    }
  }, [onPageChange, page]);

  const handleLastPage = useCallback(() => {
    onPageChange(null, Math.ceil(count / rowsPerPage) - 1);
  }, [count, onPageChange, rowsPerPage]);

  const getAvailablePages = useCallback(() => {
    // handle edge case where there is not enough pages
    const totalPages = Math.ceil(count / rowsPerPage);
    const remainderCount = count - rowsPerPage * (page + 1);
    const remainingPages = Math.ceil(remainderCount / rowsPerPage);
    const pageDisplay = totalPages < pageNeighbors * 2 + 1 ? totalPages : pageNeighbors * 2 + 1;
    const availablePages = new Array(pageDisplay).fill(0);

    let selectedPageIndex = 0;
    if (remainingPages < pageNeighbors) {
      selectedPageIndex = pageDisplay - remainingPages - 1;
    } else if (pageNeighbors > page) {
      selectedPageIndex = page;
    } else {
      selectedPageIndex = pageNeighbors;
    }

    availablePages.forEach((_, i) => {
      if (i !== selectedPageIndex) {
        availablePages[i] = page - selectedPageIndex + i;
      } else {
        availablePages[i] = page;
      }
    });

    return availablePages;
  }, [count, page, pageNeighbors, rowsPerPage]);

  const handleRowOptionChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      handleRowsPerPageChange(Number(event.target.value));
    },
    [handleRowsPerPageChange]
  );

  return {
    page,
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
    handleRowOptionChange,
    availablePages: getAvailablePages(),
  };
};
