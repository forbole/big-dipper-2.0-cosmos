import { makeStyles } from '@mui/styles';

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
