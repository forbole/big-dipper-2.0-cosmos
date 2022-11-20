import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
    root: {
      overflow: 'auto',
    },
    table: {
      '& .MuiTableBody-root': {
        '& .MuiTableCell-root': {
          whiteSpace: 'nowrap',
        },
      },
    },
  }));

export const useStyles = () => styles();
