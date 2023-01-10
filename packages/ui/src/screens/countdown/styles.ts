import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
    background: theme.palette.background.default,
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
  chain: {
    color: theme.palette.primary.main,
  },
  logo: {
    width: '275px',
  },
  timeContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 65px)',
    gap: '8px',
    margin: theme.spacing(3, 0),
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiTypography-h1': {
      width: '100%',
      textAlign: 'center',
      background: theme.palette.background.paper,
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default useStyles;
