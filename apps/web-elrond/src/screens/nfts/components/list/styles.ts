import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
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
