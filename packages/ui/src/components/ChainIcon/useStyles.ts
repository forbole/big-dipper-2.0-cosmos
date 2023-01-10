import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
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

export default useStyles;
