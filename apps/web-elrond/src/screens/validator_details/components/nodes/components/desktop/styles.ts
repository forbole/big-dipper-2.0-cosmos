import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    '& .eligible': {
      color: theme.palette.custom.primaryData.four,
    },
  },
}));

export const useStyles = () => styles();
