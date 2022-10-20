import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { TablePagination } from '@material-ui/core';
import { Actions } from './components';
import { useStyles } from './styles';

const Pagination: React.FC<{
  className?: string;
  total: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  page: number;
  handleChangePage: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    selectedRowsPerPage: number) => void;
  handleChangeRowsPerPage: (page: number) => void;
}> = ({
  className,
  total,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPageOptions,
}) => {
  const { t } = useTranslation('common');
  const classes = useStyles();

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
      labelDisplayedRows={({
        from, to, count,
      }) => t('paginationLabelOne', {
        from,
        to,
        count,
      })}
      colSpan={6}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      ActionsComponent={(subProps) => {
        const additionalProps = {
          rowsPerPageOptions,
          handleChangeRowsPerPage,
        };

        return (
          <>
            <Actions
              {...subProps}
              {...additionalProps}
              className={classes.mobile}
            />
            <Actions
              {...subProps}
              {...additionalProps}
              className={classes.tablet}
              pageNeighbors={2}
            />
          </>
        );
      }}
    />
  );
};

export default Pagination;
