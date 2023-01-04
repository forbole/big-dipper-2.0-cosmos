import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export const useStyles = () => styles();
