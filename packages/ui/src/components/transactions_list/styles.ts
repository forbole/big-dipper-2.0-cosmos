import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  mobile: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
}));

export default useStyles;
