import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  list: {
    minHeight: '500px',
    height: '50vh',
    [theme.breakpoints.up('lg')]: {
      minHeight: '65vh',
    },
  },
  mobile: {
    height: '100%',
  },
}));

export default useStyles;
