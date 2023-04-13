import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '100vh',
  },
  refreshDelayNotice: {
    padding: '1rem',
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
  mobile: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
}));

export default useStyles;
