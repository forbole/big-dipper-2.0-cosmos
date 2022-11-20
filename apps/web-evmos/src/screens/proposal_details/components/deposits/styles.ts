import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      overflow: 'hidden',
    },
    list: {
      flex: 1,
    },
    title: {
      marginBottom: theme.spacing(2),
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

export const useStyles = () => styles();
