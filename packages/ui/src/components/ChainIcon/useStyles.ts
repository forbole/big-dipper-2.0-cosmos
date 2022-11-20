import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
    light: {
      '.mode-dark &': {
        display: 'none',
      },
    },
    dark: {
      display: 'none',
      '.mode-dark &': {
        display: 'initial',
      },
    },
  }));

export const useStyles = () => styles();
