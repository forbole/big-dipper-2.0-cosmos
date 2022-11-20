import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      overflow: 'hidden',
      [theme.breakpoints.up('md')]: {
        // display: 'flex',
        // flexDirection: 'column',
      },
    },
  }));

export const useStyles = () => styles();
