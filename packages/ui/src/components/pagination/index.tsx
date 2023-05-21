import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import useAppTranslation from '@/hooks/useAppTranslation';
import { ComponentProps, FC, MouseEvent, useCallback } from 'react';
import useStyles from '@/components/pagination/styles';
import Actions from '@/components/pagination/components/actions';

type PaginationProps = {
  className?: string;
  total: number | undefined;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  page: number;
  handlePageChange: (
    _event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    selectedRowsPerPage: number
  ) => void;
  handleRowsPerPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  className,
  total,
  rowsPerPage,
  page,
  handlePageChange,
  handleRowsPerPageChange,
  rowsPerPageOptions,
}) => {
  const { t } = useAppTranslation('common');
  const { classes, cx } = useStyles();

  const actionsComponent = useCallback(
    (subProps: ComponentProps<typeof TablePaginationActions>) => {
      const additionalProps = {
        rowsPerPageOptions,
        handleRowsPerPageChange,
      };

      return (
        <>
          <Actions {...subProps} {...additionalProps} className={classes.mobile} />
          <Actions
            {...subProps}
            {...additionalProps}
            className={classes.tablet}
            // pageNeighbors={2}
          />
        </>
      );
    },
    [classes.mobile, classes.tablet, handleRowsPerPageChange, rowsPerPageOptions]
  );

  // hides pagination if the total items is less than
  // the rows per page option (default 10)
  if (total !== undefined && total <= rowsPerPage) {
    return null;
  }

  return (
    <TablePagination
      className={cx(classes.root, className)}
      rowsPerPageOptions={[]}
      labelRowsPerPage=""
      labelDisplayedRows={({ from, to, count }) =>
        t('paginationLabelOne', {
          from,
          to,
          num: count,
        })
      }
      colSpan={6}
      component="div"
      count={total ?? (page + 2) * rowsPerPage}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handlePageChange}
      ActionsComponent={actionsComponent}
    />
  );
};

export default Pagination;
