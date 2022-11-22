import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
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

export const useStyles = () => styles();
