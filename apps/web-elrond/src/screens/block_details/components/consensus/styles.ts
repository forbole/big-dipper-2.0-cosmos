import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiTypography-h2': {
        paddingBottom: theme.spacing(2),
      },
    },
    wrapper: {
      flex: 1,
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
