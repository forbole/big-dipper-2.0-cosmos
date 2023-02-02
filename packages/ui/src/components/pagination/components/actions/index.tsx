import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import NextFastIcon from 'shared-utils/assets/icon-next-fast.svg';
import NextIcon from 'shared-utils/assets/icon-next.svg';
import useStyles from '@/components/pagination/components/actions/styles';
import { useTablePaginationActions } from '@/components/pagination/components/actions/hooks';

type ActionsProps = Parameters<typeof useTablePaginationActions>[0] & {
  rowsPerPageOptions?: number[];
};

/**
 * custom pagination buttons
 * @param props
 */
const Actions: FC<ActionsProps> = (props) => {
  const { classes, cx } = useStyles();

  const { count, page, rowsPerPage, onPageChange, className, rowsPerPageOptions } = props;

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
    <ul className={cx(classes.root, className)}>
      <li className="first">
        <IconButton
          className={classes.button}
          disableRipple
          onClick={handleFirstPage}
          disabled={disablePrevious}
          aria-label="first page"
          size="large"
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
          size="large"
        >
          <NextIcon className={classes.prev} />
        </IconButton>
      </li>
      {availablePages.map((x) => (
        <Typography
          component="li"
          variant="body2"
          key={x}
          onClick={() => onPageChange(null, x)}
          className={cx(classes.button, classes.pageButton, {
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
          size="large"
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
          size="large"
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
              {rowsPerPageOptions.map((x) => (
                <MenuItem key={x} value={x} className={classes.menuItem}>
                  <Typography variant="body2">{x}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </li>
      )}
    </ul>
  );
};

export default Actions;
