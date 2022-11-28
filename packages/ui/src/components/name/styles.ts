import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    color: theme.palette.custom.fonts.highlight,
    wordBreak: 'break-all',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const useStyles = () => styles();
