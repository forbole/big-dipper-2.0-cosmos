import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      '& .MuiTypography-h2': {
        marginBottom: theme.spacing(2),
      },
    },
    list: {
      minHeight: '500px',
      height: '50vh',
      [theme.breakpoints.up('lg')]: {
        minHeight: '65vh',
      },
    },
  }));

export const useStyles = () => styles();
