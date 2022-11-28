import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    minHeight: '500px',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
    },
  },
  header: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  list: {
    flex: 1,
  },
}));

export const useStyles = () => styles();
