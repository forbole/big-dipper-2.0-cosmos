import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

export const useStyles = () => styles();
