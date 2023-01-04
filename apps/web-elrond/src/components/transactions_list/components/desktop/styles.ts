import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
  root: {
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export const useStyles = () => styles();
