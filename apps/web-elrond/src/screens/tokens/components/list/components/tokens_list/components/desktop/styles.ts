import { makeStyles } from '@mui/material/styles';

const styles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export const useStyles = () => styles();
