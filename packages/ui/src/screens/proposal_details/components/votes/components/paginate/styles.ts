import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

export const useStyles = () => styles();
