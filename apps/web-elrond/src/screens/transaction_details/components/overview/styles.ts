import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  shard: {
    color: theme.palette.custom.fonts.fontFour,
    marginLeft: theme.spacing(0.5),
  },
}));

export const useStyles = () => styles();
