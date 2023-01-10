import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
  // mobile: {
  //   [theme.breakpoints.up('lg')]: {
  //     display: 'none',
  //   },
  // },
  // desktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('lg')]: {
  //     display: 'flex',
  //   },
  // },
}));

export default useStyles;
