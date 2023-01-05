import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    '& .MuiTableCell-root': {
      whiteSpace: 'nowrap',
    },
  },
}));

export default useStyles;
