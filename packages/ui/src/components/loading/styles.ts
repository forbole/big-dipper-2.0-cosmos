import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const useStyles = () => styles();
