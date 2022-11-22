import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  container: {
    display: 'inline-flex',
  },
  light: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    objectFit: 'contain',
    '.mode-dark &': {
      display: 'none',
    },
  },
  dark: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    display: 'none',
    '.mode-dark &': {
      display: 'initial',
    },
  },
}));

export const useStyles = () => styles();
