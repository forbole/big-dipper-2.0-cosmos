import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto 1fr',
    gap: 8,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1.5fr auto 1fr',
      gridTemplateRows: 'unset',
    },
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  chart: {
    display: 'grid',
    placeItems: 'stretch',
  },
  error: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.palette.error.main,
  },
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    '& #price-chart': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divider: {
    height: '90%',
    placeSelf: 'end',
  },
}));

export default useStyles;
