import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((_theme) => ({
  root: {
    height: '100%',
  },
}));

export const useStyles = () => styles();
