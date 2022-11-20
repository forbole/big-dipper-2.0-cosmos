import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    list: {
      minHeight: '500px',
      height: '50vh',
      [theme.breakpoints.up('lg')]: {
        minHeight: '65vh',
      },
    },
    mobile: {
      height: '100%',
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
