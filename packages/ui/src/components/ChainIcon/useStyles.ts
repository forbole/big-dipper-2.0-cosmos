import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  container: {
    display: 'inline-flex',
  },
  light: {
    width: 'auto',
    height: 'auto',
    '.mode-dark &': {
      display: 'none',
    },
  },
  dark: {
    width: 'auto',
    height: 'auto',
    display: 'none',
    '.mode-dark &': {
      display: 'initial',
    },
  },
}));

export const useStyles = () => styles();
