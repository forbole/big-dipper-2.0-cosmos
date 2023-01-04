import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export const useStyles = () => styles();
