import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export const useStyles = () => styles();
