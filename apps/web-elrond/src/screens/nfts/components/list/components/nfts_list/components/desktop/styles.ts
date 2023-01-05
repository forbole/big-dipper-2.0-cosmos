import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    overflow: 'auto',
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export default useStyles;
