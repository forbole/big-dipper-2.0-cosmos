import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  list: {
    flex: 1,
    [theme.breakpoints.up('md')]: {
      overflow: 'auto',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
