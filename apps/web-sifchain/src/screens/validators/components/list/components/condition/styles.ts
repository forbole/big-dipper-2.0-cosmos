import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: '10px',
    height: '10px',
    background: theme.palette.custom.condition.zero,
    margin: '0 auto',
    borderRadius: '50%',
    '&.green': {
      background: theme.palette.custom.condition.one,
    },
    '&.yellow': {
      background: theme.palette.custom.condition.two,
    },
    '&.red': {
      background: theme.palette.custom.condition.three,
    },
  },
}));

export const useStyles = () => styles();
