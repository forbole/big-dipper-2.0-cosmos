export const useTablePaginationActions = (props: {
  className?: string;
  backIconButtonProps?: any;
  count: number;
  nextIconButtonProps?: any;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  handleChangeRowsPerPage: (selectedRowsPerPage: number) => void;
  page: number;
  rowsPerPage: number;
  pageNeighbors?: 1 | 2;
}) => {
  const {
    count,
    page,
    rowsPerPage,
    onChangePage,
    pageNeighbors = 1,
    handleChangeRowsPerPage,
  } = props;

  const handleFirstPage = () => {
    onChangePage(null, 0);
  };

  const handleNextPage = () => {
    if (page + 1 <= Math.ceil(count / rowsPerPage) - 1) {
      onChangePage(null, page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page - 1 >= 0) {
      onChangePage(null, page - 1);
    }
  };

  const handleLastPage = () => {
    onChangePage(null, Math.ceil(count / rowsPerPage) - 1);
  };

  const getAvailablePages = () => {
    // handle edge case where there is not enough pages
    const totalPages = Math.ceil(count / rowsPerPage);
    const remainderCount = count - (rowsPerPage * (page + 1));
    const remainingPages = Math.ceil(remainderCount / rowsPerPage);
    const pageDisplay = totalPages < (pageNeighbors * 2) + 1
      ? totalPages : (pageNeighbors * 2) + 1;
    const availablePages = new Array(pageDisplay).fill(0);

    let selectedPageIndex = 0;
    if (remainingPages < pageNeighbors) {
      selectedPageIndex = pageDisplay - remainingPages - 1;
    } else if (pageNeighbors > page) {
      selectedPageIndex = page;
    } else {
      selectedPageIndex = pageNeighbors;
    }

    availablePages.forEach((x, i) => {
      if (i !== selectedPageIndex) {
        availablePages[i] = (page) - selectedPageIndex + i;
      } else {
        availablePages[i] = page;
      }
    });

    return availablePages;
  };

  const handleRowOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChangeRowsPerPage(Number(event.target.value) as number);
  };

  return {
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
    handleRowOptionChange,
    availablePages: getAvailablePages(),
  };
};
