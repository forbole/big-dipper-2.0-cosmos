import Actions from '@/components/pagination/components/actions';
import { useStyles } from '@/components/pagination/styles';
import TablePagination from '@material-ui/core/TablePagination';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, { useCallback } from 'react';

const Pagination: React.FC<{
  className?: string;
  total: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  page: number;
  handlePageChange: (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    selectedRowsPerPage: number
  ) => void;
  handleRowsPerPageChange: (page: number) => void;
}> = ({
  className,
  total,
  rowsPerPage,
  page,
  handlePageChange,
  handleRowsPerPageChange,
  rowsPerPageOptions,
}) => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  const actionsComponents = useCallback(
    (subProps: TablePaginationActionsProps) => {
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
            pageNeighbors={2}
          />
        </>
      );
    },
    [classes.mobile, classes.tablet, handleRowsPerPageChange, rowsPerPageOptions]
  );

  // hides pagination if the total items is less than
  // the rows per page option (default 10)
  if (total <= rowsPerPage) {
    return null;
  }

  return (
    <TablePagination
      className={classnames(className, classes.root)}
      rowsPerPageOptions={[]}
      labelRowsPerPage=""
      labelDisplayedRows={({ from, to, count }) =>
        t('paginationLabelOne', {
          from,
          to,
          count: numeral(count).format('0,0'),
        })
      }
      colSpan={6}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handlePageChange}
      ActionsComponent={actionsComponents}
    />
  );
};

export default Pagination;
