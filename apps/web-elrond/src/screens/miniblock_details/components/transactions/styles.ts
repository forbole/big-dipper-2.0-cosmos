import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
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

export const useStyles = () => styles();
