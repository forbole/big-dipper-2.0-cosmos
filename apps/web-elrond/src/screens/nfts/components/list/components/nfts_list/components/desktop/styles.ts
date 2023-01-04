import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export const useStyles = () => styles();
