import React from 'react';
import classnames from 'classnames';
import {
  IconButton,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputBase,
} from '@material-ui/core';
import NextIcon from '@assets/icon-next.svg';
import NextFastIcon from '@assets/icon-next-fast.svg';
import { useStyles } from './styles';
import { useTablePaginationActions } from './hooks';

/**
 * custom pagination buttons
 * @param props
 */
const Actions: React.FC<{
  className?: string;
  backIconButtonProps?: any;
  count: number;
  nextIconButtonProps?: any;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  handleChangeRowsPerPage: (selectedRowsPerPage: number) => void;
  page: number;
  rowsPerPage: number;
  pageNeighbors?: 1 | 2;
  rowsPerPageOptions?: number[];
}> = (props) => {
  const classes = useStyles();

  const {
    count,
    page,
    rowsPerPage,
    onChangePage,
    className,
    rowsPerPageOptions,
  } = props;

  const {
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
    availablePages,
    handleRowOptionChange,
  } = useTablePaginationActions(props);

  const disablePrevious = page === 0;
  const disableNext = page >= Math.ceil(count / rowsPerPage) - 1;

  return (
    <ul className={classnames(className, classes.root)}>
      <li className="first">
        <IconButton
          className={classes.button}
          disableRipple
          onClick={handleFirstPage}
          disabled={disablePrevious}
          aria-label="first page"
        >
          <NextFastIcon className={classes.prev} />
        </IconButton>
      </li>
      <li>
        <IconButton
          disableRipple
          className={classes.button}
          onClick={handlePreviousPage}
          disabled={disablePrevious}
          aria-label="previous page"
        >
          <NextIcon className={classes.prev} />
        </IconButton>
      </li>
      {availablePages.map((x) => (
        <Typography
          component="li"
          variant="body2"
          key={x}
          onClick={() => onChangePage(null, x)}
          className={classnames(classes.button, classes.pageButton, {
            selected: page === x,
          })}
        >
          {x + 1}
        </Typography>
      ))}
      <li>
        <IconButton
          disableRipple
          className={classes.button}
          onClick={handleNextPage}
          disabled={disableNext}
          aria-label="next page"
        >
          <NextIcon />
        </IconButton>
      </li>
      <li className="last">
        <IconButton
          disableRipple
          className={classes.button}
          onClick={handleLastPage}
          disabled={disableNext}
          aria-label="last page"
        >
          <NextFastIcon />
        </IconButton>
      </li>
      {!!rowsPerPageOptions && (
        <li className={classes.tablet}>
          <FormControl>
            <Select
              className={classes.rowSelection}
              value={rowsPerPage}
              onChange={handleRowOptionChange}
              input={<InputBase />}
            >
              {
                rowsPerPageOptions.map((x) => {
                  return (
                    <MenuItem value={x} key={x} className={classes.menuItem}>
                      <Typography variant="body2">
                        {x}
                      </Typography>
                    </MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </li>
      )}
    </ul>
  );
};

export default Actions;
