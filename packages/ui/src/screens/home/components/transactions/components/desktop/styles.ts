import { makeStyles } from '@mui/styles';

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
