import { makeStyles } from '@mui/material/styles';

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
