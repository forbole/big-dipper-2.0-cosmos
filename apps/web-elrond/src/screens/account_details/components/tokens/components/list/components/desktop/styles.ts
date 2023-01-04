import { makeStyles } from '@mui/material/styles';

const styles = makeStyles(() => ({
  root: {
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export const useStyles = () => styles();
